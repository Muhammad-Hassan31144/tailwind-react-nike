
const Button = ( {label, icon} ) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 
    font-montserrat text-lg leading-none bg-coral-red border-coral-red text-white rounded-full"> {label}
     {icon && <img className="w-5 h-5 ml-2 rounded-full" src={icon} alt="arrow" />}
    </button>  
)
}

export default Button