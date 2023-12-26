import React, { useState, useEffect } from "react";

const Distance = ({ yextDisplayCoordinate }) => {
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [distance, setDistance] = useState(null);

  // For demonstration purposes, you can use the browser's geolocation API to get the user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (userLatitude && userLongitude && yextDisplayCoordinate) {
      const entityLatitude = yextDisplayCoordinate.latitude;
      const entityLongitude = yextDisplayCoordinate.longitude;
      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        entityLatitude,
        entityLongitude
      );
      setDistance(distance);
    }
  }, [userLatitude, userLongitude, yextDisplayCoordinate]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 3959; // Radius of the Earth in miles
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in miles
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      {distance !== null && (
        <p className="module--distance-hero"> ~{distance.toFixed(1)} Mi</p>
      )}
    </div>
  );
};

export default Distance;
