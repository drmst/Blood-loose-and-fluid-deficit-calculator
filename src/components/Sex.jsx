const Sex = ({ sex, setSex }) => {
  return (
    <div className="sex-main-container">
      <h3 className="sex-text">Cinsiyet:</h3>
      <form className="sex-container">
        <div className="adult gender">
          <label htmlFor="man">
            <input
              type="radio"
              id="man"
              value="Erkek"
              name="sex"
              checked={sex === "Erkek"}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            />
            Erkek👨
          </label>
          <label htmlFor="woman">
            <input
              type="radio"
              id="woman"
              value="Kadın"
              name="sex"
              checked={sex === "Kadın"}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            />
            Kadın👩
          </label>
        </div>
        <div className="children gender">
          <label htmlFor="child">
            <input
              type="radio"
              id="child"
              value="Cocuk"
              name="sex"
              checked={sex === "Cocuk"}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            />
            Çocuk🧒
          </label>
          <label htmlFor="newBorn">
            <input
              type="radio"
              id="newBorn"
              value="YeniDogan"
              name="sex"
              checked={sex === "YeniDogan"}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            />
            Yeni Doğan👶
          </label>
        </div>
      </form>
    </div>
  );
};

export default Sex;
