import React, { useEffect, useState } from "react";
import {
  WeatherImage,
  WeatherDetails,
  WeatherTemp,
  CityState,
} from "./WeatherStyled";
import axios from "axios";

function Weather() {
  const [location, setLocation] = useState(false);
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState(false);
  const APIkey = `7e9baf9d3c42b588e4f66011a123a6fb`;
  //const APIkey = `14bbcc78d3544fbbba4038ab99223088`;

  useEffect(() => {
    let isMounted = true;
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
      let urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
      let urlCity = `http://api.positionstack.com/v1/reverse?access_key=d98a45ec61e6bdccdf661642fd349417&query=${latitude},${longitude}&limit1`;
      const source = axios.CancelToken.source();
      axios
        .get(urlWeather, { cancelToken: source.token })
        .then((response) => weatherDetails(response.data))
        .catch((error) => {
          if (!axios.isCancel(error)) {
            console.log(error);
          }
        });
      axios
        .get(urlCity, { cancelToken: source.token })
        .then((response) => cityDetails(response.data))
        .catch((error) => {
          if (!axios.isCancel(error)) {
            console.log(error);
          }
        });
      return () => {
        source.cancel();
        isMounted = false;
      };
    });

    const weatherDetails = (info: any) => {
      if (isMounted) {
        setIcon(
          `http://openweathermap.org/img/wn/${info.current.weather[0].icon}@2x.png`
        );
        setTemp((info.current.temp - 273).toFixed(0));
        setWeather(true);
      }
    };

    const cityDetails = (info: any) => {
      if (isMounted) {
        setCity(info.data[0].locality);
        setStates(info.data[0].region_code);
        setLocation(true);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [APIkey]);

  return (
    <>
      {!location && !weather ? (
        <CityState>Carregando cidade e clima...</CityState>
      ) : (
        <>
          {" "}
          <CityState>
            {city} - {states}
          </CityState>
          <WeatherDetails>
            <WeatherImage src={icon} />
            <WeatherTemp>{temp}°</WeatherTemp>
          </WeatherDetails>
        </>
      )}
    </>
  );
}

export default Weather;
