import React, {useState, useRef} from 'react'

function ToDoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef()

  const handleChange = e =>{
    setInput(e.target.value)
  };
  const handleSubmit = e =>{
    e.preventDefault();
    props.onSubmit({
      id:Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
    inputRef.current.focus();
}


  return (
    <form className='todo-form margin' onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Add a todo'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
      
        ></input>
        <button>Add </button>
    </form>
  )
}

export default ToDoForm