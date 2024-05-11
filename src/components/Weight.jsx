const Weight = ({ weight, setWeight }) => {
  return (
    <>
      <label htmlFor="weight">
        Hastanın Kilosu:
        <input
          type="range"
          id="weight"
          min="3"
          max="120"
          step="1"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
      </label>
      <p>{weight}</p>
    </>
  );
};

export default Weight;
