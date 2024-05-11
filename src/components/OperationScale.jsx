const OperationScale = ({ scale, setScale }) => {
  return (
    <>
      <br />
      <label htmlFor="htc">
        Ameliyat Büyüklüğü:
        <input
          type="range"
          max="10"
          min="1"
          value={scale}
          step="1"
          onChange={(e) => {
            setScale(e.target.value);
          }}
        />
      </label>
      <p>{scale}</p>
    </>
  );
};

export default OperationScale;
