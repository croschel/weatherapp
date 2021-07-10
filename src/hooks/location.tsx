import React, { useContext, ReactNode, createContext } from 'react';
import { googleAPI } from '~/services/google/api';
import Geolocation from 'react-native-geolocation-service';
import { useEffect } from 'react';
import { GOOGLE_API_KEY } from '@env';
import { useState } from 'react';
import { Alert } from 'react-native';

type Geometry = {
  lat: number;
  lng: number;
};

type LocationContextData = {
  address: string;
  loading: boolean;
  geometry: Geometry;
};

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationContext = createContext({} as LocationContextData);

const LocationProvider = ({ children }: LocationProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<string>('buscando');
  const [geometry, setGeometry] = useState({} as Geometry);

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
          const { compound_code } = response.data.plus_code;
          const separatedAddress = compound_code.split(',');
          const cityState = separatedAddress[1];
          setAddress(cityState);
          const { lat, lng } = response.data.results[0].geometry.location;
          setGeometry({ lat, lng });

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

  useEffect(() => {
    getAddressLocationGPS();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        address,
        loading,
        geometry,
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
