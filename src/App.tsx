import Layout from "./components/Layout";
import Splash from "./components/Splash";
import { useState, useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";

const userLang = navigator.language;
const SPLASH_DURATION = 3000; // Duración del splash screen en milisegundos

document.documentElement.lang = userLang;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, SPLASH_DURATION);

    // Limpieza del timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
};

export default App;