import { useEffect, useState } from 'react';

const useScrollTop = () => {
    const [isScrollTop, setIsScrollTop] = useState<boolean>(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrollTop(window.scrollY === 0);
        });
    }, [isScrollTop]);
    return { isScrollTop };
};

export default useScrollTop;
