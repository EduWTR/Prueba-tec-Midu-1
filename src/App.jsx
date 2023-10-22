import { useEffect, useState } from 'react'
import React from 'react'

function App() {
  const [fact, useFact] = useState('gatito')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((resp) => resp.json())
      .then((data) => console.log(data))
  }, [])
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact}
    </main>
  )
}

export default App
