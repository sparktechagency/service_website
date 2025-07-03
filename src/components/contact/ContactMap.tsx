"use client";

import { useState } from "react";
import LocationMap from "../Location/LocationMap";

const ContactMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<number[]>([
    51.5072, 0.1276,
  ]);

  const handleLocationSelect = (location: number[]) => {
    setSelectedLocation(location);
  };

  return (
    <>
        <LocationMap
          onLocationSelect={handleLocationSelect}
          selectedLocation={selectedLocation}
        />
    </>
  );
};

export default ContactMap;
