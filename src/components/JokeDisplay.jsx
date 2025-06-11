const JokeDisplay = ({ joke, loading, error }) => {
  return (
    <div className="joke-container">
      {error ? (
        <p className="error">Error: {error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p className="joke">{joke}</p>
      )}
    </div>
  )
}

export default JokeDisplay