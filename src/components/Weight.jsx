const Weight = ({ weight, setWeight, setIsWeightCorrect, isWeightCorrect }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 3 || value > 120) {
      setIsWeightCorrect(false);
    } else {
      setIsWeightCorrect(true);
      value = parseInt(e.target.value);
    }
    setWeight(value);
  };
  return (
    <>
      <label htmlFor="weight">
        <div className="weight-header">
          <h3 className="weight-text"> Hastanın Kilosu:</h3>
          <input
            className={isWeightCorrect ? "" : "input-error"}
            type="number"
            min="3"
            max="120"
            value={weight}
            onChange={handleChange}
          />
        </div>
        <div className="weight-slider-container">
          <h3>3</h3>
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
              setIsWeightCorrect(true);
            }}
          />
          <h3>120</h3>
        </div>
      </label>
    </>
  );
};

export default Weight;
