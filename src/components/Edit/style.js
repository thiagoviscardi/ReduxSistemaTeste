import styled from 'styled-components';

export const EditButton = styled.button`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  text-align:center;
  margin:0 auto;
  background-color: #ccc;
`;

export const Label = styled.label`
  padding: 10px 10px 10px 20px;
  font-size:18px;
  font-weight:bold;
  color:#000;
  text-align:left;
  display:block;
  width:98%;
`;

export const Input = styled.input`
  width: 98%;
  position: relative;
  padding-top: 11px;
  color:#000;
  text-align:left;
`;

export const Button = styled.button`
        width: 20%;
    height: 40px;
    margin-top: 20px;
    background-color: #000;
    color: red;
    font-weight: bold;
    border-radius: 10px;
    font-size: 15px;
`;