import React, { useState } from 'react';
import CreateButton from './CreateButton';
import Form from './MyForm';
const mysection = ['inporgress', ' to do'];
import TaskManagment from '/src/pages/TaskManagment.jsx';
const Section = (props) => {
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
    <>
      <div className=' z-4 left-96 p-32'>
        <h1 className='text-lg '>{props.title}</h1>
        <CreateButton />
      </div>
    </>
  ) 
};

export default Section;
