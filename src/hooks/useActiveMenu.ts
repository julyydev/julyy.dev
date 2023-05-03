import { useEffect, useState } from 'react';

const useActiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState<string>('');

    useEffect(() => {
        setActiveMenu(window.location.pathname.slice(1));
    }, []);
    return { activeMenu, setActiveMenu };
};

export default useActiveMenu;
