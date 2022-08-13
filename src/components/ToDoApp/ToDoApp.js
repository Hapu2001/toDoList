import React,{useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
export default function ToDoApp() {

  const [toDoList, setToDoList] = useState([]);



  const addToDo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }
      const newToDos = [todo, ...toDoList]
      setToDoList(newToDos);
      console.log(...toDoList)
  }
  const deleteToDo = id =>{
        const deteleArr = [...toDoList].filter(todo => todo.id !== id)
        setToDoList(deteleArr);
  }
  const updateToDo = (todoId, newText) =>{
    if(!newText.text || /^\s*$/.test(newText.text)){
      return;
    }
    setToDoList(prev => prev.map(item => (item.id === todoId ? newText : item)) )

  }


  return (
    <div className="toDoApp">
        <ToDo />
        <ToDoForm 
                  onSubmit={addToDo}
        />
        <ToDoList 
                toDoList={toDoList}
                deleteToDo={deleteToDo}
                updateToDo={updateToDo}
        />
    </div>
  )
}
