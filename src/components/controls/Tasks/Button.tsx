import './Button.css'

interface Props {
  buttonText: string
  onClick: () => void
}
export const Button = ({ buttonText, onClick }: Props) => (
  <button type="button" className="regularButton" onClick={onClick}>
    {buttonText}
  </button>
)
