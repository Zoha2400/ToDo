import React, { Componentm, useState } from 'react';
import './../Content.scss';

function Input (props) {

        const [textInp, setTextInp] = useState("");


        const handleChange = (e) => {
            setTextInp(e.currentTarget.value);
        }

        const handeSendBack = (e) => {
            props.add(textInp);

            setTextInp("");
        }

        const handleKey = (e) => {
            if(e.key == "Enter"){
                props.add(textInp);
                setTextInp("");
            }
        }

        return (
            <div className='input'>
                <input type={"text"} 
                       placeholder={"Type a task.."} 
                       className="textArea"
                       onChange={handleChange}
                       onKeyDown={handleKey}
                       value={textInp}
                       />
                <button className='add' onClick={handeSendBack}>+</button>
            </div>
        );
}

export default Input;
