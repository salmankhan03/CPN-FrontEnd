import {
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import useToggleDrawer from "hooks/useToggleDrawer";
import DeleteModal from "components/modal/DeleteModal";
import MainDrawer from "components/drawer/MainDrawer";
import CheckBox from "components/form/CheckBox";
import EditDeleteButton from "components/table/EditDeleteButton";
import { showingTranslateValue } from "utils/translate";

import HeaderSloganDrawer from "components/drawer/HeaderSloganDrawer";

const HeaderSloganTable = ({ lang, isCheck, slogans, setIsCheck }) => {
  // console.log("slider", slogans)
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, JSON.parse(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== JSON.parse(id)));
    }
  };

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck.length < 2 && (
        <MainDrawer>
          <HeaderSloganDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {slogans?.map((slogan, i) => {
          return (
            <TableRow key={i + 1}>
              <TableCell>
                <CheckBox
                  type="checkbox"
                  name={slogan?.title?.en}
                  id={slogan.id}
                  handleClick={handleClick}
                  isChecked={isCheck?.includes(slogan.id)}
                />
              </TableCell>
              <TableCell>

                {" "}
                <span className="text-sm"> {slogan.id}</span>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <span className="text-sm"> {slogan?.text}</span>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <span className="text-sm"> {slogan.url}</span>{" "}
              </TableCell>
              <TableCell>
                <EditDeleteButton
                  id={slogan?.id}
                  isCheck={isCheck}
                  handleUpdate={handleUpdate}
                  handleModalOpen={handleModalOpen}
                  title={showingTranslateValue(slogan?.title, lang)}
                  hideDeleteButton={false}
                />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </>
  );
};

export default HeaderSloganTable;
