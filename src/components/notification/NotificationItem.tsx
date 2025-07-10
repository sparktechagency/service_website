/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Notification } from "@/data/notification.data";
import getFormattedDate from "@/utils/getFormattedDate";
import DeleteNotificationModal from "../modal/notification/DeleteNotificationModal";

interface NotificationItemProps {
  notification: Notification;
  view: "card" | "table";
}

export default function NotificationItem({ notification, view }: NotificationItemProps) {
  const [isHovering, setIsHovering] = useState(false);

  

  const ActionButtons = () => (
    <div className="flex space-x-2">
      <DeleteNotificationModal/>
      {/* <button
        // onClick={handleReject}
        className="p-1.5 rounded-full cursor-pointer bg-red-100 text-red-600 hover:bg-red-200 focus:outline-none transition-all duration-200"
        aria-label="Reject"
      >
        <X className="h-5 w-5" />
      </button> */}
    </div>
  );

  if (view === "table") {
    return (
      <tr 
        className={`bg-blue-50 hover:bg-gray-50 transition-colors duration-150`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">
            {notification?.title}
          </div>
          <div className="text-xs text-gray-500 mt-1">
           {getFormattedDate(notification?.createdAt)}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <ActionButtons />
        </td>
      </tr>
    );
  }
  
  return (
    <li 
      className={`px-4 py-4 bg-blue-50`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <p className="mt-1 text-sm text-gray-600">{notification.title}</p>
          <p className="mt-1 text-xs text-gray-500">
           {getFormattedDate(notification?.createdAt)}
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <ActionButtons />
        </div>
      </div>
    </li>
  );
}