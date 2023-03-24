const Button = ({ fullwidth, icon, text,radius, color, fun }) => <button 
    onClick={fun}
    style={{
        background : color,
        borderRadius:radius ? `${radius}px`:'5px'
    }}
    className={`${fullwidth ? 'w-full':'w-1/2'} flex gap-2 items-center justify-center text-white text-sm capitalize p-1 py-2`}>{text} {icon}</button>;
export default Button;