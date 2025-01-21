import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import "./styles.css";

function Homework03() {
  return (
    <div className="homework03-wrapper">
      <form className="form-element">
        <Input
          name="email"
          placeholder="Enter your email"
          type="email"
          label="Email*"
          id="email_input_id"
        />
        <Button name="Send email" />
      </form>
    </div>
  );
}

export default Homework03;