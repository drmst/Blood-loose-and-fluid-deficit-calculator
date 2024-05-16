const Htc = ({ htcValue, setHtcValue,setIsTekkCorrect }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 20) {
      setIsTekkCorrect(false)
    } else if (value > 60) {
      setIsTekkCorrect(false)
    } else {
      setIsTekkCorrect(true)
      value = parseInt(e.target.value);
    }
    setHtcValue(value);
  };
  return (
    <>
      <label htmlFor="htc">
        <div className="htc-header">
          <h3 className="htc-text"> Hastanın Hematokriti(HTC):</h3>
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
              setIsTekkCorrect(true);
            }}
          />
          <h3>60</h3>
        </div>
      </label>
    </>
  );
};

export default Htc;
