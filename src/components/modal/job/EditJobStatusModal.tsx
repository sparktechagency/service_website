import { useMakeActiveExpireJobMutation } from "@/redux/features/job/jobApi";
import { Modal } from "antd";
import { Edit3 } from "lucide-react";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";

type TProps ={
  jobId:string;
  status: string;
}

const EditJobStatusModal = ({ jobId, status }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ makeActiveExpire, { isLoading, isSuccess }] = useMakeActiveExpireJobMutation();



  useEffect(() => {
    if (isSuccess) {
      setModalOpen(false);
    }
  }, [isSuccess]);


 const handleClick = () => {
   makeActiveExpire({
     id: jobId,
     data: {
       status: status == "Active" ? "Expired" : "Active",
     },
   });
 };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="p-1.5 hover:bg-gray-100 cursor-pointer rounded-full transition-colors"
      >
        <Edit3 className="h-4 w-4 text-gray-500 hover:text-gray-700" />
      </button>
      <Modal
        title={`Are you sure, you want to ${
          status == "Active" ? "expire" : "active"
        } this job?`}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        closable={false}
      >
        <div className="flex justify-end px-4 gap-x-3">
          <button
            onClick={() => setModalOpen(false)}
            className="bg-black text-white cursor-pointer px-4 py-1 rounded-md"
          >
            No
          </button>
          <button
            onClick={handleClick}
            disabled={isLoading}
            className="bg-red-500 hover:bg-red-600 cursor-pointer duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed"
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
      </Modal>
    </>
  );
};

export default EditJobStatusModal;
