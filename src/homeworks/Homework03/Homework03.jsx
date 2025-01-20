import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import "./styles.css";

function Homework03(){
    return (
        <div className="email-input">
        <Input name="Email"
        type="text"
        placeholder="Enter your email"
        label="email"/>
        <Button name="Send email"
        type="submit"/> 
        </div>
    );
}

export default Homework03;