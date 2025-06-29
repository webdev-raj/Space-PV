import React, { useEffect, useState } from 'react'


const ImageCard = ({ dataPicked }) => {
  const [fetchDate, setFetchDate] = useState([]);
  useEffect(() => {
    async function dataFetch() {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=FhzdzYgx09lfscOFU1UIsPjgIi881UKQuCcIvaKK&date=${dataPicked.selectedYear}-${dataPicked.
        selectedMonth}-${dataPicked.
          selectedDate}`,{
            
          })
      const nasaData = await response.json()
      setFetchDate(nasaData)
    }
    dataFetch()
  }, [dataPicked])
  console.log(fetchDate)
  return (
    <div className="w-full max-w-xl flex flex-col items-center bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-700">
      <div className="w-full aspect-video bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
        {
          fetchDate.length === 0 ? (<span className="text-zinc-400 text-xl">Image will appear here</span>):(
            <img className='h-full w-full' src={fetchDate.hdurl} alt="" />
          )
        }
        
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-amber-300 text-center">{fetchDate.title}</h2>
      <p className="text-sm text-zinc-400 mb-4 text-center">{fetchDate.date}</p>
      <p className="text-md leading-tight text-zinc-200 text-center mb-2">{fetchDate.explanation}</p>
      <p className="text-xs text-zinc-500 text-center">© NASA / APOD</p>
    </div>
  )
}

export default ImageCard