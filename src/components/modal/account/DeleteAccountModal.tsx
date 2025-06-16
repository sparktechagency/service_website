"use client";
import { Modal } from "antd";
import { useState } from "react";
import { X } from "lucide-react";

const DeleteAccountModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        type="button"
        className="inline-flex items-center cursor-pointer px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-500 hover:bg-red-50 focus:outline-none transition-colors"
      >
        <X className="h-4 w-4 mr-2" />
        Close Account
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
                Are you sure, you want to delete?
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
                onClick={() => setModalOpen(false)}
                className="px-4 cursor-pointer py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;
