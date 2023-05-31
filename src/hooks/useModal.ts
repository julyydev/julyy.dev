import { useEffect, useState } from 'react';

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    }, [isModalOpen]);
    const handleModalToggle = () => {
        setIsModalOpen(prev => !prev);
    };

    return { isModalOpen, handleModalToggle };
};

export default useModal;
