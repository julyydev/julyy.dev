import { CategoryCppIcon, CategoryJavaScriptIcon } from './svg';
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
                name: 'C++',
                icon: CategoryCppIcon,
            },
            {
                type: 'sub',
                name: 'JavaScript',
                icon: CategoryJavaScriptIcon,
            },
        ],
    },
    {
        type: 'main',
        name: 'Problem Solving',
        subCategories: [
            {
                type: 'sub',
                name: 'Baekjoon',
            },
        ],
    },
    {
        type: 'main',
        name: 'Computer Science',
        subCategories: [
            {
                type: 'sub',
                name: 'Network',
            },
            {
                type: 'sub',
                name: 'Operating System',
            },
        ],
    },
    {
        type: 'main',
        name: 'Test',
        subCategories: [
            { type: 'sub', name: 'aaa' },
            { type: 'sub', name: 'bbb' },
            { type: 'sub', name: 'ccc' },
        ],
    },
];

export default categories;
