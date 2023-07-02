import styled from 'styled-components';
import Link from 'next/link';
import categories from '@/assets/category';
import useActiveCategory from '@/hooks/useActiveCategory';
import { themedPalette } from '@/styles/themes';
import { ListIcon } from '@/assets/svg';
import manrope from '@/styles/fonts/manrope';

interface Props {
    totalPostNumber: number;
}

const Category = ({ totalPostNumber }: Props) => {
    const { activeCategory, setActiveCategory } = useActiveCategory();

    return (
        <Wrapper>
            <NoDecorationLink
                href={{
                    pathname: '/blog',
                }}
                onClick={() => setActiveCategory(null)}
            >
                <CategoryWrapper $isActive={false}>
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
                                onClick={() =>
                                    setActiveCategory(
                                        subCategory.name.toLowerCase(),
                                    )
                                }
                            >
                                <CategoryWrapper
                                    $isActive={
                                        activeCategory ===
                                        subCategory.name.toLowerCase()
                                    }
                                >
                                    {subCategory.icon && (
                                        <Icon>
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
        if (props.$isActive) return '#9980fa';
        else return themedPalette.text1;
    }};
    background-color: ${props => {
        if (props.$isActive) return '#e4deff';
    }};
    fill: ${props => {
        if (props.$isActive) return '#9980fa';
        else return themedPalette.text3;
    }};

    &:hover {
        background-color: #e4deff;
        color: #9980fa;
        fill: #9980fa;
    }
`;

const CategoryListItem = styled.div`
    margin-bottom: 10px;
`;

const NoDecorationLink = styled(Link)`
    display: flex;
    text-decoration: none;
`;

const Icon = styled.div`
    position: relative;
    margin-right: 10px;
    padding: 1px;
    background-color: #eae9e9;
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
