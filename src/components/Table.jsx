const Table = ({
  fluidDeficitPerHour,
  oneNightLiquidDeficit,
  operationSeverity,
  totalFluid
}) => {
  return (
    <>
    <h3>Sıvı Açığı:</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1. Saat</th>
            <th>2. Saat</th>
            <th>3. Saat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Açlık</td>
            <td>{oneNightLiquidDeficit / 2}</td>""
            <td>{oneNightLiquidDeficit / 4}</td>
            <td>{oneNightLiquidDeficit / 4}</td>
          </tr>
          <tr>
            <td>İdame</td>
            <td>{fluidDeficitPerHour}</td>
            <td>{fluidDeficitPerHour}</td>
            <td>{fluidDeficitPerHour}</td>
          </tr>
          <tr>
            <td>Ameliyat B.</td>
            <td>{operationSeverity}</td>
            <td>{operationSeverity}</td>
            <td>{operationSeverity}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Toplam</td>
            <td>{totalFluid[0]}</td>
            <td>{totalFluid[1]}</td>
            <td>{totalFluid[2]}</td>
          </tr>
        </tfoot>
      </table>
   
    </>
  );
};

export default Table;
