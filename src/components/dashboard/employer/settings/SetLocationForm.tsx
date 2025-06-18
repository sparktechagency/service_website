"use client";

import LocationMap from "@/components/Location/LocationMap";
import { useUpdateEmployerLocationMutation } from "@/redux/features/user/userApi";
import { locationSchema } from "@/schemas/candidate.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { z } from "zod";

type TFormValues = z.infer<typeof locationSchema>;

const SetLocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState<number[]>([
      51.5072, 0.1276,
    ]);
  
  const [updateLocation, { isLoading }] = useUpdateEmployerLocationMutation();
  
    const {
      handleSubmit,
      setValue,
      watch,
    } = useForm({
      resolver: zodResolver(locationSchema),
      defaultValues: {
        latitude: "51.5072",
        longitude: "0.1276",
      },
    });
  
    
  
    // Watch the latitude and longitude values
    const latitude = watch("latitude");
    const longitude = watch("longitude");
  
    // Update map when coordinates change in form
    useEffect(() => {
      if (latitude && longitude) {
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);
        if (!isNaN(lat) && !isNaN(lng)) {
          setSelectedLocation([lat, lng]);
        }
      }
    }, [latitude, longitude]);
  
    // Handle location selection from map
    const handleLocationSelect = (location: number[]) => {
      setSelectedLocation(location);
      setValue("latitude", location[0].toFixed(6));
      setValue("longitude", location[1].toFixed(6));
    };
  
    const onSubmit: SubmitHandler<TFormValues> = (data) => {
      updateLocation(data);
    };


  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl text-gray-800 font-semibold mb-4">
          Set Map Location
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="order-1 lg:order-2 h-[350px] lg:h-[400px] mb-6">
            <LocationMap
              onLocationSelect={handleLocationSelect}
              selectedLocation={selectedLocation}
            />
          </div>

          <button
            type="submit"
            className="px-4 w-full md:w-64 md:justify-center py-2 flex gap-2 items-center bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-none transition-colors cursor-pointer"
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
    </>
  );
}

export default SetLocationForm;