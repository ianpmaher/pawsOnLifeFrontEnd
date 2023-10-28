import { useState } from "react";
import * as geo from "../../services/geo.js";

const CalcDogWater = ({ latitude, longitude }) => {
  const [dogWeight, setDogWeight] = useState("");
  const [userTemp, setUserTemp] = useState("");
  const [result, setResult] = useState("");
  const [userMins, setUserMins] = useState("");

  const dogWaterCalc = async () => {
    let dogWater = 0;
    const weight = dogWeight;
    const getLoc =
      latitude && longitude
        ? { lat: latitude, long: longitude }
        : geo.getLocation();
    if (getLoc) {
      const getTemp = await geo.getWeather(getLoc);
      console.log("Getting temp:", getTemp);
      const temp = parseInt(getTemp.temperature);
      setUserTemp(temp);
    } else {
      alert("Make error handling eventually");
    }

    const temp = userTemp;
    const duration = userMins / 720;

    if (weight < 20 && temp < 68) {
      dogWater = duration * (weight * 1);
    } else if (weight >= 20 && temp < 68) {
      dogWater = duration * (weight * 1.5);
    } else if (weight < 20 && temp >= 68) {
      dogWater = duration * (weight * 1.03);
    } else if (weight >= 20 && temp >= 68) {
      dogWater = duration * (weight * 1.545);
    }
    setResult(
      `We recommend bringing ${dogWater.toFixed(1)}oz of water for the trek`
    );
  };

  return (
    <div>
      <p>Calculate how much water to bring on your hike for your pet:</p>
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
      <input
        type="number"
        placeholder="enter duration in minutes"
        value={userMins}
        onChange={(event) => setUserMins(event.target.value)}
      />
      <button onClick={dogWaterCalc}>Submit</button>
      <p id="result">{result}</p>
      {/* <p>Lat: {latitude}</p>
      <p>Lng: {longitude}</p> */}
      <p>
        Disclaimer: These recommendations are based on our research from the
        follow sites below. Please monitor your pets health during your hike and
        speak to a veterinairan prior to choosing a hiking trail. Sources:
        https://www.rei.com/learn/expert-advice/hiking-dogs.html
        https://www.petmd.com/dog/nutrition/evr_dg_the_importance_of_water
      </p>
    </div>
  );
};

export default CalcDogWater;
