import React from 'react'
import styled from 'styled-components'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button: React.FC<Props> = function ({ text }) {
  return (
    <StyledButton>{text}</StyledButton>
  )
}

const StyledButton = styled.button`
  border: none;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  background-color: #2d72d2;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: background-color 200ms ease;

  &:hover {
    background-color: #245BA8;
  }
`
