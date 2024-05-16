const Fasting = ({ fastingTime, setFastingTime, setIsFastingCorrect,isFastingCorrect }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 6 || value > 12) {
      setIsFastingCorrect(false);
    } else {
      setIsFastingCorrect(true);
      value = parseInt(e.target.value);
    }

    setFastingTime(value);
  };
  return (
    <>
 
        <div className="fasting-header">
          <h3 className="fasting-text"> Açlık Süresi:</h3>
          <input
       className={isFastingCorrect ? "" : "input-error"}
            type="number"
            min="6"
            max="12"
            value={fastingTime}
            onChange={handleChange}
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
              setIsFastingCorrect(true);
            }}
          />
          <h3>12</h3>
        </div>

    </>
  );
};

export default Fasting;
