"use client";
import NotificationsHeader from "@/components/notification/NotificationHeader";
import { useGetNotificationsQuery } from "@/redux/features/notification/notificationApi";
import NotificationsLoading from "@/components/loader/NotificationsLoading";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import NotificationsList from "@/components/notification/NotificationsList";

const CandidateNotificationPage = () => {
  const { data, isLoading, isError } = useGetNotificationsQuery(undefined);
  const notifications = data?.data?.allNotification || [];

  if (isLoading) {
    return <NotificationsLoading />
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />
  }

  if (!isLoading && !isError) {
    return (
      <main className="min-h-screen flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <NotificationsHeader count={notifications.length} />

          <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
           

            {notifications.length > 0 ? (
              <>
                 <NotificationsList notifications={notifications}/>
              </>
            ) : (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500">
                  No notifications at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }


};

export default CandidateNotificationPage;
