import React from "react";

const Fasting = ({ fastingTime, setFastingTime }) => {
  return (
    <>
      <label htmlFor="fasting">
        <div className="fasting-header">
          <h3> Açlık Süresi:</h3>
          <input
            type="number"
            min="6"
            max="12"
            value={fastingTime}
            onChange={(e) => {
              setFastingTime(e.target.value);
            }}
          />
        </div>
        <div className="fasting-slider-container">
          <h3>6</h3>
          <input
            className="fasting-slider"
            type="range"
            min="6"
            max="12"
            value={fastingTime}
            onChange={(e) => {
              setFastingTime(e.target.value);
            }}
          />
          <h3>12</h3>
        </div>
      </label>
    </>
  );
};

export default Fasting;
