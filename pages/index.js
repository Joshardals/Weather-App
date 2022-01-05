import Head from "next/head";
import styled from "styled-components";
import WeatherApp from "./components/WeatherApp";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeatherApp />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
