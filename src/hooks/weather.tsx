import { WEATHER_API_KEY } from '@env';
import React, { useContext, ReactNode, createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { weatherAPI } from '~/services/openWeather/api';
import { useLocation } from './location';

interface WeatherProviderProps {
  children: ReactNode;
}
type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Clear' | 'Clouds'; // vamos verificar as possibilidades Cloud etc
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  id: 3467865;
  name: string;
  cod: number;
};

type WeatherContextData = {
  getWeather: (lat: number, lon: number) => Promise<void>;
  weatherData: WeatherData;
  loadingWeather: boolean;
};

export const WeatherContext = createContext({} as WeatherContextData);

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [weatherData, setWeatherData] = useState({} as WeatherData);
  const [loadingWeather, setLoadingWeather] = useState(true);

  const getWeather = async (lat: number, lon: number) => {
    try {
      setLoadingWeather(true);
      const response = await weatherAPI.get('', {
        params: {
          lat,
          lon,
          units: 'metric',
          lang: 'pt_br',
          appid: WEATHER_API_KEY,
        },
      });
      console.log('weather api response :: ', response.data);
      setWeatherData(response.data);
    } catch (error) {
      Alert.alert(
        'Não con seguimos buscar as informações de temperatura, por favor tente novamente.'
      );
    } finally {
      setLoadingWeather(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        getWeather,
        weatherData,
        loadingWeather,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  return context;
};

export { WeatherProvider, useWeather };
