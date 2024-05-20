import * as dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { SidebarContext } from 'context/SidebarContext';
import CouponServices from 'services/CouponServices';
import { notifyError, notifySuccess } from 'utils/toast';
import SliderServices from 'services/SliderServices';
import BannerServices from 'services/BannerServices';

const useBannerSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [imageUrl, setImageUrl] = useState('');
  const [language, setLanguage] = useState(lang);
  const [resData, setResData] = useState({});
  const [published, setPublished] = useState(false);
  const [discountType, setDiscountType] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const onSubmit = async (data,) => {
    console.log('coupon data',data)
    try {
      setIsSubmitting(true);
      let formData = new FormData();
      // const couponData = {
      //   id: id ? id : null,
      //   code: data.couponCode,
      //   expires_at: data.endTime,
      //   minimum_amount: data.minimumAmount,
      //   amount: data.discountPercentage,
      //   calculation_type: discountType ? 'percentage' : 'fixed',
      //   productType:data.title,
      //   is_eligible_for_free_shipping: data.is_eligible_for_free_shipping
      // };
      formData.append('side', data?.option);
      await Promise.all(imageUrl.map(async (image, index) => {
        if(image.preview){
          const response = await fetch(image.preview);
          const blob = await response.blob();

          const file = new File([blob], image.name, { type: blob.type });
          console.log("file",file)
          formData.append(`image`, file, file.name);
        }
      }));


      console.log("formData",formData)
      if (id) {
        const res = await BannerServices.addBanners(formData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message);
        closeDrawer();
      } else {
        const res = await BannerServices.addBanners(formData);
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
      setValue('option');

      setImageUrl('');
    
      return;
    }
    //GET BY ID
    // if (id) {
    //   (async () => {
    //     try {
    //       const res = await CouponServices.getCouponById(id);
    //       if (res) {
    //         console.log('res coupon', res);
    //         setResData(res.data);
    //         // setValue('title', res?.title[language ? language : 'en']);
    //         // setValue('productType', res?.productType);
    //         setValue('couponCode', res?.data?.code);
    //         setValue('endTime', dayjs(res.data.expires_at).format('YYYY-MM-DD HH:mm'));
    //         setValue('discountPercentage', res.data.amount);
    //         setValue('minimumAmount', res.data.minimum_amount);
    //         setPublished(res.status === 'show' ? true : false);
    //         setDiscountType(
    //           res.data.calculation_type === 'percentage' ? true : false
    //         );
    //         setValue('is_eligible_for_free_shipping', res?.data?.is_eligible_for_free_shipping);
    //         // setImageUrl(res.logo);
    //       }
    //     } catch (err) {
    //       notifyError(err ? err?.response?.data?.message : err.message);
    //     }
    //   })();
    // }
  }, [id, setValue, isDrawerOpen, clearErrors, language, lang]);

  return {
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
    isSubmitting,
    setDiscountType,
    handleSelectLanguage,
  };
};

export default useBannerSubmit;
