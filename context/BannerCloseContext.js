import { createContext, useState } from 'react';

const BannerCloseContext = createContext();

const BannerCloseProvider = ({children}) => {
    const [isVisible, setIsVisible] = useState(true);

    const data = {isVisible, setIsVisible};

    return (
        <BannerCloseContext.Provider value={data}>{children}</BannerCloseContext.Provider>
    );
};

export {BannerCloseProvider};

export default BannerCloseContext;