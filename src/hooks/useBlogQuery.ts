import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useBlogQuery = () => {
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [category, setCategory] = useState<string | null>('');
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const categoryValue = searchParams.get('category');
        const pageValue = searchParams.get('page');
        setCategory(categoryValue);
        setPage(Number(pageValue) || 1);
        if (isLoading)
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
    }, [searchParams]);

    return { category, page, isLoading };
};

export default useBlogQuery;
