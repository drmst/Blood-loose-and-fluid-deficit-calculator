const OperationScale = ({ scale, setScale }) => {
  return (
    <>
      <br />
      <label htmlFor="operation-scale">
        <div className="operation-scale-header">
          <h3> Ameliyat Büyüklüğü:</h3>
          <input
            type="number"
            min="1"
            max="10"
            value={scale}
            onChange={(e) => {
              setScale(e.target.value);
            }}
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
            }}
          />
          <h3>10</h3>
        </div>
      </label>
      
    </>
  );
};

export default OperationScale;
