import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import AppBar from './components/AppBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import api from './utils/axios-conf';
import conf from './constants/config.json';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({
    name: conf.DEFAULT_CITY,
  });
  const [forecasts, setForecasts] = useState(null);

  const fetchData = async city => {
    try {
      const currentRes = await api.getCurrentWeatherByCity(city);
      if ((currentRes.status === 200 || 304) && currentRes.data) {
        const data = currentRes.data;
        setCurrentWeather(data);
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const fiveDayRes = await api.getFivedayWeatherByCity(city);
      if ((fiveDayRes.status === 200 || 304) && fiveDayRes.data) {
        const data = fiveDayRes.data.data;
        setForecasts([...data.list]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getForecast = city => fetchData(city);

  useEffect(() => {
    fetchData(conf.DEFAULT_CITY);
  }, []);

  return (
    <div className="App">
      <AppBar fetchData={getForecast} />
      <Header data={currentWeather} />
      {forecasts && <Main data={forecasts} />}
      <Footer />
    </div>
  );
};

export default App;
