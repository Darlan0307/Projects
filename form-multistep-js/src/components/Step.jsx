import React from 'react'

const Step = ({step}) => {
  return (
    <div
    style={{minHeight:"200px",display:"flex",alignItems:"flex-start"}}
    >
        {step}
    </div>
  )
}

export default Step