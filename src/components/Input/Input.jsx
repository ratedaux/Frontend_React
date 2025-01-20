import "./styles.css";

function Input({name, placeholder}) {
    return (
        <input className= "main-input" type = "inputType" label = "input" name={name} placeholder={placeholder}/>
    );

}

export default Input;