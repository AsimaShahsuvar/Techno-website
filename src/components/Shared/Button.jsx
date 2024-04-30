
// eslint-disable-next-line react/prop-types
const Button = ({text, bgColor, textcolor, handler = () => {}}) => {
  return (
    <button 
    onClick={handler}
    className={`${bgColor} ${textcolor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
      {text}
    </button>
  )
}

export default Button
