const Htc = ({ htcValue, setHtcValue }) => {
  return (
    <>
      <br />
      <label htmlFor="htc">
        Hastanın Hematokriti(HTC):
        <input
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
      </label>
      <p>{htcValue}</p>
    </>
  );
};

export default Htc;
