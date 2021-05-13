import React, { useState } from 'react'
import ToDoList from './ToDoList'

function App(){
   
  //input value taking and displaying
  const [inpt,setInpt] = useState('');
  const itemEvent = (event) =>{
    setInpt(event.target.value)
  }

  const [items,setItems] = useState([])   //empty array
  const listItems = () =>{
    setItems((oldItems) => {
      return [...oldItems,inpt]

    })
    // setInpt('')
  }


  //delet array elemt
  const delet= (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index !== id;
      }) 
    }) 
  }
  return (
    <div className='main'>
      <div className='center'>
        <h1>ToDo List</h1>
        <input type='text' placeholder='Add a Items' onChange = {itemEvent} />
        <button onClick= {listItems}>+</button>
        <ol>
          {items.map((paramtr, index) =>{
            return (<ToDoList 
              text={paramtr}
              key = {index}
              id = {index} 
              onSelect = {delet} />)
          })}
        </ol>
      </div>
    </div>
  )
}

export default App;
