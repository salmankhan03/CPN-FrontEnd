import {Input,} from "@windmill/react-ui";
import DrawerButton from "components/form/DrawerButton";
import LabelArea from "components/form/LabelArea";
import Title from "components/form/Title";
import useSloganSubmit from "hooks/useSloganSubmit";
import { Scrollbars } from "react-custom-scrollbars-2";
import Error from "components/form/Error";

const HeaderSloganDrawer = ({ id }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    // published,
    // setPublished,
    isSubmitting,
    handleSelectLanguage,
  } = useSloganSubmit(id);

  return (
    <>
      <div className="w-full relative  p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ">
        {id ? (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={"Update Slogan"}
            description={"Update your Slogan and necessary information from here"}
          />
        ) : (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title={"Add Slogan"}
            description={"Add your Slogan and necessary information from here"}
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">         
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Slogan"} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`title`, {
                    required: "TItle is required!",
                  })}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="title"
                  type="text"
                  placeholder={"Slogan"}
                />
                <Error errorName={errors.title} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Button Url"} />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`buttonUrl`, {
                    required: "Content is required!",
                  })}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="buttonUrl"
                  type="text"
                  placeholder={"Slogan Url"}
                />
                <Error errorName={errors.buttonUrl} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Slogan" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default HeaderSloganDrawer;
