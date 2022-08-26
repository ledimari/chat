import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  background: transparent;
  box-sizing: border-box;
  padding-top: 11px;
  color: #00aec9;
  text-transform: uppercase;
  border: 1px solid #00aec9;
  border-radius: 5px;
  height: 56px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::placeholder {
    color: #00aec9;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  color: white;
  font-size: 25px;
  font-weight: 400;
  overflow: hidden;
  display: block;
  border: none;
  background: #00AEC9;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  height: 56px;
  border-radius: 5px;
  box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  &:hover {
    border-radius: 5px;
    background-color: #00F4D5;
    transition: all 0.7s ease-in-out;
    transform: scale(1.05);
    margin-top: 2px;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.8);
    background-image: linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

`;
