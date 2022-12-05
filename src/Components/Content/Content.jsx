import React, { useState } from 'react';
import './Content.scss'
import Draggable from 'react-draggable';
import Input from './input/Input';
import TodoWrapper from './ToDos/TodoWrapper';


function Content() {

        const [todos, setTodos] = useState([]);



        const addTodo = (userinf) => {
            if(userinf && userinf.length < 100){

                const newItem = {
                    id: (todos.length + 1),
                    text: userinf,
                    complete: false,
                }

                setTodos([...todos, newItem]);

            }
        }

        const removeTodo = (id) => {
            setTodos([...todos.filter((todo) => todo.id !== id)])
        }   
        
        const doneTodo = (id) => {
            setTodos(
                [...todos.map((todo) => 
                      todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
                )]
            )
        }

        const clearAll = () => {
            setTodos([]);
        }

        return (
            <Draggable handle='.header'>
                <div className='Content'>
                    <div className="header">
                            <button className='ClearAll' 
                                    title='Clear All'
                                    onClick={clearAll}
                                    ></button>
                             ToDo List
                         </div>

                    <Input add={addTodo} />

                    <TodoWrapper 
                        todos={todos}
                        remove={removeTodo}
                        done={doneTodo}
                    />

                    <div className="length">
                        Amount of tasks: {todos.length}
                    </div>

                </div>
            </Draggable>
        );
}



export default Content;
