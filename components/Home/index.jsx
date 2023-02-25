import React from 'react'

function Home({name}) {
  console.log(name);
  return (
    <div>Hello {name}</div>
  )
}

export default Home