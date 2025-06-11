import React, { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchJoke = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single'
      )

      const data = await response.json()
      setJoke(data.joke)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Random Programming Joke</h1>
      <JokeDisplay joke={joke} loading={loading} error={error} />
      <button onClick={fetchJoke} disabled={loading}>
        Get a New Joke
      </button>
    </div>
  )
}

export default App
