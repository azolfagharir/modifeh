import React, { useState, useRef } from "react";
import Form from "./MyForm";
import TaskManagment from "/src/pages/TaskManagment.jsx";
const Section = (props) => {
  const modalRef = useRef(null);
let sectionQuantity = 0;
  const handleToggleModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.toggle("hidden");
      setShowCreateButton((prevState) => !prevState);
    }
  };

  const [showInput, setShowInput] = useState(false);
  const [hellodescription, sethelloDescription] = useState("");
  const [helloTitle, sethelloTitle] = useState("");
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([
  ]);
  const [showCreateButton, setShowCreateButton] = useState(false);

  const toggleInput = () => {
    setShowInput((prevState) => !prevState);
  };

  const handleChangeDescription = (event) => {
    sethelloDescription(event.target.value);
  };

  const handleChangeTitle = (event) => {
    sethelloTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems((prevTitles) => [
      ...prevTitles,
      { title: helloTitle, index: sectionQuantity++ },
    ]);
    setItems2((prevDescription) => [
      ...prevDescription,
      { discription: hellodescription, index: sectionQuantity++ },
    ]);
    sethelloDescription("");
    sethelloTitle("");
    setShowInput(false);
    handleToggleModal(); 
    setShowCreateButton((prevState) => !prevState);
  };

  const close = () => {
    setShowCreateButton((prevState) => !prevState);
  };

  return (
    <>
    <div>

      </div>
        <div className="z-4 left-96 p-32">
          <h1 className="text-lg">{props.title}</h1>
            {items.map((myTitle, index) => (
          <div className="p-0 w-full text-6xl">
              <div className="text-center" key={index}>
                <h3 className="inline-block border rounded-lg shadow-lg bg-blue-400 text-white">{myTitle.title}</h3>
        </div>
        {items2.map((myDescription, index) => (
              <div className="text-center" key={index}>
            <p className="text-xl">{myDescription.discription}</p>
        </div>
            ))}
    </div>

))}

     
        <button
          onClick={handleToggleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Create Issue
        </button>
      </div>
      <div
        ref={modalRef}
        className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          showCreateButton ? "" : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button
                onClick={handleToggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5" >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    title
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                    value={helloTitle}
                    onChange={handleChangeTitle}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <div>
                    <div>
                      <label
                        htmlFor="options"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Choose an option:
                      </label>
                      <select
                        id="options"
                        name="options"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                      >
                        {props.tasks.map((task) => (
                          <option key={task.index}>{task.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product description"
                    required
                    value={hellodescription}
                    onChange={handleChangeDescription}
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
              <button
                onClick={close}
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;