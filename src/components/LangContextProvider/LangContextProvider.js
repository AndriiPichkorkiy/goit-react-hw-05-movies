import { createContext, useState } from 'react';
import apiMovies from 'tools/apiMovies';

const LangContext = createContext();

export default function LangContextProvider({ children }) {
  const [lang, setLang] = useState('uk');

  const toggleLang = () => {
    setLang(preValue => (preValue === 'en' ? 'uk' : 'en'));

    apiMovies.changeLanguage(lang === 'en' ? 'uk' : 'en');
  };

  //   useEffect(() => {
  //     apiMovies.changeLanguage(lang);
  //   }, [lang]);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export { LangContext };
