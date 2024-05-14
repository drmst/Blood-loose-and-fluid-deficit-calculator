const Asa = ({ asaValue, setAsaValue }) => {
  return (
    <div className="asa-container">
      <h3 className="asa-text">ASA:</h3>
      <form>
        <label htmlFor="asa1">
          <input
            type="radio"
            id="asa1"
            value={24}
            name="asa"
            checked={asaValue === 24}
            onChange={(e) => {
              setAsaValue(Number(e.target.value));
            }}
          />
          ASA 1
        </label>
        <label htmlFor="asa2">
          <input
            type="radio"
            id="asa2"
            value={27}
            name="asa"
            checked={asaValue === 27}
            onChange={(e) => {
              setAsaValue(Number(e.target.value));
            }}
          />
          ASA 2
        </label>
        <label htmlFor="asa3">
          <input
            type="radio"
            id="asa3"
            value={30}
            name="asa"
            checked={asaValue === 30}
            onChange={(e) => {
              setAsaValue(Number(e.target.value));
            }}
          />{" "}
          ASA 3
        </label>
      </form>
    </div>
  );
};

export default Asa;
