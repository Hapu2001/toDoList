import React,{useState, useEffect} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
export default function ToDoApp() {

  const getLocalToDo = () =>{
    let listToDo = localStorage.getItem('todos');
    if(listToDo){
        return JSON.parse(localStorage.getItem('todos'));
    }else{
      return [];
    }
  }

  const [toDoList, setToDoList] = useState(getLocalToDo());



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

  useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(toDoList))
        },[toDoList]);
 console.log(toDoList)
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
