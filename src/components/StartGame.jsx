import styled from "styled-components";
import { Button } from "../styled/Button";


function StartGame({toggle}){
    return <div>
        <Container>
            <div >
            <img src="images/dices.png" alt="" />
            </div>
            <div className="content">
                <h1 >DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button> 
            </div>
        </Container>
    </div>
}

export default StartGame;





const Container  = styled.div`
    
    max-width: 1180px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    align-self: center;
    height: 90vh;

    .content{
        display: flex;
        flex-direction: column;
        align-items: end;
        h1 {
            font-size: 96px;  
            line-height: 90px;
        }
    }
    Button{
        margin-top: 20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        
        text-align: center;
        height: 90vh;
        justify-content: center;
        img{
            width: 320px;
        }
        .content{
            align-items: center;
        }
        .content h1{
            font-size: 4rem;
            line-height: 70px;
        }
        Button{
            margin-top: 20px;
        }
    }
`;

