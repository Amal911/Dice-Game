import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`images/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
};

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    .dice {
        cursor: pointer;
    }
    p {
        font-size: 24px;
    }
    @media (max-width: 480px) {
        .dice img{
            width: 220px;
        }
        p {
        font-size: 16px;
    }
    }
`;
