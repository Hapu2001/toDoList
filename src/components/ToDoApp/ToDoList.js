import React,{useState} from 'react'
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from "react-icons/ai";
import ToDoForm from './ToDoForm';
export default function ToDoList(props) {
  const toDoList=props.toDoList;
  const updateToDo=props.updateToDo
  const [editToDo, setEditToDo]=useState({ 
      id:null,
      value:''
  })
  const submitEdit =value=>{
      updateToDo(editToDo.id, value);
      setEditToDo({
        id: null,
        value:''  
      });
  };
  if(editToDo.id){
    return <ToDoForm editToDo={editToDo} onSubmit={submitEdit} />
  }
  return (
    <div className='toDoList'>
      {
        toDoList.map((toDo)=>{
          return (
              <div key={toDo.id}  className='toDo flex margin'>
                <p className='toDoText'>{toDo.text}</p>
                <p>
                  <FiEdit2 onClick={()=> setEditToDo({id: toDo.id, value: toDo.text})} />
                 <AiFillDelete onClick={()=>{props.deleteToDo(toDo.id)}} />
                </p>
              </div>
          )
        })
      }

    </div>
  )
}
