const OperationScale = ({ scale, setScale, setIsScaleCorrect,isScaleCorrect }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1 || value > 10) {
      setIsScaleCorrect(false);
    } else {
      setIsScaleCorrect(true);
      value = parseInt(e.target.value);
    }
    setScale(value);
  };
  return (
    <>
      <br />
      <label htmlFor="operation-scale">
        <div className="operation-scale-header">
          <h3 className="scale-text"> Ameliyat Büyüklüğü:</h3>
          <input
           className={isScaleCorrect ? "" : "input-error"}
            type="number"
            min="1"
            max="10"
            value={scale}
            onChange={handleChange}
          />
        </div>
        <div className="operation-slider-container">
          <h3>1</h3>
          <input
            className="operation-scale-slider"
            id="operation-scale"
            type="range"
            max="10"
            min="1"
            value={scale}
            step="1"
            onChange={(e) => {
              setScale(e.target.value);
              setIsScaleCorrect(true);
            }}
          />
          <h3>10</h3>
        </div>
      </label>
    </>
  );
};

export default OperationScale;
