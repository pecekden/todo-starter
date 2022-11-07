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
      className="checkbox"
      checked={isChecked}
      onClick={onClick}
    ></input>
    <div className="checkbox--text">{text}</div>
  </>
)
