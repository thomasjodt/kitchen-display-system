import styled from 'styled-components'

interface Props {
  label?: string
  name: string
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = function ({ label, name, placeholder, value, onChange }) {
  return (
    <div>
      {(label !== null) && <Label htmlFor={name}>{label}</Label>}
      <TextInput
        type='text'
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const Label = styled.label`
  display: block;
  font-weight: 400;
  margin-bottom: 2px;
  font-size: 14px;
`

const TextInput = styled.input`
  border-radius: 4px;
  padding: 12px;
  border: 1px solid #d7d7d7;
  font-size: 16px;
  outline: none;
  margin-bottom: 12px;
  width: 100%;

  &:focus {
    outline: 2px solid rgba(18, 111, 218, 0.5);
    border-color: transparent;
  }
`
