import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, removeItem } from "../../redux/slices/todo";
import { TodoItem } from "./item";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addTodo = (data) => {
    dispatch(
      addItem({
        id: todo?.data?.length + 1,
        title: data.title,
        phones: [],
      })
    );
    reset({
      title: "",
    });
  };

  const removeTodo = (id) => {
    dispatch(removeItem(id));
  };

  const editTodo = (data) => {
    dispatch(editItem(data));
  };

  return (
    <div className="todo">
      <div className="container">
        <div className="todo_inner">
          <div className="todo_search">
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Имя работника"
            />
            <button className="todo_addbtn" onClick={handleSubmit(addTodo)}>
              Добавить
            </button>
          </div>
          <div className="todo_list">
            {todo?.data?.map((item) => (
              <div key={item?.id}>
                <TodoItem
                  item={item}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                />
              </div>
            ))}
            {todo?.data?.length === 0 && (
              <div className="todo_free">Пока нет задач!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
