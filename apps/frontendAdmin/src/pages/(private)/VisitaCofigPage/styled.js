import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const InfoZone = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  
  h1{
    margin: 0px 0px 5px 0px;
    padding: 0px;
    color: #555;
  }

  h2{
    margin: 0px 0px 5px 15px;
    padding: 0px;
    color: #555;
  }

  span{
    font-family: 'Myriad Pro', sans-serif;
    color: #555;
    font-size: 16px;
  }

  .visitas-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 450px) {
    h2{
      font-size: 15px;
    }
  }
`;

export const ContentZone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ManupulationDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  margin-bottom: 10px;
`;

export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 26px;

  .input-zone{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Vazio = styled.div`
  display: flex;
  height: 178px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  .icon{
    color: #DA731F;
    font-size: 40px;
  }
`;

export const FilterZone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;

  .ButtonsZone{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  min-width: 180px;
  padding: 8px 12px;
  border: 2px solid #006343;
  border-radius: 4px;
  background-color: transparent;
  font-family: 'Myriad Pro', sans-serif;
`;

export const DateFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    padding: 8px 12px;
    border: 2px solid #006343;
    border-radius: 4px;
    font-family: 'Myriad Pro', sans-serif;
    background-color: transparent;

    &:focus {
      outline: none;
      border-color: green;
      box-shadow: 0 0 5px green;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;