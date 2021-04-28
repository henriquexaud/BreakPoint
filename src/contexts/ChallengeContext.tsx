import { createContext, useState, ReactNode } from "react"
import challenges from "../../challenges.json"

interface Challenge {
    img: string;
    description: string;
    xp: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengeCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(50);
    const [challengeCompleted, setChallengeCompleted] = useState(2);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallenge = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallenge];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                challengeCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            }}
        >
            {children}
        </ChallengeContext.Provider>
    );
}