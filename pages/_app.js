import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {NextUIProvider} from "@nextui-org/react";
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from "next/head";
const App = ({ Component, pageProps }) => {

  return (
    <ThemeProvider>
      <NextUIProvider>
      <Component {...pageProps} />      
      <GoogleAnalytics gaId="G-LDK9138DFD" />
      </NextUIProvider>
    </ThemeProvider>
  );
};




export default App;
