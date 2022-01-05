import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  return (
    <Wrapper>
      <Name>JOSH's Weather App</Name>
      <CloudImg src="/cloud-icon.svg" />
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Link
          href={{
            pathname: "/weather",
            query: {
              city: city,
            },
          }}
        >
          <Submit>Search</Submit>
        </Link>
      </InputContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #1c2431;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 5rem;
`;
const CloudImg = styled.img`
  height: 96px;
  width: 96px;
  background-color: white;
  display: flex;
  margin-top: -5rem;
`;
const InputContainer = styled.div`
  display: flex;
  padding-right: 2rem;
  padding-left: 2rem;
`;
const Input = styled.input`
  color: black;
  padding: 0.5rem;
  padding-left: 1rem;

  outline: none;
  border-radius: 5rem;

  @media (max-width: 425px) {
    width: 10rem;
    font-size: small;
  }
`;
const Submit = styled.div`
  cursor: pointer;
  background: linear-gradient(to right, hsl(198, 60%, 50%), hsl(176, 68%, 64%));
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
  padding-left: 2rem;
  text-align: center;
  border-radius: 5rem;
  margin-left: 0.5rem;
`;
export default WeatherApp;
