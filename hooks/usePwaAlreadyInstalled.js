import {useState, useEffect} from 'react';

export const usePwaAlreadyInstalled = () => {
    const [pwaInstall, setPwaInstall] = useState(false);

    useEffect(() => {        
        if (window.matchMedia('(display-mode: standalone)').matches) {  
            setPwaInstall(true);
        };
    }, [])

    return {pwaInstall};
};
