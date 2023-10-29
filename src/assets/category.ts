import {
    CategoryBlogIcon,
    CategoryCppIcon,
    CategoryJavaScriptIcon,
} from './svg';
import React from 'react';

type CategoryType = 'main' | 'sub';

interface Category {
    type: CategoryType;
    name: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    subCategories?: Category[];
}

const categories: Category[] = [
    {
        type: 'main',
        name: 'Language',
        subCategories: [
            {
                type: 'sub',
                name: 'JavaScript',
                icon: CategoryJavaScriptIcon,
            },
            {
                type: 'sub',
                name: 'C++',
                icon: CategoryCppIcon,
            },
        ],
    },
    {
        type: 'main',
        name: 'ETC',
        subCategories: [{ type: 'sub', name: 'Blog', icon: CategoryBlogIcon }],
    },
];

export default categories;
