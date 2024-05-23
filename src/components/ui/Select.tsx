import styled from 'styled-components'

interface Props {
  label?: string
  name: string
  value?: string
  children: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<Props> = function ({ label, name, value, children, onChange }) {
  return (
    <div>
      {(label !== null) && <Label htmlFor={name}>{label}</Label>}
      <SelectInput
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {children}
      </SelectInput>
    </div>
  )
}

const SelectInput = styled.select`
border-radius: 4px;
  padding: 12px;
  border: 1px solid #d7d7d7;
  font-size: 16px;
  /* outline: 2px solid rgba(0, 76, 163, 0.3); */
  outline: none;
  margin-bottom: 12px;
  width: 100%;
`
const Label = styled.label`
  display: block;
  font-weight: 400;
  margin-bottom: 2px;
  font-size: 14px;
`
