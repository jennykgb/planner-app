import { useState } from 'react'
import Day from './Day'


function Week(props) {
  const {week} = props

  

  const day = week.map((day, i)=>{
    return (
      <Day 
        key = {i}
        day={day}
      />
    )
  })
  
  return (
    <div className='days'>
        {day}
    </div>
  )
}

export default Week
