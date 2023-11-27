import styled from "styled-components"


const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play Dice Game</h2>
        <div className="text">
        <p>
            * Select any number. <br />
            * Click on dice. <br />
            * If selected number is equal to dice number, you will get some point as dice. <br />
            * If you guess wrong 1 point will be deducted. <br />
        </p>
        </div>
        
    </RulesContainer>
  )
}

export default Rules;


const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 20px;
    }
    @media (max-width: 480px) {
        h2{
            font-size: 18px;
        }
        p{
            font-size: 14px;
        }
    }
`;