import styles from "./todoItem.module.css"
export default function TodoItem({item, todos, setTodos}) {
    function handleDelete(item){
        //cccccccccvconsole.log("button clicked for this item", item);
        setTodos(todos.filter((todo) => todo !== item));
    }

    function handleClick(name){
       const newArray = todos.map((todo) =>todo.name === name ? {...todo, done:!todo.done} : todo);
       setTodos(newArray)
       //console.log(todos);
    }
    const classStyleName = item.done ? styles.completed : "";
    return (
        <div className={styles.item}> 
            <div className={styles.itemName}>
                <span className={classStyleName} onClick={() => handleClick(item.name)}>
                {item.name}
                </span>
                
            <span>
                <button onClick={() => handleDelete(item)} className={styles.deleteButton}>
                    X
                </button>
            </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}