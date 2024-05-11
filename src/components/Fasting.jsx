import React from 'react'

const Fasting = ({fastingTime,setFastingTime}) => {
  return (
    <>
        <label htmlFor="fasting">Açlık Süresi:
            <input type="range" min="6" max="12" value={fastingTime} onChange={(e) => {
                setFastingTime(e.target.value) 
            }}  />
        </label>
        <p>{fastingTime}</p>
    </>
  )
}

export default Fasting