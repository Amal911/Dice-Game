import styled from "styled-components";

function TotalScore({ score }) {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    );
}

export default TotalScore;

const ScoreContainer = styled.div`
    text-align: center;
    max-width: 200px;
    h1 {
        font-size: 100px;
        line-height: 100px;
    }
    p {
        font-size: 24px;
        font-weight: 500;
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 80px;
            line-height: 70px;
        }
        p {
            font-size: 16px;
            font-weight: 500;
        }
    }
`;
