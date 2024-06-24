import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { SidebarContext } from 'context/SidebarContext';
import { notifyError, notifySuccess } from 'utils/toast';
import HeaderSloganServices from 'services/HeaderSloganServices';

const useSloganSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [language, setLanguage] = useState(lang);
  const [resData, setResData] = useState({});
  // const [published, setPublished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [htmlContent, setHtmlContent] = useState()


  const settings = useSelector((state) => state.setting);
  const { settingItem } = settings;

  const globalSetting = settingItem.find(
    (value) => value.name === 'globalSetting'
  );
  const currency = globalSetting?.default_currency || '$';

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleHtmlChange = (e) => {
    setHtmlContent(e.target.value);
  };
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      let formData = new FormData();
      formData.append(`id`, id ? id : '')
      formData.append(`text`, htmlContent);
      formData.append(`url`, '');
      
      if (id) {
        const res = await HeaderSloganServices.addSlogan(formData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await HeaderSloganServices.addSlogan(formData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      }
    } catch (err) {
      notifyError(err ? err?.response?.data?.message : err.message);
      setIsSubmitting(false);
      closeDrawer();
    }
  };

  const handleSelectLanguage = (lang) => {
    console.log('lang======================', lang)
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue('title', resData.title[lang ? lang : 'en']);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue('title');
      setValue('buttonUrl');
      setHtmlContent('');

      clearErrors('title');
      clearErrors('buttonUrl'); 


      return;
    }
    //GET BY ID
    if (id) {
      (async () => {
        try {
          const res = await HeaderSloganServices.getSloganById(id);
          if (res) {
            console.log('res coupon', res);
            setResData(res.data);
            // setValue('title', res?.data.text);
            // setValue('buttonUrl', res.data.url);
            setHtmlContent(res?.data.text)
           
            // setPublished(res.status === 'show' ? true : false);
          }
        } catch (err) {
          notifyError(err ? err?.response?.data?.message : err.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, clearErrors, language, lang]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    // published,
    // setPublished,
    isSubmitting,
    handleHtmlChange,
    htmlContent,
    setHtmlContent,
    handleSelectLanguage,
  };
};

export default useSloganSubmit;
