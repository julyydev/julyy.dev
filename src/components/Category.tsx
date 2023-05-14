import styled from 'styled-components';
import Link from 'next/link';
import categories from '@/assets/category';
import useActiveCategory from '@/hooks/useActiveCategory';
import { themedPalette } from '@/styles/themes';
import { ListIcon } from '@/assets/svg';
import manrope from '@/styles/fonts/manrope';

interface Props {
    totalPostNumber?: number;
}

const BlogCategory = ({ totalPostNumber }: Props) => {
    const { activeCategory, setActiveCategory } = useActiveCategory();

    return (
        <CategoryList>
            <CategoryLink
                href={{
                    pathname: '/blog',
                }}
                onClick={() => setActiveCategory(null)}
            >
                All ({totalPostNumber})
            </CategoryLink>
            {categories.map(category => (
                <div key={category.name}>
                    <MainCategory>
                        <StyledListIcon
                            width={10}
                            height={10}
                            fill={themedPalette.text3}
                        />
                        {category.name}
                    </MainCategory>
                    {category.subCategories?.map(subCategory => (
                        <CategoryListItem key={subCategory.name}>
                            <CategoryLink
                                isActive={
                                    activeCategory ===
                                    subCategory.name.toLowerCase()
                                }
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
                                <SubCategoryWrapper
                                    isActive={
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
                                </SubCategoryWrapper>
                            </CategoryLink>
                        </CategoryListItem>
                    ))}
                </div>
            ))}
        </CategoryList>
    );
};

export default BlogCategory;

const CategoryList = styled.div`
    list-style: none;
    margin: 0;
    font-family: ${manrope.normal.style.fontFamily};
    top: 214px;
    left: 0;
`;

const MainCategory = styled.div`
    font-size: 13px;
    color: ${themedPalette.text3};
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 5px;
`;

interface ActiveProps {
    isActive?: boolean;
}

const SubCategoryWrapper = styled.div<ActiveProps>`
    display: flex;
    align-items: center;
    color: ${props => {
        if (props.isActive) return '#9980fa';
        else return 'inherit';
    }};
    transition: color 0.3s;
`;

const CategoryListItem = styled.li`
    margin-bottom: 10px;
`;

const CategoryLink = styled(Link)<ActiveProps>`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${themedPalette.text1};
    padding: 2px 10px;
    border-radius: 5px;
    background-color: ${props => {
        if (props.isActive) return '#e4deff';
    }};
    fill: ${props => {
        if (props.isActive) return '#9980fa';
        else return themedPalette.text3;
    }};
    transition: color 0.3s ease background-color 0.3s ease;
    font-size: 15px;

    &:hover {
        background-color: #e4deff;
        color: #9980fa;
        fill: #9980fa;
    }
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
