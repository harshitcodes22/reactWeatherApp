import styling from "./Current.module.css";
import { useEffect, useState } from "react";

function Current({ location }) {
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  useEffect(
    function () {
      async function getWeatherData() {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=798a8c19b97f4fc38e2142450232007&q=${location}&aqi=yes`
        );
        console.log(res);
        const data = await res.json();
        if (res.ok === false) {
          setError(data.error.message);
          setIsError(true);
          return;
        }
        console.log(data);

        setIsError(false);
        setWeatherImg(data.current.condition.icon);
        setWeatherType(data.current.condition.text);
        setCurrentLocation(data.location.name);
        setCurrentTemp(data.current.temp_c);
        setFeelsLike(data.current.feelslike_c);
        setHumidity(data.current.humidity);
      }
      if (location !== "") {
        getWeatherData();
      }
      if (location === "") {
        setIsError(true);
        setError("Search for location");
      }
    },
    [location]
  );

  return (
    <>
      <div className={styling.current__container}>
        {isError ? (
          <p className={styling.errorWarning}>{error}</p>
        ) : (
          <>
            <div className={styling.current__heading}>current weather</div>

            <div className={styling.current__details}>
              <span className={styling.current__temp}> {currentTemp}° C</span>
              <img
                src={weatherImg}
                alt="hello"
                className={styling.current__img}
              />
              <span className={styling.current__weather_type}>
                {weatherType}
              </span>
              <span className={styling.current__location}>
                {currentLocation}
              </span>
              <div className={styling.current__feelsLike}>
                <span className={styling.feelsLike}> Feels Like</span>
                <span className={styling.feelsLikeValue}> {feelsLike}°</span>
              </div>
              <div className={styling.current__humidity}>
                <span className={styling.humidity}>Humidity</span>
                <span className={styling.humidityValue}> {humidity}%</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Current;
