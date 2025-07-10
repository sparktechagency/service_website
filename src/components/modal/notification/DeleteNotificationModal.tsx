"use client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { CgSpinnerTwo } from "react-icons/cg";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";


const DeleteNotificationModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
    const [updateCandidateProfile, {isLoading, isSuccess}] = useUpdateCandidateProfileMutation();
  

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setModalOpen(false);
    }
  }, [isLoading, isSuccess]);

  const handleDelete = () => {
   const formData = new FormData();
      formData.append("profile_private", "false");
      updateCandidateProfile(formData);
  };

  return (
    <>
  
      <button
         onClick={() => setModalOpen(true)}
        className="p-1.5 rounded-full cursor-pointer bg-green-100 text-green-600 hover:bg-green-200 focus:outline-none hover:border-green-800 transition-all duration-200"
        aria-label="Accept"
      >
        <Check className="h-5 w-5" />
      </button>

      

      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        centered
        closable={false}
      >
        <div className="rounded-md">
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold">
                Are you sure, you want to accept?
              </h3>
            </div>
          </div>
          <div>
            <div className="flex justify-end space-x-2 pt-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 cursor-pointer border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                No
              </button>
              <button
                onClick={handleDelete}
                disabled={isLoading}
                className="bg-red-500 cursor-pointer hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                  </>
                ) : (
                  "Yes"
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteNotificationModal;
