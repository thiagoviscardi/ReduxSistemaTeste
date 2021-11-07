import styled from 'styled-components';
import Delete from '../Delete/index.js';
import Edit from '../Edit/index.js';

export const ProdContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 0 10px;
  padding-top: 11px;
  color:#000;
  text-align:left;
`;

export const Table = styled.table`
border:solid 1px #000;
width:80%;
`;

export const Column = styled.td`
border:solid 1px #000;
width:${props => props.width};
background-color:${props => props.bColor};
`;

export const EditButton = styled.button`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  text-align:center;
  margin:0 auto;
  background-color: #ccc;
  a{
    text-decoration:none;
  }
`;
