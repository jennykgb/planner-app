import { useState } from 'react'
import Day from './Day'


function Week() {
  
  return (
    <div className='days'>
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
    </div>
  )
}

export default Week
