import React, {  useState } from 'react';
import './../Content.scss'
import TodoCard from './TodoCard';

function TodoWrapper(props) {
    
    return(
        <div className='ToDoWrapper'>
            <div className="ToDoDisplay">
                {props.todos.map((todo) => {
                    return(
                        <TodoCard
                        text={todo.text}
                        id={todo.id}
                        complete={todo.complete}
                        remove={props.remove}
                        done={props.done}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoWrapper;
