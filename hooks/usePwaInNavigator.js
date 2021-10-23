import {useState, useEffect} from 'react'
import { isChrome } from 'react-device-detect'
import { useInstallPWA } from './useInstallPwa';

export const usePwaInNavigator = () => {
    const [isVisibleInNavigator, setIsVisibleInNavigator] = useState(true);
    const {supportsPWA} = useInstallPWA();


    useEffect(() => {
        if(isChrome && supportsPWA === false){
            setIsVisibleInNavigator(false)
        }

        console.log(isVisibleInNavigator, supportsPWA, isChrome)
    }, [])

    return { isVisibleInNavigator }
}
