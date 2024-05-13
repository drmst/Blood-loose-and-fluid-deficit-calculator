const Htc = ({ htcValue, setHtcValue }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 20) {
      value = 20;
    } else if (value > 60) {
      value = 60;
    } else {
      value = parseInt(e.target.value);
    }
    setHtcValue(value);
  };
  return (
    <>
      <label htmlFor="htc">
        <div className="htc-header">
          <h3> Hastanın Hematokriti(HTC):</h3>
          <input
            type="number"
            min="20"
            max="60"
            value={htcValue}
            onChange={handleChange}
          />
        </div>
        <div className="htc-slider-container">
          <h3>20</h3>
          <input
            className="htc-slider"
            id="htc"
            type="range"
            max="60"
            min="20"
            value={htcValue}
            step="1"
            onChange={(e) => {
              setHtcValue(e.target.value);
            }}
          />
          <h3>60</h3>
        </div>
      </label>
    </>
  );
};

export default Htc;
