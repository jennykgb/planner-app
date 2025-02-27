import React  from 'react'
import { useState, useEffect } from 'react'
import Week from './Week'


function Calender() {
  const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  const weekArr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const [monthNum,setMonthNum] = useState(new Date().getMonth())
  let year = new Date().getFullYear()
  const [month,setMonth] = useState(monthsArr[monthNum])
  const [weeks, setWeeks] = useState(1)
  const [data, setData] = useState({})
  const [monthData, setMonthData] = useState({})
  
  let monthLast = new Date(year,monthNum+1,0).getDate()
  
  
  function numWeeks(){
    let currentWeeks = 1
    for(let i=1; i<monthLast; i++){
      let day = new Date(`${year}-${month}-${i}`).getDay()
      
      if(i !=1 && day ==0){
        currentWeeks += 1
      }
    }
    console.log("currentWeeks : " + currentWeeks)
    setWeeks(currentWeeks)
    console.log("weeks : " + weeks)
    return currentWeeks;
  }
  

  function addData(numOfWeeks){
    let tempData = []
    let weekData = []
    let monthFirst = new Date(`${year}-${month}-1`).getDay()
    console.log("numOfWeeks : " + numOfWeeks)
    console.log("monthFirst : " + monthFirst)
    var currDay = null;

    if( !(month in data)){
    

      for(let i=0; i<numOfWeeks; i++){
        
        tempData = [];
        if(monthFirst > 0 && currDay == null){
          for(let i=monthFirst; i >=1 ; i--){
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
        

      }

      setData((prevData)=>{
        const newData = {...prevData, [month]:weekData}
        setMonthData(newData[month])
        return newData
        
      })
      

      
    
    }


  }

  
  const weekCards = monthData && Array.isArray(monthData) && monthData.length >0 
    ? monthData.map((week, index)=>{
        console.log("B : " + week)
        return(
          <Week 
            key = {index}
            week={(week)}
          />
        )
  }):<p>Loading calender...</p>

  const daysCards = weekArr.map((dayName, i)=>{
      console.log("A : " +  dayName)
      return <p className='dayOfWeekContainer titles' key={i}>{dayName}</p>
  })
    
  



  
  console.log(monthData)
  console.log(data[month])

  useEffect(()=>{
    setMonth(monthsArr[monthNum])
    addData(numWeeks())
    

  },[monthNum])

  // useEffect(()=>{
  //   addData(weeks)
  // },[weeks])

  useEffect(()=>{
    if(month!== null && data[month]){
      setMonthData([...data[month]])
    }
  },[data])

  useEffect(() => {
    if (data[month]) {
      setMonthData(data[month]); // Update monthData after month is set
    }
  }, [month, data]); // Runs after 'month' is updated

  console.log("Current Month:", month);
  console.log("Data Object:", data);
  console.log("Month Data:", monthData);
  console.log("Week Cards Data:", Array.isArray(monthData) ? monthData : "Not an array");

  
 
 

  return (
    <div>
      <div className='monthName-container'>
        <i className="fa-solid fa-arrow-left arrow" onClick={()=>setMonthNum(monthNum-1)}></i>
        <h1 className='center titles'>{month}</h1>
        <i className="fa-solid fa-arrow-right arrow" onClick={()=>setMonthNum(monthNum+1)}></i>
      </div>
      
      <div className='calender-area'>
         <div className='days center'>
          {daysCards}
        </div>
        <div className='weeks'>
          {weekCards}
        </div> 
      </div>
    </div>
  )
}

export default Calender
