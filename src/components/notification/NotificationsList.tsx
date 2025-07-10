"use client";

import { Notification } from "@/data/notification.data";
import NotificationItem from "./NotificationItem";

interface NotificationsListProps {
  notifications: Notification[];
}

const NotificationsList = ({ notifications }: NotificationsListProps) =>{
  if (notifications.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">No notifications to display.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-red-500">
      {/* Desktop view - Table */}
      <div className="hidden md:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notifications?.map((notification, index) => (
              <NotificationItem 
                key={index}
                notification={notification}
                view="table"
              />
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile view - Cards */}
      <div className="md:hidden">
        <ul className="divide-y divide-gray-200">
          {notifications?.map((notification, index) => (
            <NotificationItem 
              key={index}
              notification={notification}
              view="card"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationsList;