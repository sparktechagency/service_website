"use client";

import LocationMap from "@/components/Location/LocationMap";
import { useUpdateEmployerLocationMutation } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
// import { z } from "zod";

// type TFormValues = z.infer<typeof locationSchema>;

const UpdateLocationForm = () => {
  const { user } = useAppSelector((state) => state.user);

  // Fallback to London coordinates if undefined
  const coordinates = user?.locations?.coordinates ?? [51.5072, 0.1276];
  const initialLongitude = coordinates[0];
  const initialLatitude = coordinates[1];

  const [selectedLocation, setSelectedLocation] = useState<number[]>([
    initialLatitude,
    initialLongitude,
  ]);

  const [updateLocation, { isLoading }] = useUpdateEmployerLocationMutation();

  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      latitude: initialLatitude.toString(),
      longitude: initialLongitude.toString(),
    },
  });

  const latitude = watch("latitude");
  const longitude = watch("longitude");

  // Sync map marker when form fields change
  useEffect(() => {
    if (latitude && longitude) {
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setSelectedLocation([lat, lng]);
      }
    }
  }, [latitude, longitude]);

  // When user clicks on map
  const handleLocationSelect = (location: number[]) => {
    setSelectedLocation(location);
    setValue("latitude", location[0].toFixed(6));
    setValue("longitude", location[1].toFixed(6));
  };

  const onSubmit = (data: any) => {
    updateLocation(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
      <h2 className="text-xl text-gray-800 font-semibold mb-4">
        Update Map Location
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="h-[350px] rounded-lg overflow-hidden shadow-md border border-gray-200">
          <LocationMap
            onLocationSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
          />
        </div>

        {/* Optional: Show manual inputs for lat/lng */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="latitude" className="block font-medium mb-1">
              Latitude
            </label>
            <input
              id="latitude"
              type="text"
              className="w-full border rounded px-3 py-2"
              {...{
                value: latitude,
                onChange: (e) => setValue("latitude", e.target.value),
              }}
            />
          </div>
          <div>
            <label htmlFor="longitude" className="block font-medium mb-1">
              Longitude
            </label>
            <input
              id="longitude"
              type="text"
              className="w-full border rounded px-3 py-2"
              {...{
                value: longitude,
                onChange: (e) => setValue("longitude", e.target.value),
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 w-full md:w-64 md:justify-center py-2 flex gap-2 items-center bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-none transition-colors cursor-pointer ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Processing...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateLocationForm;
