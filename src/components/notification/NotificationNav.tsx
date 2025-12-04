import useUserInfo from "@/hooks/useUserInfo";
import { useGetNotificationsQuery } from "@/redux/features/notification/notificationApi";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";


interface Notification {
    status: boolean;
    // Add other fields as needed if you use them
}


const NotificationNav = () => {
    const router = useRouter();
    const userInfo = useUserInfo();

    const { data } = useGetNotificationsQuery(undefined);
    const notifications = data?.data?.allNotification || [];
    const unSeenNotifications =
        notifications &&
        notifications.filter((data: Notification) => data?.status === false);



    return (
        <>
            <button
                onClick={() =>
                    router.push(
                        `/dashboard/${userInfo?.role === "USER" ? "candidate" : "employer"
                        }/notifications`
                    )
                }
                className="relative rounded-full p-1 cursor-pointer hover:bg-white/10"
            >
                <Bell size={20} />
                {unSeenNotifications?.length > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[4px] text-[10px] leading-tight flex items-center justify-center rounded-full bg-red-500 text-white">
                        {unSeenNotifications.length}
                    </span>
                )}
            </button>
        </>
    )
}

export default NotificationNav;