import { useGeolocated } from "react-geolocated";

export const useLocation = () => {
  const { coords } = useGeolocated();

  if (coords) {
    localStorage.setItem("lat", coords.latitude);
    localStorage.setItem("long", coords.longitude);
  }

  if (localStorage.getItem("lat") && localStorage.getItem("long")) {
    return {
      latitude: parseFloat(localStorage.getItem("lat")),
      longitude: parseFloat(localStorage.getItem("long")),
    };
  }

  return coords ?? null;
};
