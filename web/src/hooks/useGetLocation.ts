import { useState, useEffect } from "react";

const defaultCoords = [-23.55052, -46.633308];

export default function useGetLocation() {
  const [coords, setCoords] = useState<number[] | null>(null);

  useEffect(() => {
    function onSuccess(position: GeolocationPosition) {
      setCoords([position.coords.latitude, position.coords.longitude]);
    }
    function onError() {
      console.error("error on get location");
      setCoords(defaultCoords);
    }

    try {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } catch (error) {
      setCoords(defaultCoords);
    }
  }, []);

  return { coords };
}
