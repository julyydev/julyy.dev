import { useEffect, useState } from 'react';

const useActiveCategory = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>('');

    useEffect(() => {
        const match = window.location.search.match(/category=(\w+)/);
        setActiveCategory(match ? match[1] : null);
    }, []);
    return { activeCategory, setActiveCategory };
};

export default useActiveCategory;
