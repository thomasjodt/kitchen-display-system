import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string
  name: string
  value?: string
  buttonText?: string
  buttonAction?: (value: string) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = function ({ label, name, placeholder, value, buttonText, buttonAction, onChange }) {
  const handleClick = (): void => {
    if (buttonAction !== undefined && value !== undefined) {
      buttonAction(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') e.preventDefault()

    if (e.key === 'Enter' && e.ctrlKey) {
      if (buttonAction !== undefined && value !== undefined) {
        buttonAction(value)
      }
    }
  }

  return (
    <>
      {(label !== null) && <Label htmlFor={name}>{label}</Label>}
      <Div>
        <TextInput
          type='text'
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        {(buttonText !== undefined) && (
          <Button
            type='button'
            text={buttonText}
            style={{ margin: 4 }}
            onClick={handleClick}
          />
        )}
      </Div>
    </>
  )
}

const Label = styled.label`
  display: block;
  font-weight: 400;
  margin-bottom: 2px;
  font-size: 14px;
`

const Div = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid #d7d7d7;
  font-size: 16px;
  outline: none;
  margin-bottom: 12px;
  width: 100%;

  &:has(input:focus) {
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(18, 111, 218, 0.4);
  }
`
const TextInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 4px;
`
