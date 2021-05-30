import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export const Form = styled.form`
  width: 40vw;
  background-color: ${(props) => props.theme.white};
  padding: 50px;
  margin-top: 25px;  
  border-radius: 8px;
  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-size: 40px;
  padding-bottom: 10px;
`;

export const Section = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 24px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  height: 50px;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.primary}99;
  }
`;

export const Input = styled.input`
font-size: 20px;
display: flex; 
padding: 0.5em;
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme};
border: none;
border-radius: 8px;
width: 100%;
margin-bottom: 0.5em;
`;


export const Textarea = styled.input`
font-size: 20px;
display: flex; 
padding: 0.5em;
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme};
border: none;
border-radius: 8px;
width: 100%;
margin-bottom: 0.5em;
`;