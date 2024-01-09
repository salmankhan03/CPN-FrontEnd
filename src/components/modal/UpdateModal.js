import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";
import { FiTrash2 } from "react-icons/fi";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import OrderServices from "services/OrderServices";
import { notifyError, notifySuccess } from "utils/toast";
import CheckBox from "components/form/CheckBox";

const CustomUpdateModal = ({ id,status, title, handleConfirmUpdate, closeModal,templatesList,customerName}) => {
  const location = useLocation();
  const [isCheck, setIsCheck] = useState(true);
  const [readEmailTemplates, setReadEmailTemplates] = useState(false);
  const [selectedTemplates, setSelectedTemplates] = useState()

  const [isConfirmOpen, setConfirmOpen] = useState(handleConfirmUpdate);

  const handleSelectAll = () => {
    setIsCheck(!isCheck);
    
  };
  const showEmailTemplates = () =>{
    if(isCheck){
      const StatusId = getStatusId(status);
        setReadEmailTemplates(true)
    }else{
      handleConfirm()
    }
  }
  function getStatusId(statusName) {
    const findStatus = templatesList.find(item => item.name === statusName);
    let decodeString = atob(findStatus.body)
    let againdecodeString = atob(decodeString)
    const values = {
      customer_Name: customerName,
      order_Number: id,
      company_Name: 'http://kingsmankids.com/'
    };
    againdecodeString = againdecodeString.replace(/\[(customer_Name|order_Number|company_Name)\]/g,  (match, p1) => values[p1]);

    setSelectedTemplates(againdecodeString)
    return findStatus ? findStatus.id : null;
  }
 
  const handleConfirm = async () => {
    try {
      setConfirmOpen(false);
      // console.log("templatesList ORDER CONFIRm",templatesList)

      if (location.pathname === "/orders") {
        if (id) {
          const StatusId = getStatusId(status);
          let body = {
            id: id,
            status: status,
            template_id: StatusId
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
      {!readEmailTemplates ?(
        <Modal isOpen={isConfirmOpen} onClose={() => setConfirmOpen(false)}>
          <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
            <span className="flex justify-center text-3xl mb-6 text-red-500">
              {/* <FiTrash2 /> */}
            </span>
            <h2 className="text-xl font-medium mb-1">
              Are You Sure! Want to Update  Record?

              {/* Are You Sure! Want to Update <span className="text-red-500">{""}</span> Record? */}
            </h2>
            <p>
              Do you really want to update this record? You can't undo this action!
            </p>
            <div className="mt-3">
              <span className="mt-1">
              <CheckBox
                    type="checkbox"
                    name="select"
                    id="select"
                    isChecked={isCheck}
                    handleClick={handleSelectAll}
                  />
                </span>
                <span className="ml-3"> Custom message!</span>
          </div>
          </ModalBody>
          <ModalFooter className="justify-center">
            <Button
              className="w-full sm:w-auto hover:bg-white hover:border-gray-50"
              layout="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button onClick={showEmailTemplates} className="w-full sm:w-auto">
              Continue
            </Button>
          </ModalFooter>
        </Modal>
        ):(

        <Modal isOpen={isConfirmOpen} onClose={() => setConfirmOpen(false)}>
          <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
            <span className="flex justify-center text-3xl mb-6 text-red-500">
            </span>
            <div dangerouslySetInnerHTML={{ __html:selectedTemplates }} />

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
        )}
      </>
    );
  };

  export default CustomUpdateModal;
