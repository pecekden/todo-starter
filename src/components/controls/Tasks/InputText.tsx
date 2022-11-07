interface Props {
  placeholder: string
  value: string
  onChange: () => void
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
