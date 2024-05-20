import {

  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";

//internal import

import { useState } from "react";
import useToggleDrawer from "hooks/useToggleDrawer";
import useAsync from "hooks/useAsync";
import SettingServices from "services/SettingServices";
import DeleteModal from "components/modal/DeleteModal";
import MainDrawer from "components/drawer/MainDrawer";
import CheckBox from "components/form/CheckBox";
import EditDeleteButton from "components/table/EditDeleteButton";
import { showingTranslateValue } from "utils/translate";

import BannerDrawer from "components/drawer/BannerDrawer";

const BannersTable = ({ lang, isCheck, sliders, setIsCheck }) => {
  console.log("slider", sliders)
  const [updatedCoupons, setUpdatedCoupons] = useState([]);

  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);


  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, JSON.parse(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== JSON.parse(id)));
    }
  };


  // useEffect(() => {
  //   const result = sliders?.map((el) => {
  //     const newDate = new Date(el?.updatedAt).toLocaleString("en-US", {
  //       timeZone: globalSetting?.default_time_zone,
  //     });
  //     const newObj = {
  //       ...el,
  //       updatedDate: newDate,
  //     };
  //     return newObj;
  //   });
  //   setUpdatedCoupons(result);
  // }, [sliders, globalSetting?.default_time_zone]);

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck.length < 2 && (
        <MainDrawer>
          <BannerDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {sliders?.map((slides, i) => {
          console.log("sliders", sliders)
          console.log("slides", slides)
          return (
            <TableRow key={i + 1}>
              <TableCell>
                <CheckBox
                  type="checkbox"
                  name={slides?.title?.en}
                  id={slides.id}
                  handleClick={handleClick}
                  isChecked={isCheck?.includes(slides.id)}
                />
              </TableCell>
              <TableCell>

                {" "}
                <span className="text-sm"> {slides.id}</span>{" "}
              </TableCell>
              <TableCell>

                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                  <img
                    src={slides?.link}
                    alt="Placeholder Image 2"
                    className="rounded-lg shadow-md"
                  />
                </div>

              </TableCell>
              <TableCell>

                {" "}
                <span className="text-sm"> {slides.side}</span>{" "}
              </TableCell>
              <TableCell>
                <EditDeleteButton
                  id={slides?.id}
                  isCheck={isCheck}
                  handleUpdate={handleUpdate}
                  handleModalOpen={handleModalOpen}
                  title={showingTranslateValue(slides?.title, lang)}
                  hideDeleteButton={true}
                />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </>
  );
};

export default BannersTable;
