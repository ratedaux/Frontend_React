import "./styles.css";
import Button from "../../components/Button/Button";
import { useState } from "react";

function Feedback(){
const [counter, setCounter] = useState(0);
const [counter1, setCounter1] = useState(0);

  const likeClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  const dislikeClick = () => {
    setCounter1((prevValue1) => prevValue1 + 1);
  };
return(
    <div className="feedback-wrapper">
        <div>{counter}</div>
        <div className="button-wrapper">
        <Button name="Like" type="button" onClick={likeClick}/>
        </div>
        <div className="button-wrapper">
        <Button name="Dislike" type="button" onClick={dislikeClick} />
        </div>
        <div>{counter1}</div>
    </div>
);
}

export default Feedback;