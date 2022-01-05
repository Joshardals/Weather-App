import { createGlobalStyle, ThemeProvider } from "styled-components";
import "tailwindcss/tailwind.css";

const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  
  html,
  body {
    padding: 0; 
    margin: 0; 
    font-family: "Open Sans", sans-serif;  
    background-color: hsl(218, 28%, 13%);  
    color: hsl(0, 0%, 100%); 
    width: 100%; 
    height: 100vh; 
    overflow: hidden; 
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
