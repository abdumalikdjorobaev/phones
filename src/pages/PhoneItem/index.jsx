import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export const PhoneItem = ({ item, removeTodo, editTodo }) => {
    const [editing, setEditing] = useState(false);


    

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const edit = (data) => {
        if (editing) {
            editTodo({
                id: item?.id,
                title: data?.title,
            });
            setEditing(false);
        } else {
            setEditing(true);
        }
    };

    return (
        <div className="todo_item">

            <div style={{ width: '100%' }}>
                <div>

                </div>
                <div className='phones'>
                    <div className='phone'>{item?.phone || 'No Phone'}</div>
                    <div className='phone'>{item?.date || 'No Date'}</div>
                    <div className='phone'>{item?.price || 'No Price'}</div>
                    {/* <div className='phone'>{item?.title ? item.title : 'No Title'}</div> */}
                    {/* <div className='phone'>{item?.text || 'No Text'}</div> */}

                </div>
            </div>
            {/* <div className="todo_btns">
        <button className="todo_removebtn" onClick={() => removeTodo(item.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.7708 2.70837H3.22917C2.36654 2.70837 1.66667 3.40824 1.66667 4.27087V15.7292C1.66667 16.5918 2.36654 17.2917 3.22917 17.2917H16.7708C17.6335 17.2917 18.3333 16.5918 18.3333 15.7292V4.27087C18.3333 3.40824 17.6335 2.70837 16.7708 2.70837ZM16.7708 15.5339C16.7708 15.6413 16.6829 15.7292 16.5755 15.7292H3.42448C3.31706 15.7292 3.22917 15.6413 3.22917 15.5339V4.46619C3.22917 4.35876 3.31706 4.27087 3.42448 4.27087H16.5755C16.6829 4.27087 16.7708 4.35876 16.7708 4.46619V15.5339ZM13.2715 8.00134L11.2728 10L13.2715 11.9987C13.4212 12.1485 13.4212 12.3926 13.2715 12.5456L12.5456 13.2715C12.3958 13.4213 12.1517 13.4213 11.9987 13.2715L10 11.2728L8.00131 13.2715C7.85157 13.4213 7.60743 13.4213 7.45443 13.2715L6.72852 12.5456C6.57878 12.3959 6.57878 12.1517 6.72852 11.9987L8.72722 10L6.72852 8.00134C6.57878 7.8516 6.57878 7.60746 6.72852 7.45447L7.45443 6.72856C7.60417 6.57882 7.84831 6.57882 8.00131 6.72856L10 8.72725L11.9987 6.72856C12.1484 6.57882 12.3926 6.57882 12.5456 6.72856L13.2715 7.45447C13.4245 7.60421 13.4245 7.84835 13.2715 8.00134Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="todo_editbtn" onClick={handleSubmit(edit)}>
          {editing ? (
            "OK"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3075 12.5734L14.2335 11.6475C14.3782 11.5028 14.6299 11.6041 14.6299 11.8124V16.0197C14.6299 16.7865 14.0078 17.4086 13.241 17.4086H3.05559C2.28879 17.4086 1.66667 16.7865 1.66667 16.0197V5.83429C1.66667 5.06749 2.28879 4.44537 3.05559 4.44537H10.9695C11.175 4.44537 11.2791 4.69422 11.1345 4.84179L10.2085 5.76774C10.1651 5.81114 10.1072 5.83429 10.0436 5.83429H3.05559V16.0197H13.241V12.7355C13.241 12.6747 13.2641 12.6168 13.3075 12.5734ZM17.8389 6.73419L10.2404 14.3327L7.62456 14.6221C6.86644 14.706 6.22117 14.0665 6.30508 13.3026L6.59444 10.6868L14.193 3.08828C14.8556 2.42565 15.9262 2.42565 16.586 3.08828L17.836 4.33831C18.4986 5.00094 18.4986 6.07446 17.8389 6.73419ZM14.98 7.62831L13.2989 5.94714L7.92259 11.3263L7.71136 13.2158L9.60087 13.0046L14.98 7.62831ZM16.8551 5.32213L15.6051 4.0721C15.4864 3.95346 15.2925 3.95346 15.1768 4.0721L14.2827 4.96622L15.9639 6.64739L16.858 5.75327C16.9737 5.63174 16.9737 5.44076 16.8551 5.32213Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div> */}
        </div>
    );
};
