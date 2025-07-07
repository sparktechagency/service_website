"use client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useApplyJobMutation } from "@/redux/features/job/jobApi";
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { ErrorToast } from "@/helper/ValidationHelper";
import { CgSpinnerTwo } from "react-icons/cg";


type TProps = {
  jobId: string;
}

const ApplyModal = ({ jobId }: TProps) => {
  const router = useRouter();
  const userInfo = useUserInfo();
  const [modalOpen, setModalOpen] = useState(false);

  const [applyJob, { isLoading, isSuccess }] =
    useApplyJobMutation();



  useEffect(() => {
    if (!isLoading && isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess, isLoading]);


  const handleSubmit = () => {
    applyJob({
      id: jobId,
      data: {
        resume: "https://res.cloudinary.com/dqhbgockh/raw/upload/v1751533157/real_estate/1751533155088-gg.pdf"
      }
    });
  };




  return (
    <>
      <Button
        onClick={() => {
          if (userInfo?.authId) {
            setModalOpen(true);
          } else {
            ErrorToast("You have to sign in as a Candidate");
            router.push("/login");
          }
        }}
        className="w-full md:w-auto cursor-pointer bg-primary hover:bg-[#152a61] text-white flex items-center gap-2"
      >
        Apply Now
        <span className="ml-1">→</span>
      </Button>
      <Modal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
        }}
        maskClosable={false}
        footer={false}
        centered
      >
        <div className="p-6">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Apply Job</h2>

          <div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 w-full bg-gray-100 border cursor-pointer border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit}
                className="px-6 w-full py-2.5 bg-primary hover:bg-[#2b4773] cursor-pointer text-white font-medium rounded-md transition-colors flex items-center justify-center gap-x-2"
              >
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Processing...
                  </>
                ) : (
                  "Apply"
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ApplyModal;
