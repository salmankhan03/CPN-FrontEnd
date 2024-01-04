import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";
import { FiTrash2 } from "react-icons/fi";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import OrderServices from "services/OrderServices";
import { notifyError, notifySuccess } from "utils/toast";

const CustomUpdateModal = ({ id,status, title, handleConfirmUpdate, closeModal }) => {
  const location = useLocation();

  const [isConfirmOpen, setConfirmOpen] = useState(handleConfirmUpdate);

  const handleConfirm = async () => {

    try {
      setConfirmOpen(false);
      if (location.pathname === "/orders") {
        if (id) {
          let body = {
            id: id,
            status: status
          }
          OrderServices.updateOrder(body)
            .then((res) => {
              notifySuccess(res.message);
              closeModal()
            })
            .catch((err) => notifyError(err.message));
        }
      }
      }catch (err) {
        notifyError(err ? err?.response?.data?.message : err?.message);
        closeModal();
        setConfirmOpen(false);
      }
    };

    const handleCancel = () => {
      setConfirmOpen(false);
      closeModal();
    };

    return (
      <>
        <Modal isOpen={isConfirmOpen} onClose={() => setConfirmOpen(false)}>
          <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
            <span className="flex justify-center text-3xl mb-6 text-red-500">
              <FiTrash2 />
            </span>
            <h2 className="text-xl font-medium mb-1">
              Are You Sure! Want to Update <span className="text-red-500">{title}</span> Record?
            </h2>
            <p>
              Do you really want to update this record? You can't undo this action!
            </p>
          </ModalBody>
          <ModalFooter className="justify-center">
            <Button
              className="w-full sm:w-auto hover:bg-white hover:border-gray-50"
              layout="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirm} className="w-full sm:w-auto">
              Update
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  export default CustomUpdateModal;
