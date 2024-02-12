import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, Button,Input } from "@windmill/react-ui";
import DrawerButton from "components/form/DrawerButton";
import Error from "components/form/Error";
import InputArea from "components/form/InputArea";
import LabelArea from "components/form/LabelArea";
import SwitchToggle from "components/form/SwitchToggle";
import TextAreaCom from "components/form/TextAreaCom";
import Title from "components/form/Title";
import Uploader from "components/image-uploader/Uploader";
import useCategorySubmit from "hooks/useCategorySubmit";
import Tree from "rc-tree";
import Scrollbars from "react-custom-scrollbars-2";
import { useTranslation } from "react-i18next";
//internal import
import CategoryServices from "services/CategoryServices";
import { notifyError } from "utils/toast";
import "./categoryModal.css"
const CategoryModal = ({ handleConfirmUpdate, closeModal }) => {
    const [isConfirmOpen, setConfirmOpen] = useState(handleConfirmUpdate);
    console.log("isConfirmOpen", isConfirmOpen)
    let id = undefined
    let data = {
        "status_code": 200,
        "list": [
            {
                "id": 1,
                "name": "Clothings",
                "description": "all types of clothings",
                "parent_id": null,
                "status": "hide",
                "category_image": [
                    {
                        "id": 1,
                        "category_id": 1,
                        "name": "https://backend.kingsmankids.com/uploads/category/2023/12/laravel-217fcf3c349e401bffb017b021b951eb.webp",
                        "original_name": "product-life-cycle_0.webp"
                    },
                    {
                        "id": 2,
                        "category_id": 1,
                        "name": "https://backend.kingsmankids.com/uploads/category/2023/12/laravel-e293d088ae5b1b2fa9f8be952a1f5997.webp",
                        "original_name": "image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.webp"
                    },
                    {
                        "id": 3,
                        "category_id": 1,
                        "name": "https://backend.kingsmankids.com/uploads/category/2023/12/laravel-9865fa41556d453e26fe1a44aa1ddd52.jpg",
                        "original_name": "istockphoto-1080057124-612x612.jpg"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Sports",
                "description": "ALL types of Sports equipments",
                "parent_id": null,
                "status": "show",
                "category_image": []
            },
            {
                "id": 3,
                "name": "Bat",
                "description": "ALL Types of Bats",
                "parent_id": 2,
                "status": "show",
                "category_image": []
            },
            {
                "id": 4,
                "name": "Mobile",
                "description": "ALL types Of Mobile displayed",
                "parent_id": null,
                "status": "hide",
                "category_image": []
            },
            {
                "id": 5,
                "name": "Samsung",
                "description": "Samsung mobile",
                "parent_id": 4,
                "status": "hide",
                "category_image": []
            },
            {
                "id": 6,
                "name": "test",
                "description": "tt",
                "parent_id": 1,
                "status": "show",
                "category_image": []
            },
            {
                "id": 7,
                "name": "adminqw",
                "description": "qw",
                "parent_id": 1,
                "status": "show",
                "category_image": []
            },
            {
                "id": 8,
                "name": "as",
                "description": "asa",
                "parent_id": 6,
                "status": "show",
                "category_image": []
            },
            {
                "id": 9,
                "name": "name123",
                "description": "description123",
                "parent_id": 10,
                "status": "show",
                "category_image": [
                    {
                        "id": 5,
                        "category_id": 9,
                        "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-d32cf10a901524670601a3aa730d8e56.jpg",
                        "original_name": "p1.jpg"
                    }
                ]
            },
            {
                "id": 10,
                "name": "test",
                "description": "sds",
                "parent_id": null,
                "status": "show",
                "category_image": []
            },
            {
                "id": 11,
                "name": "test1",
                "description": "ere",
                "parent_id": null,
                "status": "show",
                "category_image": [
                    {
                        "id": 14,
                        "category_id": 11,
                        "name": "https://backend.kingsmankids.com/uploads/category/2024/02/laravel-84fb6a19f1949f4ddc681530feb64258.jpg",
                        "original_name": "p1.jpg"
                    }
                ]
            },
            {
                "id": 12,
                "name": "test2",
                "description": "as",
                "parent_id": null,
                "status": "show",
                "category_image": [
                    {
                        "id": 4,
                        "category_id": 12,
                        "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-6bf4eba1ef2fe66c46722f25df367d6d.jpg",
                        "original_name": "p1.jpg"
                    }
                ]
            },
            {
                "id": 13,
                "name": "test4",
                "description": "wewe",
                "parent_id": null,
                "status": "show",
                "category_image": [
                    {
                        "id": 9,
                        "category_id": 13,
                        "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-8d06f8b5b68d9dc8439e777d91dfba45.PNG",
                        "original_name": "Capture.PNG"
                    }
                ]
            },
            {
                "id": 14,
                "name": "test5",
                "description": "fgf",
                "parent_id": null,
                "status": "show",
                "category_image": [
                    {
                        "id": 8,
                        "category_id": 14,
                        "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-1e67142856b5a89fecdbeb84d2947bba.PNG",
                        "original_name": "Capture.PNG"
                    }
                ]
            },
            {
                "id": 15,
                "name": "dsd",
                "description": "sd",
                "parent_id": null,
                "status": "show",
                "category_image": [
                    {
                        "id": 10,
                        "category_id": 15,
                        "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-f763cebd4f22b83b7ef8dd4917ad164a.PNG",
                        "original_name": "Capture.PNG"
                    }
                ]
            }
        ]
    }
    let categoriesList = [
        {
            "id": 1,
            "name": "Clothings",
            "description": "all types of clothings",
            "status": "hide",
            "children": [
                {
                    "id": 6,
                    "name": "test",
                    "description": "tt",
                    "parent_id": 1,
                    "status": "show",
                    "children": [
                        {
                            "id": 8,
                            "name": "as",
                            "description": "asa",
                            "parent_id": 6,
                            "status": "show",
                            "children": [],
                            "category_image": []
                        }
                    ],
                    "category_image": []
                },
                {
                    "id": 7,
                    "name": "adminqw",
                    "description": "qw",
                    "parent_id": 1,
                    "status": "show",
                    "children": [],
                    "category_image": []
                }
            ],
            "category_image": [
                {
                    "id": 1,
                    "category_id": 1,
                    "name": "https://backend.kingsmankids.com/uploads/category/2023/12/laravel-217fcf3c349e401bffb017b021b951eb.webp",
                    "original_name": "product-life-cycle_0.webp"
                },
                {
                    "id": 2,
                    "category_id": 1,
                    "name": "https://backend.kingsmankids.com/uploads/category/2023/12/laravel-e293d088ae5b1b2fa9f8be952a1f5997.webp",
                    "original_name": "image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.webp"
                },
                {
                    "id": 3,
                    "category_id": 1,
                    "name": "https://backend.kingsmankids.com/uploads/category/2023/12/laravel-9865fa41556d453e26fe1a44aa1ddd52.jpg",
                    "original_name": "istockphoto-1080057124-612x612.jpg"
                }
            ]
        },
        {
            "id": 2,
            "name": "Sports",
            "description": "ALL types of Sports equipments",
            "status": "show",
            "children": [
                {
                    "id": 3,
                    "name": "Bat",
                    "description": "ALL Types of Bats",
                    "parent_id": 2,
                    "status": "show",
                    "children": [],
                    "category_image": []
                }
            ],
            "category_image": []
        },
        {
            "id": 4,
            "name": "Mobile",
            "description": "ALL types Of Mobile displayed",
            "status": "hide",
            "children": [
                {
                    "id": 5,
                    "name": "Samsung",
                    "description": "Samsung mobile",
                    "parent_id": 4,
                    "status": "hide",
                    "children": [],
                    "category_image": []
                }
            ],
            "category_image": []
        },
        {
            "id": 10,
            "name": "test",
            "description": "sds",
            "status": "show",
            "children": [
                {
                    "id": 9,
                    "name": "name123",
                    "description": "description123",
                    "parent_id": 10,
                    "status": "show",
                    "children": [
                        {
                            "id": 16,
                            "name": "asa",
                            "description": "asa",
                            "parent_id": 9,
                            "status": "show",
                            "children": [],
                            "category_image": [
                                {
                                    "id": 11,
                                    "category_id": 16,
                                    "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-f2aaa97c6cab74bf6c55e9e70060da5e.PNG",
                                    "original_name": "Capture.PNG"
                                }
                            ]
                        }
                    ],
                    "category_image": [
                        {
                            "id": 5,
                            "category_id": 9,
                            "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-d32cf10a901524670601a3aa730d8e56.jpg",
                            "original_name": "p1.jpg"
                        }
                    ]
                }
            ],
            "category_image": []
        },
        {
            "id": 11,
            "name": "test1",
            "description": "ere",
            "status": "show",
            "children": [
                {
                    "id": 17,
                    "name": "test7",
                    "description": "ghg",
                    "parent_id": 11,
                    "status": "show",
                    "children": [],
                    "category_image": [
                        {
                            "id": 13,
                            "category_id": 17,
                            "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-df6efb6cce74fb42014265669cc24027.jpg",
                            "original_name": "p1.jpg"
                        }
                    ]
                }
            ],
            "category_image": [
                {
                    "id": 14,
                    "category_id": 11,
                    "name": "https://backend.kingsmankids.com/uploads/category/2024/02/laravel-84fb6a19f1949f4ddc681530feb64258.jpg",
                    "original_name": "p1.jpg"
                }
            ]
        },
        {
            "id": 12,
            "name": "test2",
            "description": "as",
            "status": "show",
            "children": [],
            "category_image": [
                {
                    "id": 4,
                    "category_id": 12,
                    "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-6bf4eba1ef2fe66c46722f25df367d6d.jpg",
                    "original_name": "p1.jpg"
                }
            ]
        },
        {
            "id": 13,
            "name": "test4",
            "description": "wewe",
            "status": "show",
            "children": [],
            "category_image": [
                {
                    "id": 9,
                    "category_id": 13,
                    "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-8d06f8b5b68d9dc8439e777d91dfba45.PNG",
                    "original_name": "Capture.PNG"
                }
            ]
        },
        {
            "id": 14,
            "name": "test5",
            "description": "fgf",
            "status": "show",
            "children": [],
            "category_image": [
                {
                    "id": 8,
                    "category_id": 14,
                    "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-1e67142856b5a89fecdbeb84d2947bba.PNG",
                    "original_name": "Capture.PNG"
                }
            ]
        },
        {
            "id": 15,
            "name": "dsd",
            "description": "sd",
            "status": "show",
            "children": [],
            "category_image": [
                {
                    "id": 10,
                    "category_id": 15,
                    "name": "https://backend.kingsmankids.com/uploads/category/2024/01/laravel-f763cebd4f22b83b7ef8dd4917ad164a.PNG",
                    "original_name": "Capture.PNG"
                }
            ]
        },
        {
            "id": 18,
            "name": "Supplements",
            "description": "Supplements",
            "status": "show",
            "children": [],
            "category_image": [
                {
                    "id": 15,
                    "category_id": 18,
                    "name": "https://backend.kingsmankids.com/uploads/category/2024/02/laravel-4bf2e4076abd681b2484c31ce9f82baf.jpeg",
                    "original_name": "171.jpeg"
                }
            ]
        }
    ]
    const { t } = useTranslation();
    const {
        checked,
        register,
        onSubmit,
        handleSubmit,
        errors,
        imageUrl,
        setImageUrl,
        published,
        setPublished,
        setChecked,
        selectCategoryName,
        setSelectCategoryName,
        handleSelectLanguage,
        isSubmitting,
    } = useCategorySubmit(id, data);

    console.log("image=======>", imageUrl);

    const STYLE = `
      .rc-tree-child-tree {
        display: hidden;
      }
      .node-motion {
        transition: all .3s;
        overflow-y: hidden;
      }
    `;

    const motion = {
        motionName: "node-motion",
        motionAppear: false,
        onAppearStart: (node) => {
            return { height: 0 };
        },
        onAppearActive: (node) => ({ height: node.scrollHeight }),
        onLeaveStart: (node) => ({ height: node.offsetHeight }),
        onLeaveActive: () => ({ height: 0 }),
    };

    const renderCategories = (categories) => {
        let myCategories = [];
        if (categories) {
            for (let category of categories) {
                myCategories.push({
                    title: category.name,
                    key: category.id,
                    children:
                        category.children?.length > 0 && renderCategories(category.children),
                });
            }
        }
        return myCategories;
    };

    const findObject = (obj, target) => {
        return obj.id === target
            ? obj
            : obj?.children?.reduce(
                (acc, obj) => acc ?? findObject(obj, target),
                undefined
            );
    };

    const findObjectById = (data, targetId) => {
        for (const item of data) {
            if (item.id === targetId) {
                return item;
            }
            if (item.children) {
                const nestedResult = findObjectById(item.children, targetId);
                if (nestedResult) {
                    return nestedResult;
                }
            }
        }
        return null;
    };
    const handleSelect = async (key) => {
        // console.log('key', key, 'id', id);
        if (key === undefined) return;
        if (id) {
            const parentCategoryId = await CategoryServices.getCategoryById(key);

            if (id === key) {
                return notifyError("This can't be select as a parent category!");
            } else if (id === parentCategoryId.parent_id) {
                return notifyError("This can't be select as a parent category!");
            } else {
                if (key === undefined) return;
                setChecked(key);

                const obj = findObjectById(categoriesList, key);;
                const result = findObject(obj, key);

                setSelectCategoryName(result?.name);
            }
        } else {
            if (key === undefined) return;
            setChecked(key);

            const foundObject = findObjectById(categoriesList, key);
            const result = findObject(foundObject, key);

            setSelectCategoryName(result?.name);
        }
    };
    const handleCancel = () => {
        setConfirmOpen(false);
        closeModal();
    };

    return (
        <div className="productsCategoryModal">
            <Modal isOpen={isConfirmOpen} onClose={closeModal} className="productsCategoryModal">
                <ModalBody className="productsCategoryModal text-center custom-modal px-8 pt-6 pb-4">
                    <>
                        <div className="">
                            Add Category
                        </div>
                        <div style={{ marginTop: 15 }}>
                            {/* <div className="col-span-8 sm:col-span-4 grid grid-cols-2 gap-3">

                                <div>
                                    Name
                                </div>
                                <div>
                                    2
                                </div>
                            </div> */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                        <LabelArea label={t("Name")} />
                                        <div className="col-span-8 sm:col-span-4">
                                            <InputArea
                                                register={register}
                                                label="Category title"
                                                name="name"
                                                type="text"
                                                placeholder={t("ParentCategoryPlaceholder")}
                                            />
                                            <Error errorName={errors.name} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                        <LabelArea label={t("Description")} />
                                        <div className="col-span-8 sm:col-span-4">
                                            <TextAreaCom
                                                required
                                                register={register}
                                                label="Description"
                                                name="description"
                                                type="text"
                                                placeholder="Category Description"
                                            />
                                            <Error errorName={errors.description} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                        <LabelArea label={t("ParentCategory")} />
                                        <div className="col-span-8 sm:col-span-4 relative">
                                            <Input
                                                readOnly
                                                {...register(`parent`, {
                                                    required: false,
                                                })}
                                                name="parent"
                                                value={selectCategoryName ? selectCategoryName : ""}
                                                placeholder={t("ParentCategory")}
                                                type="text"
                                                className="border h-12 w-full text-sm focus:outline-none block bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                            />

                                            <div className="draggable-demo capitalize">
                                                <style dangerouslySetInnerHTML={{ __html: STYLE }} />
                                                <Tree
                                                    expandAction="click"
                                                    treeData={renderCategories(categoriesList)}
                                                    selectedKeys={[checked]}
                                                    onSelect={(v) => handleSelect(v[0])}
                                                    motion={motion}
                                                    animation="slide-up"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                        <LabelArea label={t("CategoryIcon")} />
                                        <div className="col-span-8 sm:col-span-4">
                                            <Uploader
                                                imageUrl={imageUrl}
                                                setImageUrl={setImageUrl}
                                                folder="category"
                                                category
                                                id={id ? id : ""}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                        <LabelArea label={t("Published")} />
                                        <div className="col-span-8 sm:col-span-4">
                                            <SwitchToggle
                                                handleProcess={setPublished}
                                                processOption={published}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <DrawerButton id={id} title="Category" isSubmitting={isSubmitting} /> */}
                            </form>
                        </div>
          
                    </>

                </ModalBody>

                <ModalFooter className="justify-center">
                    <Button
                        className="w-full sm:w-auto hover:bg-white hover:border-gray-50"
                        layout="outline"
                        onClick={handleCancel}
                    >
                        {t("modalKeepBtn")}
                    </Button>

                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CategoryModal;
