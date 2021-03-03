import './Button.scss'

const Button = (props) => {
  return (
    <button
      className="music-button"
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
