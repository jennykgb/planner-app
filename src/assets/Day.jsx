import { useState } from 'react'



function Day(props) {
  const {day} = props

  return (
    <div className='dayContainer'>
        <div className='dayContainer-top'>
           <h3 className='titles'>{day}</h3>
           <p>chores</p>
        </div>
        
        <ul>
            <li>task1</li>
            <li>task2</li>
        </ul>
        <p>whole day task</p>

    </div>
  )
}

export default Day
