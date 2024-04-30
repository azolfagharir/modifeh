import React, { useState } from 'react';

const Inprogress = () => {
  const [showInput, setShowInput] = useState(false);
  const [description, setDescription] = useState('');  
  const [title, setTitle] = useState('');  
  const [items, setItems] = useState([]);

  const toggleInput = () => {
    setShowInput(prevState => !prevState);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems(prevItems => [...prevItems, { title, description }]);
    setDescription('');
    setTitle('');
    setShowInput(false);
  };

  return (
    <div className="absolute top-48 h-full w-60 bg-gray-100 left-72 ml-80">
      <h2 className="text-2xl mt-2 ml-4">In progress</h2>
      <button onClick={toggleInput} className="absolute left-48 top-4 w-6 h-12 ">
        <svg className="left-2 top-3 absolute" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#67CB65" stroke="#67CB65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Input form */}
      {showInput && (
        <form onSubmit={handleSubmit} className="absolute top-12 left-2">
          <input
            className="w-52 h-20 text-center"
            type="text"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Enter title"
          />
          <input
            className="w-52 h-20 text-center"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Enter description"
          />
          <button className="ml-52" type="submit">Create</button>
        </form>
      )}

      {/* Display submitted items */}
      {items.length > 0 && (
        <div className="mt-12 text-center">
          {items.map((item, index) => (
            <div key={index}>
              <h2 className="text-blue-600 text-4xl ">{item.title}</h2>
              <p className="text-black text-2xl ">{item.description}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inprogress;
