import styled from 'styled-components';
import Link from 'next/link';
import categories from '@/assets/category';
import { notoSansKR } from '@/styles/fonts/notoSansKR';

interface Props {
    totalPostNumber: number;
}

const BlogCategory = ({ totalPostNumber }: Props) => {
    return (
        <CategoryList>
            <CategoryLink
                href={{
                    pathname: 'blog',
                }}
            >
                All ({totalPostNumber})
            </CategoryLink>
            {categories.map(category => (
                <div key={category.name}>
                    {category.name}
                    {category.subCategories?.map(subCategory => (
                        <CategoryListItem key={subCategory.name}>
                            <CategoryLink
                                href={{
                                    pathname: 'blog',
                                    query: {
                                        category:
                                            subCategory.name.toLowerCase(),
                                    },
                                }}
                            >
                                <Icon>
                                    <svg
                                        viewBox="0 0 128 128"
                                        width={16}
                                        height={16}
                                    >
                                        <path
                                            fill="gray"
                                            d={subCategory.icon}
                                        />
                                    </svg>
                                </Icon>
                                {subCategory.name}
                            </CategoryLink>
                        </CategoryListItem>
                    ))}
                </div>
            ))}
        </CategoryList>
    );
};

export default BlogCategory;

const CategoryList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: ${notoSansKR.style.fontFamily};
`;

const CategoryListItem = styled.li`
    margin-bottom: 10px;
`;

const CategoryLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    padding: 2px 10px;
    transition: background-color 0.5s ease;
    border-radius: 4px;
    width: 50%;

    &:hover {
        background-color: #9980fa;
    }
`;

const Icon = styled.span`
    position: relative;
    top: 2px;
    margin-right: 10px;
`;
