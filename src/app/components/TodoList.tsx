import React from 'react'

const TodoList = (props) => {
     return (
          <>
               <div className='flex justify-center'>
               <li >
            {props.item}
       </li>
               </div>
         
      <div className='flex justify-center' onClick={e => {
      props.deleteTodo(props.index)
               }}>delete</div>
          </>
          )
}

export default TodoList