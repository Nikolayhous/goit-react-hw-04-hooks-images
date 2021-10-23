import { useState } from 'react';

const useToggle = initValue => {
    const [isToggle, setIsToggle] = useState(initValue);

    const toggle = () => {
        setIsToggle(prev => !prev);
    };
    return [isToggle, toggle];
};

export default useToggle;
