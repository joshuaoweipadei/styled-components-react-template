import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#00ecf2' : '#005557')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#005557' : '#00ecf2')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 10px;
  margin-top: 10px;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#005557' : '#00ecf2')};
    color: ${({ primary }) => (primary ? '#00ecf2' : '#005557')};
  }
`