import React, {useState} from "react";
import DrawerButton from "components/form/DrawerButton";
import LabelArea from "components/form/LabelArea";
import Title from "components/form/Title";
import Uploader from "components/image-uploader/Uploader";
import useSliderSubmit from "hooks/useSliderSubmit";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Select, Input, } from "@windmill/react-ui";
import Error from "components/form/Error";
import SwitchToggle from "components/form/SwitchToggle";

const SliderDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
    published,
    setPublished,
    currency,
    discountType,
    setDiscountType,
    isSubmitting,
    isButton,
    setIsButton,
    handleSelectLanguage,
    htmlContent,
    handleHtmlChange,
  } = useSliderSubmit(id);

  const [alignPosition, setAlignPosition] = useState("");

  const handleSelectChange = (e) => {
    setAlignPosition(e.target.value);
  };

  const getAlignmentStyles = (position) => {
    const [vertical, horizontal] = position.split('-');
    let justifyContent = 'center';
    let alignItems = 'center';
  
    switch (vertical) {
      case 'TOP':
        justifyContent = 'flex-start';
        break;
      case 'MIDDLE':
        justifyContent = 'center';
        break;
      case 'BOTTOM':
        justifyContent = 'flex-end';
        break;
      default:
        justifyContent = 'center';
    }
  
    switch (horizontal) {
      case 'LEFT':
        alignItems = 'flex-start';
        break;
      case 'CENTER':
        alignItems = 'center';
        break;
      case 'RIGHT':
        alignItems = 'flex-end';
        break;
      default:
        alignItems = 'center';
    }
  
    return { justifyContent, alignItems };
  };
  return (
    <>
      <div className="w-full relative  p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ">
        {id ? (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={"Update Slider"}
            description={"Update your Slider and necessary information from here"}
          />
        ) : (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={"Add Slider"}
            description={"Add your Slider and necessary information from here"}
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Slider"} />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  folder="slider"
                  product
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  method={id ? "update" : "add"}
                  id={id ? id : ""}
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Content"} />
              <div className="col-span-8 sm:col-span-4">
                <textarea
                  value={htmlContent}
                  onChange={handleHtmlChange}
                  className="form-control "
                  rows="10"
                  style={{ width: '100%', border: '1px solid #ccc' }}
                ></textarea>
                <Error errorName={errors.content} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Align / Position"} />
              <div className="col-span-8 sm:col-span-4">
                {/* <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="option"
                  {...register(`option`, {
                    required: `Option is required!`,
                  })}
                  onChange={handleSelectChange}
                >
                  <option value="" defaultValue hidden>
                    {"Select Position"}
                  </option>
                  <option value="LEFT">{"LEFT"}</option>
                  <option value="CENTER">{"CENTER"}</option>
                  <option value="RIGHT">{"RIGHT"}</option>
                </Select> */}
                 <Select
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                name="position"
                {...register(`option`, {
                  required: `Position is required!`,
                })}
                onChange={handleSelectChange}
              >
                <option value="" defaultValue hidden>
                  {"Select Position"}
                </option>
                <option value="TOP-LEFT">{"TOP LEFT"}</option>
                <option value="TOP-CENTER">{"TOP CENTER"}</option>
                <option value="TOP-RIGHT">{"TOP RIGHT"}</option>
                <option value="MIDDLE-LEFT">{"MIDDLE LEFT"}</option>
                <option value="MIDDLE-CENTER">{"MIDDLE CENTER"}</option>
                <option value="MIDDLE-RIGHT">{"MIDDLE RIGHT"}</option>
                <option value="BOTTOM-LEFT">{"BOTTOM LEFT"}</option>
                <option value="BOTTOM-CENTER">{"BOTTOM CENTER"}</option>
                <option value="BOTTOM-RIGHT">{"BOTTOM RIGHT"}</option>
              </Select>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Preview"} />
              <div className="col-span-8 sm:col-span-4">
                <div>
                  {imageUrl && imageUrl.map((image, index) => {
                    console.log("image",image)
                    return (
                    <div key={index} className="relative w-full max-w-lg border border-gray-300 rounded-md overflow-hidden shadow-sm">
                      <img
                        src={image.preview ? image.preview : image}
                        alt={image.path}
                        className="object-contain w-full h-full"
                      />
                      <div
                        className="absolute top-0 left-0 w-full h-full p-4 text-white bg-black bg-opacity-50 dynamic-html"
                        style={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: getAlignmentStyles(alignPosition).justifyContent,
                          alignItems: getAlignmentStyles(alignPosition).alignItems,
                         }}
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                      />
                    </div>
                  )})}
                </div>
              </div>
            </div>
          </div>
  
          <DrawerButton id={id} title="Slider" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars >
    </>
  );
  
};

export default SliderDrawer;
