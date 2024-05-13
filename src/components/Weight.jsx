const Weight = ({ weight, setWeight }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 3) {
      value = 3;
    } else if (value > 120) {
      value = 120;
    }else{
      value=parseInt(e.target.value)
    }
    setWeight(value);
  };
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
            onChange={handleChange}
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
