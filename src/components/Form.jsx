import { useState } from "react";
import styles from './form.module.css';
export default function Form({todos, setTodos}) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name:"", done: false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", done: false})
    }
    return (
        <form className={styles.todoform} action="" onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
                <input className={styles.modernInput} onChange={(e) => setTodo({name:e.target.value, done:false})} 
                type="text" value={todo.name} placeholder="Enter Task..."/>
                <button type="submit" className={styles.modernButton}>Add</button>
            </div>
        </form>
    )
}