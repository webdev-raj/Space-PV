import React, { useState } from 'react'
import ImageCard from './components/ImageCard'
import DatePicker from './components/DatePicker'

const App = () => {
  const [datePicked, setDatePicked] = useState("");
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black text-white flex flex-col items-center justify-center py-8 px-2">

      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Space Picture Viewer</h1>
        <p className="text-lg text-zinc-300 max-w-xl mx-auto leading-tighter">Explore the universe! Select a date to view NASA's Astronomy Picture of the Day, complete with details and description.</p>
      </header>

      <DatePicker setDatePick={setDatePicked} />
      {
        datePicked == "" ? <></> : <ImageCard dataPicked={datePicked} />
      }
    </div>
  )
}

export default App
