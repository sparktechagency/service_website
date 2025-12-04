"use client";

import LocationMap, { LatLngTuple } from "@/components/Location/LocationMap";
import { useUpdateCandidateAddressMutation, useUpdateCandidateLocationMutation } from "@/redux/features/user/userApi";
import { locationSchema } from "@/schemas/candidate.schema";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import z from "zod";



type TFormValues = z.infer<typeof locationSchema>;

const SetLocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState<LatLngTuple>([
    51.5072, 0.1276,
  ]);


  const [updateLocation, { isLoading }] = useUpdateCandidateLocationMutation();
  const [updateCandidateAddress ] = useUpdateCandidateAddressMutation();

  const { handleSubmit, setValue, watch } = useForm<TFormValues>({
    defaultValues: {
      latitude: 51.5072,
      longitude: 0.1276,
      address: "",
      postalCode: "",
      city: ""
    },
  });

  const latitude = watch("latitude");
  const longitude = watch("longitude");
  const address = watch("address");
  const city = watch("city");
  const postalCode = watch("postalCode");

  useEffect(() => {
    if (latitude && longitude) {
      const lat = typeof latitude === "string" ? parseFloat(latitude) : latitude;
      const lng = typeof longitude === "string" ? parseFloat(longitude) : longitude;
      if (!isNaN(lat) && !isNaN(lng)) {
        setSelectedLocation([lat, lng]);
      }
    }
  }, [latitude, longitude]);

  const handleLocationSelect = (
    location: LatLngTuple,
    selectedAddress?: string,
    selectedPostalCode?: string,
    selectedCity?: string
  ) => {
    setSelectedLocation(location);
    setValue("latitude", parseFloat(location[0].toFixed(6)));
    setValue("longitude", parseFloat(location[1].toFixed(6)));
    setValue("address", selectedAddress || "");
    setValue("postalCode", selectedPostalCode || "");
    setValue("city", selectedCity || "");
  };

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const formData = new FormData();
    if (data?.address) {
      formData.append('address', `${data.address + "'" + data.postalCode + "'" + data.city}`)
    }
    updateCandidateAddress(formData)
    updateLocation(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl text-gray-800 font-semibold mb-4">
        Set Map Location
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Location address</label>
          <input
            type="text"
            disabled
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none disabled:cursor-not-allowed"
            value={address}
            readOnly
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Postal Code</label>
            <input
              type="text"
              disabled
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none disabled:cursor-not-allowed"
              value={postalCode}
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium mb-1">City</label>
            <input
              type="text"
              disabled
              className="w-full border border-gray-300 rounded px-3 py-2 disabled focus:outline-none disabled:cursor-not-allowed"
              value={city}
              readOnly
            />
          </div>
        </div>
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
  );
};

export default SetLocationForm;
