import "./styles.css";

function Input({name, placeholder, type, label}) {
    return (
        <input className= "main-input" type = "inputType" name={name} placeholder={placeholder}/>
        <label>{label}</label>
    );

}

export default Input;
