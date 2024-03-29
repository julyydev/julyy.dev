import styled from 'styled-components';
import Link from 'next/link';
import categories from '@/assets/category';
import { themedPalette } from '@/styles/themes';
import { ListIcon } from '@/assets/svg';
import manrope from '@/styles/fonts/manrope';
import { useSearchParams } from 'next/navigation';

interface Props {
    totalPostNumber: number;
}

const Category = ({ totalPostNumber }: Props) => {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category');

    return (
        <Wrapper>
            <NoDecorationLink
                href={{
                    pathname: '/blog',
                    query: {
                        category: 'all',
                    },
                }}
            >
                <CategoryWrapper $isActive={activeCategory === 'all'}>
                    All ({totalPostNumber})
                </CategoryWrapper>
            </NoDecorationLink>
            {categories.map(category => (
                <div key={category.name}>
                    <LargeCategory>
                        <StyledListIcon
                            width={10}
                            height={10}
                            fill={themedPalette.text3}
                        />
                        {category.name}
                    </LargeCategory>
                    {category.subCategories?.map(subCategory => (
                        <CategoryListItem key={subCategory.name}>
                            <NoDecorationLink
                                href={{
                                    pathname: '/blog',
                                    query: {
                                        category:
                                            subCategory.name.toLowerCase(),
                                    },
                                }}
                            >
                                <CategoryWrapper
                                    $isActive={
                                        activeCategory ===
                                        subCategory.name.toLowerCase()
                                    }
                                >
                                    {subCategory.icon && (
                                        <Icon
                                            $isActive={
                                                activeCategory ===
                                                subCategory.name.toLowerCase()
                                            }
                                        >
                                            <Positioner>
                                                <subCategory.icon
                                                    width={14}
                                                    height={14}
                                                />
                                            </Positioner>
                                        </Icon>
                                    )}
                                    {subCategory.name}
                                </CategoryWrapper>
                            </NoDecorationLink>
                        </CategoryListItem>
                    ))}
                </div>
            ))}
        </Wrapper>
    );
};

export default Category;

const Wrapper = styled.div`
    list-style: none;
    margin: 0;
    font-family: ${manrope.normal.style.fontFamily};
    top: 214px;
    left: 0;
`;

const LargeCategory = styled.div`
    font-size: 13px;
    color: ${themedPalette.text3};
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 5px;
`;

interface CategoryWrapperProps {
    $isActive: boolean;
}

const CategoryWrapper = styled.div<CategoryWrapperProps>`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2px 10px;
    border-radius: 7px;
    font-size: 15px;
    color: ${props => {
        if (props.$isActive) return themedPalette.primary_700;
        else return themedPalette.text2;
    }};
    background-color: ${props => {
        if (props.$isActive) return themedPalette.primary_100;
    }};
    fill: ${props => {
        if (props.$isActive) return themedPalette.primary_700;
        else return themedPalette.text3;
    }};

    &:hover {
        background-color: ${themedPalette.input};
        color: ${themedPalette.text1};
        fill: ${themedPalette.text1};
    }
`;

const CategoryListItem = styled.div`
    margin-bottom: 10px;
`;

const NoDecorationLink = styled(Link)`
    display: flex;
    text-decoration: none;
`;

interface IconProps {
    $isActive: boolean;
}

const Icon = styled.div<IconProps>`
    position: relative;
    margin-right: 10px;
    padding: 1px;
    background-color: ${props => {
        return props.$isActive ? 'none' : themedPalette.input;
    }};
    border-radius: 7px;
    width: 25px;
    height: 25px;
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
        display: block;
    }
`;

const StyledListIcon = styled(ListIcon)`
    margin-right: 10px;
    margin-left: -8px;
`;
