import React from 'react'

const Container = ({children}) => {
  return (
    <main
    style={{
      width:"80vw",
      margin:"2em auto",
    }}
    >
      {children}
    </main>
  )
}

export default Container