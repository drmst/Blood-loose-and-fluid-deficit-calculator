const Weight = ({ weight, setWeight }) => {
  return (
    <>
      <label htmlFor="weight">
        <div className="weight-header">
          <h3> Hastanın Kilosu:</h3>
          <input
            type="number"
            min="3"
            max="120"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
        <div className="weight-slider-container">
          <h3>1</h3>
          <input
          className="weight-slider"
            type="range"
            id="weight"
            step="1"
            min="3"
            max="120"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <h3>120</h3>
        </div>
      </label>
    </>
  );
};

export default Weight;
