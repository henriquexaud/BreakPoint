import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';

import { ChallengeContext } from './ChallengeContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    resetCountdown: () => void;
    startCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengeContext);

    const [time, setTime] = useState(25 * 0.6); //60 => 0.6
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        setIsActive(false);
        clearTimeout(countdownTimeout);
        setTime(25 * 0.6); //60 => 0.6
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setIsActive(false);
            setHasFinished(true);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            resetCountdown,
            startCountdown
        }}>
            { children}
        </CountdownContext.Provider>
    )
}
