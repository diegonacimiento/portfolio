import { useState, useEffect, lazy, Suspense } from "react";
import { LanguageProvider } from "./context/LanguageContext";

import { SPLASH_DURATION } from "./config/constants";
import Splash from "./components/Splash";

const userLang = navigator.language;
document.documentElement.lang = userLang;

// Lazy loading de componentes
const Layout = lazy(() => import("./components/Layout"));

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
      <Suspense fallback={<Splash />}>
        <Layout />
      </Suspense>
    </LanguageProvider>
  );
};

export default App;
