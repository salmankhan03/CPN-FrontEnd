
import DrawerButton from "components/form/DrawerButton";
import LabelArea from "components/form/LabelArea";
import Title from "components/form/Title";
import Uploader from "components/image-uploader/Uploader";
import useSliderSubmit from "hooks/useSliderSubmit";
import { Scrollbars } from "react-custom-scrollbars-2";

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
    handleSelectLanguage,
  } = useSliderSubmit(id);

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
          </div>

          <DrawerButton id={id} title="Slider" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default SliderDrawer;
