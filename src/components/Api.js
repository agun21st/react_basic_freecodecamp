import React from 'react'

export default function Api() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1);

    React.useEffect( () => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count] );

    function handleClick(){
        setCount(prev => prev + 1)
    }

  return (
    <div>
        <button onClick={handleClick}>Refresh</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
