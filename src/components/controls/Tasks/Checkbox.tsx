import './Checkbox.css'

interface Props {
  isChecked: boolean
  onClick: () => void
  text?: string
}
export const Checkbox = ({ isChecked, onClick, text }: Props) => (
  <>
    <input
      type="checkbox"
      className="regularCheckbox"
      checked={isChecked}
      onClick={onClick}
    ></input>
    <div className="regularCheckbox--text">{text}</div>
  </>
)
