"use client";

import { useEffect } from "react";
import { useUpdateNotificationMutation } from "@/redux/features/notification/notificationApi"; // adjust path as needed

interface NotificationsHeaderProps {
  count: number;
}

export default function NotificationsHeader({
  count,
}: NotificationsHeaderProps) {
  const [updateNotification] = useUpdateNotificationMutation();

  useEffect(() => {
    const markAllNotificationsAsRead = async () => {
      try {
        await updateNotification({}).unwrap();
      } catch (error) {
        console.error("Failed to mark notifications as read", error);
      }
    };

    markAllNotificationsAsRead();
  }, [updateNotification]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Notifications</h1>
        {count > 0 && (
          <div className="ml-3 flex items-center">
            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 transition-all duration-200">
              {count}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
