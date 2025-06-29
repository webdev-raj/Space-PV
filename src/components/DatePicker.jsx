import React from 'react'

const DatePicker = ({setDatePick}) => {
    console.log("date is render")
    const updateDate = (reciveDate,inputDate)=>{
        const date = new Date(inputDate.value)
        setDatePick({
            selectedDate:date.getDate(),
            selectedMonth:date.getMonth()+1,
            selectedYear:date.getFullYear(),
        })
    }
  return (
    <div className="mb-8 flex flex-col items-center gap-2 bg-zinc-800 p-4 rounded-xl shadow-lg border border-amber-600">
    <label htmlFor="selectDate" className="text-amber-400 font-semibold mb-1">Choose a Date</label>
    <input onChange={(e)=>{
        updateDate(e.target.value,e.target)
    }} type="date" name="date" id="selectDate" className="w-48 px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500" />
  </div>
  )
}

export default DatePicker
