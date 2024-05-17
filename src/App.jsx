import "./App.css";
import Asa from "./components/Asa";
import Fasting from "./components/Fasting";

import Htc from "./components/Htc";
import OperationScale from "./components/OperationScale";
import Sex from "./components/Sex";
import Table from "./components/Table";
import Weight from "./components/Weight";
import { useEffect, useState } from "react";

function App() {
  const [isTekkCorrect, setIsTekkCorrect] = useState(true);
  const [isTableCorrect, setIsTableCorrect] = useState(true);
  const [isWeightCorrect, setIsWeightCorrect] = useState(true);
  const [isHtcCorrect, setIsHtcCorrect] = useState(true);
  const [isFastingCorrect, setIsFastingCorrect] = useState(true);
  const [isScaleCorrect, setIsScaleCorrect] = useState(true);
  const [Tekk, setTekk] = useState(0);
  const [weight, setWeight] = useState(70);
  const [sex, setSex] = useState("Erkek");
  const [htcValue, setHtcValue] = useState(30);
  const [asaValue, setAsaValue] = useState(24);
  const [scale, setScale] = useState(3);
  const [fluidDeficitPerHour, setFluidDeficitPerHour] = useState(0);
  const [oneNightLiquidDeficit, setOneNightLiquidDeficit] = useState(0);
  const [fastingTime, setFastingTime] = useState(6);
  const [operationSeverity, setOperationSeverity] = useState(1);

  let cins = 0;
  if (sex === "Erkek") {
    cins = 75;
  } else if (sex === "Kadın") {
    cins = 65;
  } else if (sex == "Cocuk") {
    cins = 80;
  } else if (sex == "YeniDogan") {
    cins = 85;
  }

  useEffect(() => {
    const calculatedTekk = (weight * cins * (htcValue - asaValue) * 3) / 100;
    setTekk(calculatedTekk > 0 ? calculatedTekk : "0 !!!");
    if (weight <= 10) {
      setFluidDeficitPerHour(weight * 4);
    } else if (weight > 10 && weight <= 20) {
      setFluidDeficitPerHour(40 + (weight - 10) * 2);
    } else if (weight > 20) setFluidDeficitPerHour(40 + Number(weight));
    setOneNightLiquidDeficit(fastingTime * fluidDeficitPerHour);
    setOperationSeverity(weight * scale);
    if (isWeightCorrect && isHtcCorrect) {
      setIsTekkCorrect(true);
    } else {
      setIsTekkCorrect(false);
    }

    if (isFastingCorrect && isScaleCorrect && isWeightCorrect) {
      setIsTableCorrect(true);
    } else {
      setIsTableCorrect(false);
    }
  }, [
    weight,
    cins,
    htcValue,
    asaValue,
    scale,
    oneNightLiquidDeficit,
    fluidDeficitPerHour,
    fastingTime,
    operationSeverity,
  ]);
  console.log(Tekk);
  return (
    <div className="container">
      <h1 className="header">Kan Kaybı ve Sıvı Açığı Hesaplama Aracı</h1>
      {isTekkCorrect ? (
        <div className="tekk-container">
          <h3 className="tekk-text">Tolere edilebilir kan kaybı:</h3>
          <h3>{typeof Tekk === "number" ? Math.floor(Tekk) : Tekk}</h3>
        </div>
      ) : (
        <div className="tekk-error-container">
          <p className="tekk-error">
            Lütfen değerleri belirtilen aralıklarda giriniz !!!
          </p>
        </div>
      )}
      
        <Table
        isTableCorrect={isTableCorrect}
          fluidDeficitPerHour={fluidDeficitPerHour}
          oneNightLiquidDeficit={oneNightLiquidDeficit}
          operationSeverity={operationSeverity}
        />
  

      <Asa asaValue={asaValue} setAsaValue={setAsaValue} />
      <Sex sex={sex} setSex={setSex} />
      <Htc
        htcValue={htcValue}
        setHtcValue={setHtcValue}
        setIsHtcCorrect={setIsHtcCorrect}
        isHtcCorrect={isHtcCorrect}
      />
      <Weight
        weight={weight}
        setWeight={setWeight}
        setIsWeightCorrect={setIsWeightCorrect}
        isWeightCorrect={isWeightCorrect}
      />
      <OperationScale
        scale={scale}
        setScale={setScale}
        setIsScaleCorrect={setIsScaleCorrect}
        isScaleCorrect={isScaleCorrect}
      />
      <Fasting
        fastingTime={fastingTime}
        setFastingTime={setFastingTime}
        setIsFastingCorrect={setIsFastingCorrect}
        isFastingCorrect={isFastingCorrect}
      />
      <p className="reminder">
        Dr. Mesut Öztürk
        <a href="https://www.instagram.com/oztmesut/">(@oztmesut)</a> tarafından
        hazırlanmıştır.
        <br />
        Bilgi amaçlıdır. Hastaya göre tedavi kararı verilmelidir.
      </p>
    </div>
  );
}

export default App;
