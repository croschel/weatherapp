import React, { useContext, ReactNode, createContext } from 'react';
import { googleAPI } from '~/services/google/api';
import Geolocation from 'react-native-geolocation-service';
import { useEffect } from 'react';
import { GOOGLE_API_KEY } from '@env';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useWeather } from './weather';
import { VoidFunctionComponent } from 'react';

type Geometry = {
  lat: number;
  lng: number;
};

type LocationContextData = {
  address: string;
  loading: boolean;
  geometry: Geometry;
  getAddressLocationInput: (address: string) => void;
  location: string;
  searchLocation: (input: string) => void;
  setAddressStorage: (address: string) => void;
  setGeometryStorage: (geometry: Geometry) => void;
  placesResults: PlacesResults;
};

interface LocationProviderProps {
  children: ReactNode;
}

export type GeoResult = {
  formatted_address: string;
  geometry: {
    location: Geometry;
  };
};

export type PlacesResults = GeoResult[];

export const LocationContext = createContext({} as LocationContextData);

const LocationProvider = ({ children }: LocationProviderProps) => {
  const { getWeather } = useWeather();
  const [loading, setLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<string>('buscando');
  const [geometry, setGeometry] = useState({} as Geometry);
  const [location, setLocation] = useState('Insira a localização');
  const [placesResults, setPlacesResults] = useState([] as PlacesResults);

  const getAddressLocationInput = async (address: string) => {
    try {
      const response = await googleAPI.get('', {
        params: {
          address,
          key: GOOGLE_API_KEY,
        },
      });
      const { results } = response.data;

      setPlacesResults(results);
    } catch {
      Alert.alert('Não foi possível encontrar sua posição');
    }
  };

  const getAddressLocationGPS = () => {
    try {
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await googleAPI.get('', {
            params: {
              latlng: `${latitude},${longitude}`,
              key: GOOGLE_API_KEY,
            },
          });
          console.log('CurrentPosition :: ', response.data);
          const { compound_code } = response.data.plus_code;
          const separatedAddress = compound_code.split(',');
          const cityState = separatedAddress[1];
          setAddress(cityState);
          const { lat, lng } = response.data.results[0].geometry.location;
          setGeometry({ lat, lng });
          getWeather(lat, lng);
          // console.log('location results :: ', lat);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (error) {
      Alert.alert('Não foi possível encontrar sua posição');
    } finally {
      setLoading(false);
    }
  };

  const searchLocation = (input: string) => {
    setLocation(input);
  };

  const setAddressStorage = (address: string) => {
    setAddress(address);
  };

  const setGeometryStorage = (geometry: Geometry) => {
    setGeometry(geometry);
  };

  useEffect(() => {
    getAddressLocationGPS();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        address,
        loading,
        geometry,
        getAddressLocationInput,
        searchLocation,
        setAddressStorage,
        setGeometryStorage,
        location,
        placesResults,
      }}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => {
  const context = useContext(LocationContext);
  return context;
};

export { LocationProvider, useLocation };
