import { useState } from "react";

const CalcDogWater = () => {
  const [dogWeight, setDogWeight] = useState("");
  const [userTemp, setUserTemp] = useState("");
  const [result, setResult] = useState("");

  const dogWaterCalc = () => {
    let dogWater = 0;
    const weight = dogWeight;
    const temp = userTemp;

    if (weight <= 20 && temp < 68) {
      dogWater = weight * 1;
    } else if (weight > 20 && temp < 68) {
      dogWater = weight * 1.5;
    } else if (weight <= 20 && temp >= 68) {
      dogWater = Math.trunc(weight * 1.03);
    } else if (weight > 20 && temp >= 68) {
      dogWater = Math.trunc(weight * 1.545);
    }
    setResult(`We recommend bringing ${dogWater}oz of water for the trek`);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="enter weight"
        value={dogWeight}
        onChange={(event) => setDogWeight(event.target.value)}
      />
      <input
        type="number"
        placeholder="enter temperature"
        value={userTemp}
        onChange={(event) => setUserTemp(event.target.value)}
      />
      <button onClick={dogWaterCalc}>Submit</button>
      <p id="result">{result}</p>
    </div>
  );
};

export default CalcDogWater;
