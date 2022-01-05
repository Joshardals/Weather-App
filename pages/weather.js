import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { Zoom, Fade } from "react-reveal";

const weather = () => {
  const router = useRouter();
  const { city } = router.query;
  const [weatherInfo, setWeatherInfo] = useState(null);
  const isDay = weatherInfo?.weather[0].icon.includes("d");

  const getWeatherInfo = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&` +
          new URLSearchParams({
            appid: "803e0ea53ddf40dcf9258a3332dfae24",
          })
      )
      .then((res) => {
        setWeatherInfo(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWeatherInfo(city);
  }, [city]);
  return (
    <Wrapper>
      <Link href="/">
        <BackButtonContainer>
          <BackButton src="https://img.icons8.com/material-outlined/50/ffffff/back.png" />
        </BackButtonContainer>
      </Link>
      <WeatherContainer>
        <Name>JOSH's Weather App</Name>
        <Zoom>
          <TemperatureContainer>
            <Temperature>
              <h2>{`${Math.floor(weatherInfo?.main?.temp - 273)}`}&#8451;</h2>
              <p>|{weatherInfo?.weather[0].description}</p>
            </Temperature>
            {isDay ? (
              <CloudImg src="/cloud-icon.svg" />
            ) : (
              <CloudImg src="https://img.icons8.com/plasticine/100/ffffff/partly-cloudy-night.png" />
            )}
          </TemperatureContainer>
        </Zoom>

        <Fade>
          <WeatherDetails>
            <h1>
              {weatherInfo?.name}, {weatherInfo?.sys.country}
            </h1>
            <WeatherInfo>
              <h2>Weather Info</h2>
              <WeatherFeel>
                <Title>
                  {isDay ? (
                    <WeatherImg src="https://img.icons8.com/ios-glyphs/30/ffffff/smiling-sun.png" />
                  ) : (
                    <WeatherImg src="https://img.icons8.com/ios-filled/50/ffffff/partly-cloudy-night--v1.png" />
                  )}
                  <WeatherDetail>{isDay ? "sunrise" : "sunset"}</WeatherDetail>
                </Title>
                <Title>
                  <WeatherImg src="https://img.icons8.com/material/24/ffffff/hygrometer.png" />
                  <WeatherDetail>
                    {weatherInfo?.main.humidity}
                    <br />
                    Humidity
                  </WeatherDetail>
                </Title>
                <Title>
                  <WeatherImg src="/wind.svg" />
                  <WeatherDetail>
                    {weatherInfo?.wind.speed}
                    <br />
                    Wind
                  </WeatherDetail>
                </Title>
                <Title>
                  <WeatherImg src="https://img.icons8.com/material/24/ffffff/barometer-gauge.png" />
                  <WeatherDetail>
                    {weatherInfo?.main.pressure}
                    <br />
                    Pressure
                  </WeatherDetail>
                </Title>
              </WeatherFeel>
            </WeatherInfo>
          </WeatherDetails>
        </Fade>
      </WeatherContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`;
const BackButtonContainer = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 0.5rem;
  border-radius: 999px;
`;
const BackButton = styled.img``;
const WeatherContainer = styled.div`
  background: #1c2431;
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 25rem;
  padding: 3rem 1.5rem 3rem 1.5rem;
  box-shadow: 0px 0px 15px 0px hsl(0, 0%, 0%);

  @media (max-width: 425px) {
    width: 20rem;
  }
`;
const Name = styled.div`
  text-align: center;
  font-size: 1.3em;
  font-weight: 500;
  margin-bottom: 3rem;
`;
const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const Temperature = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: small;
  }
`;
const CloudImg = styled.img`
  height: 96px;
  width: 96px;
  padding-left: 1rem;
`;
const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
  }
`;
const WeatherInfo = styled.div`
  h2 {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;
const WeatherFeel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  justify-content: center;
`;
const Title = styled.div`
  display: flex;
`;
const WeatherImg = styled.img`
  height: 2rem;
`;
const WeatherDetail = styled.div`
  font-size: small;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;
export default weather;
