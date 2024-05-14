import "../App.css";

const Table = ({
  fluidDeficitPerHour,
  oneNightLiquidDeficit,
  operationSeverity,
 
}) => {
  return (
    <div className="table-container">
      <h3 className="table-header">Sıvı Açığı:</h3>
      <table>
        <thead className="thead">
          <tr>
            <th></th>
            <th>1. Saat</th>
            <th>2. Saat</th>
            <th>3. Saat</th>
            <th>4. Saat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Açlık</td>
            <td>{Math.floor(oneNightLiquidDeficit / 2)}</td>
            <td>{Math.floor(oneNightLiquidDeficit / 4)}</td>
            <td>{Math.floor(oneNightLiquidDeficit / 4)}</td>
            <td>0</td>
          </tr>
          <tr>
            <td>İdame</td>
            <td>{Math.floor(fluidDeficitPerHour)}</td>
            <td>{Math.floor(fluidDeficitPerHour)}</td>
            <td>{Math.floor(fluidDeficitPerHour)}</td>
            <td>{Math.floor(fluidDeficitPerHour)}</td>
          </tr>
          <tr>
            <td>Ameliyat B.</td>
            <td>{Math.floor(operationSeverity)}</td>
            <td>{Math.floor(operationSeverity)}</td>
            <td>{Math.floor(operationSeverity)}</td>
            <td>{Math.floor(operationSeverity)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Toplam</td>
            <td>
              {Math.floor(oneNightLiquidDeficit / 2) +
                Math.floor(fluidDeficitPerHour) +
                Math.floor(operationSeverity)}
            </td>
            <td>
              {Math.floor(oneNightLiquidDeficit / 4) +
                Math.floor(fluidDeficitPerHour) +
                Math.floor(operationSeverity)}
            </td>
            <td>
              {Math.floor(oneNightLiquidDeficit / 4) +
                Math.floor(fluidDeficitPerHour) +
                Math.floor(operationSeverity)}
            </td>
            <td>
              {Math.floor(fluidDeficitPerHour) + Math.floor(operationSeverity)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
