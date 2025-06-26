"use client";
import React from "react";
import PriceCard from "./PriceCard";
import { useGetSubscriptionsQuery } from "@/redux/features/subscription/subscriptionApi";
import SubscriptionLoading from "@/components/loader/SubscriptionLoading";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import { ISubscription } from "@/types/subscription.type";

const SubscriptionList = () => {
  const { data, isLoading, isError } = useGetSubscriptionsQuery(undefined);
  const subscriptions = data?.data || [];

  if (isLoading) {
    return <SubscriptionLoading />;
  }

  if (!isLoading && !isError && subscriptions?.length === 0) {
    return <NotFoundCard title="There is no subscription plan " />;
  }

  if (!isLoading && !isError && subscriptions?.length > 0) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {subscriptions?.map((subscription: ISubscription, index:number) => (
            <PriceCard
              key={index}
              subscription={subscription}
            />
          ))}
        </div>
      </>
    );
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }
};

export default SubscriptionList;
