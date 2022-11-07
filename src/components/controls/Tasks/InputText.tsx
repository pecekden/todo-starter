import { ChangeEvent } from 'react'
import './InputText.css'

interface Props {
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const InputText = ({ placeholder, value, onChange }: Props) => (
  <input
    type="text"
    className="regularInput"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  ></input>
)
