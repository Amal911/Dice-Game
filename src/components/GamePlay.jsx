import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


function GamePlay() {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [currentDice, setCurentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules ] = useState(false);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const rollDice = () => {
        if (!selectedNumber) {
            setError("Yoy have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber();
        setCurentDice((prev) => randomNumber);

        if (selectedNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 1);
        }
        setSelectedNumber(undefined);
    };
    const resetScore= () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="top-section">
                <TotalScore score={score} />
                <NumberSelector
                    setError={setError}
                    error={error}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className="buttons">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={()=> setShowRules((prev)=>!prev)}>{showRules?"Hide Rules":"Show Rules"}</Button>
                {showRules && <Rules />}
            </div>

        </MainContainer>
    );
}

export default GamePlay;

const MainContainer = styled.div`
    .top-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 480px) {
            flex-direction: column;
            gap: 20px;
        }
    }
    .buttons {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`;
