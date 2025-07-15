import toast from "react-hot-toast";

class ValidationHelper {
    SuccessToast(msg: string) {
        toast.success(msg);
    }

    ErrorToast(msg: string) {
        toast.error(msg);
    }

    WarningToast(msg: string) {
        toast(msg, {
            icon: '⚠️',
            style: {
                background: '#fff3cd',
                color: '#856404',
                border: '1px solid #ffeeba',
            },
        });
    }
}

export const { SuccessToast, ErrorToast, WarningToast } = new ValidationHelper();
