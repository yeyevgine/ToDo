import React, {useRef} from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {


    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    return (
        <div className="form">
            <p className="task-text">Task</p>
            <div className="container-input-button">
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"
                    placeholder="Write here"
                    maxLength={54}
                    helperText={inputText.length > 54 ? 'Task content can contain max 54 characters.' : ''}

                />
               

                <button onClick={submitToDoHandler} className="todo-button" type="submit">
                    Add
                </button>
            </div>
        </div>
    );
}

export default Form;