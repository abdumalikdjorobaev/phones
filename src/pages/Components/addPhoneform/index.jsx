import React from "react";

import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form"
import { addItemPhone } from "../../../redux/slices/todo";


export const AddPhoneForm = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const { profileTodo } = useSelector((state) => state);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        dispatch(addItemPhone({ id: location.state?.todo?.id, phone: data }));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='phonesForm' style={{ display: "flex", justifyContent: "space-between", alignItems: "top", gap: "20px" }}>
                <div style={{ width: '100%' }}>
                    <input {...register("phone", { required: true })} placeholder="Телефон" />
                    {errors?.phone && <span className="error">Заполните поле</span>}
                </div>

                <div style={{ width: '100%' }}>
                    <input {...register("date", { required: true })} placeholder="Дата" />
                    {errors?.date && <span className="error">Заполните поле</span>}
                </div>

                <div style={{ width: '100%' }}>
                    <input {...register("price", { required: true })} placeholder="Цена" />
                    {errors?.price && <span className="error">Заполните поле</span>}
                </div>

                {/* <div>
                    <input {...register("title", { required: true })} placeholder="Название" />
                    {errors?.title && <span className="error">Заполните поле</span>}
                </div>

                <div>
                    <input {...register("text", { required: true })} placeholder="Описание" />
                    {errors?.text && <span className="error">Заполните поле</span>}
                </div> */}

                <div>
                    <input placeholder="Добавить телефон" type="submit" style={{ backgroundColor: "#83c251", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }} />
                </div>
            </div>


        </form>
    );
};
