"use client";

import { useState } from "react";
import NotificationsHeader from "@/components/NotificationsHeader";
import NotificationsList from "@/components/NotificationsList";
import Pagination from "@/components/Pagination";
import { mockNotifications } from "@/data/notification.data";

const NotificationPage =() =>{
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState(mockNotifications);
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNotifications = notifications.slice(startIndex, startIndex + itemsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of list on page change for better UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const handleAction = (id: string, action: "accept" | "reject") => {
    if (action === "accept") {
      // Here we would typically make an API call to accept
      console.log(`Accepted notification ${id}`);
    } else {
      // Remove notification from the list
      setNotifications(notifications.filter(notification => notification.id !== id));
    }
  };
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NotificationsHeader count={notifications.length} />
        
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <NotificationsList 
            notifications={currentNotifications} 
            onAction={handleAction} 
          />
          
          {notifications.length > 0 ? (
            <div className="px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={notifications.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">No notifications at this time.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default NotificationPage;