import React from "react";

const Button = ({ category: { id, categoryName, isActive }, changeActive }) => {
  const cateBtnHandler = () => {
    changeActive(id);
  };
  return (
    <button
      onClick={cateBtnHandler}
      type="button"
      className={` active:scale-95 transition-all duration-400 text-gray-900 ${
        isActive ? "bg-black  text-white" : ""
      } flex-grow text-nowrap  border border-gray-900 focus:outline-none  focus:ring-1 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
    >
      {categoryName}
    </button>
  );
};

export default Button;
