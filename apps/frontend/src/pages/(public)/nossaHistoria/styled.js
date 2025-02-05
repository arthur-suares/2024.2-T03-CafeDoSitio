import styled from "styled-components";

export const Title = styled.h1`
  text-align: left;
  font-size: 2.5rem;
  justify-content: space-between;
  color:hsl(152, 41.10%, 28.60%);
  margin: 2;
`;

export const Text = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1rem;


`;

export const Space = styled.div`
  height: 50px;
`;

export const TimelineSection = styled.div`

`;

export const FirstTextSection = styled.div`

`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  //padding: 20px;
  max-width: 600px;
  padding-block: 4rem;
  
  .img {
    align-items: left;
    width: auto; 

    @media(max-width: 800px){
      width: 70vw;
    }
  }
`;

export const SecondTextSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 


    @media(max-width: 1327px){
      flex-direction: column;
    }
`;

export const ThirdTextSection = styled.div`
  align-items: center;
  justify-content: center;
`;

export const DiferencialSection = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    justify-content: center;

    @media(max-width: 1320px){
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
`;


export const DiferencialCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
`;

export const DiferencialText = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.1rem;
`;

export const BackgroundLine = styled.div`
    z-index: 1;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F29947;  
    //padding: 20px;
    width: 100%;

    @media(max-width: 970px){
      display: none;
    }
`;

export const RedLine = styled.div`
  display : flex;
  width: 5px;
  border-radius: 1px;
  background-color: #A53A44;  

`;



