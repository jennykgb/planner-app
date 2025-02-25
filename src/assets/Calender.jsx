import { useState } from 'react'
import Week from './Week'


function Calender() {
  const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  const monthNum = new Date().getMonth()  
  const year = new Date().getFullYear()
  const [month, setMonth] = useState(monthsArr[monthNum])
  let [weeks, setWeeks] = useState(1)
  let [monthData, setMonthData] = useState([])
  let [monthLast, setMonthLast] = useState(new Date(year,monthNum+1,0).getDate())
  
  function numWeeks(){
    let currentWeeks = 1
    for(let i=1; i<monthLast; i++){
      let day = new Date(`${year}-${month}-${i}`).getDay()
      
      if(i !=1 && day ==0){
        currentWeeks += 1
      }
    }
    console.log("currentWeeks : " + currentWeeks)
    weeks = currentWeeks
    console.log("weeks : " + weeks)
    return currentWeeks;
  }
  numWeeks()

  function getData(numOfWeeks){
    let tempData = []
    let weekData = []
    let monthFirst = new Date(`${year}-${month}-1`).getDay()
    console.log("numOfWeeks : " + numOfWeeks)
    console.log("monthFirst : " + monthFirst)
    var currDay = null;

    for(let i=0; i<numOfWeeks; i++){
      tempData = [];
      if(monthFirst > 0 && currDay == null){
        for(let i=monthFirst; i > 1; i--){
          tempData.push(new Date(year,monthNum,1-i).getDate())
          console.log("hit")
        }
        currDay = new Date(year,monthNum,1);
      }
      else if  (currDay == null) {
        currDay = new Date(year,monthNum,1);
      }

      //this gets the current numerical date and pushes it
      //then takes the current 'date' adds one and sets it using .setDate()
      console.log("A" + currDay.getDay())
      for (let i = currDay.getDay(); i < 7; i++)
      {
        console.log("inside")
        tempData.push(currDay.getDate())  
        currDay.setDate(currDay.getDate() + 1)
      }

      weekData.push(tempData)
      console.log(weekData)

    }
    monthData[`${month}`] = weekData
    console.log(monthData)
  }
  getData(numWeeks())
  
console.log(monthData)

  const weekCard = monthData[`${month}`].map((week)=>{
    return(
      <Week week={(week)}/>
    )
  })
  
 

  return (
    <div>
      <div>{month}</div>
      <div className='weeks'>
          {weekCard}
      </div>
    /</div>
  )
}

export default Calender
