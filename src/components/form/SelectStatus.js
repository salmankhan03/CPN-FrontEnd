import React, { useContext, useState } from "react";
import { Select } from "@windmill/react-ui";

import OrderServices from "services/OrderServices";
import { notifySuccess, notifyError } from "utils/toast";
import { SidebarContext } from "context/SidebarContext";
import useToggleDrawer from "hooks/useToggleDrawer";
import CustomUpdateModal from "components/modal/UpdateModal";

const SelectStatus = ({ id, order, handleUpdateStatus }) => {
  const status = order?.status || '';
  return (
    <>
      <select
        value={status}
        onChange={(e) => handleUpdateStatus(id, e.target.value)}
        className="border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
      >
        <option value="" disabled hidden>
          Select status
        </option>
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Delivered">Delivered</option>
        <option value="Returned">Returned</option>
        <option value="Refunded">Refunded</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </>
  );
};

export default SelectStatus;
