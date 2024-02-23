import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from 'context/SidebarContext';
import CustomerServices from 'services/CustomerServices';
import { notifyError, notifySuccess } from 'utils/toast';

const useCustomerSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedProvince, setSelectedProvince]= useState()
  const { closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const customerData = {
        id: id,
        name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city:data.city,
        province: selectedProvince,
        zipcode:data.zipcode
        

      };

      if (id) {
        // notifyError("Admin can't update the user details only customers can update there info ");
        // const res = await CustomerServices.updateCustomer(id, customerData);
        // setIsUpdate(true);
        // notifySuccess(res.message);
        closeDrawer();
      }
    } catch (err) {
      notifyError(err ? err?.response?.data?.message : err.message);
      closeDrawer();
    }
  };
  const handleProvince = (e) =>{
      setSelectedProvince(e)
  }

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await CustomerServices.getCustomerById(id);
          if (res.status_code === 200) {
            setValue('name', res.user.first_name);
            setValue('last_name', res.user.last_name);
            setValue('phone', res.user.contact_no);
            setValue('email', res.user.email);
            setValue('address', res.user.address);
            setValue('city', res.user.city);
            // setValue('province', res.user.address);
            setSelectedProvince(res.user.province)
            setValue('zipCode', res.user.address);

          }
        } catch (err) {
          notifyError(err ? err?.response?.data?.message : err.message);
        }
      })();
    }
  }, [id, setValue]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
    selectedProvince, 
    setSelectedProvince,
    handleProvince
  };
};

export default useCustomerSubmit;
