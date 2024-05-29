'use client'
import React, { useState } from 'react'

const TodoInput = (props) => {

     const [inputText, setInputText] = useState("")

     return (
          <>
            <div className='flex justify-center mt-10 p-10'>
                    <div className='p-10'>
                         <input type="text" placeholder='Enter your todo'
                              value={inputText}
                              onChange={e =>
                              { setInputText(e.target.value) }}
                              className='text-black' />
                         
                    </div>
           
                    <button onClick={() => {
                         props.addTodo(inputText)
                         setInputText("")
                    }}>add</button>
                    
                    
               </div>
               <div className='flex justify-center'>{inputText}</div>
               
      
       </>
  )
}

export default TodoInput