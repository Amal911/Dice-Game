import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
    selectedNumber,
    setSelectedNumber,
    error,
    setError,
}) => {
    const arrayNumber = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    };
    return (
        <NumberContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {arrayNumber.map((value, i) => {
                    return (
                        <Box
                            isSelected={value === selectedNumber}
                            key={i}
                            onClick={() => numberSelectorHandler(value)}
                        >
                            {value}
                        </Box>
                    );
                })}
            </div>
            <p>Select Number</p>
        </NumberContainer>
    );
};

export default NumberSelector;
const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    .flex {
        display: flex;
        gap: 20px;
    }

    p {
        font-size: 24px;
    }
    .error {
        color: red;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        gap: 5px;
        .flex {
            gap: 10px;
        }
        p {
        font-size: 16px;
    }
    .error {
        font-size: 10px;
    }
    }
`;
const Box = styled.div`
    height: 60px;
    width: 60px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};

    @media (max-width: 480px) {
        height: 40px;
        width: 40px;
        font-size: 16px;
        font-weight: 600;
    }
`;
