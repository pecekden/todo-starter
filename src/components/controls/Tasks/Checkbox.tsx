import './Checkbox.css'

interface Props {
  isChecked: boolean
  onChange: () => void
  text?: string
}
export const Checkbox = ({ isChecked, onChange, text }: Props) => (
  <>
    <input
      type="checkbox"
      className="checkbox"
      checked={isChecked}
      onChange={onChange}
    ></input>
    {text ? <div className="checkbox--text">{text}</div> : null}
  </>
)