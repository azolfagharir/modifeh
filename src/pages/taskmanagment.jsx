
import LeftSide from "../components/leftSide";
import PathConstants from '/src/router/pathconstants.jsx'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Section from "../components/Sections";

function TaskManagment(){
    const [showInput, setShowInput] = useState(false);
    const [description, setDescription] = useState('');  
    const [title, setTitle] = useState('');  
    const [submittedDecription, setSubmittedDecription] = useState('');
    const [submittedTitle, setSubmittedTitle] = useState('');
    const [items, setItems] = useState([]);
  
    const toggleInput = () => {
      setShowInput(prevState => !prevState);
    };
  
    const handleChange = (event) => {
        setDescription(event.target.value);
    };
    const handleChange_2 = (event) =>{
        setTitle(event.target.value);
    }
    const creatButton = ()=>{
        setShowInput(false);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmittedDecription(description);
      setSubmittedTitle(title);
      setItems(prevItems => [...prevItems, { title, description }]);
      setDescription('');
      setTitle('');
      setShowInput(false);
      // No need to hide the input here, as it's toggled when the button is clicked
    };
    const titlesArray = [
      { title: " "},
      { title: "inprogress"},
      { title: "to do"}, // Assuming you want to increment by 4 for each title
      { title: "done"}, // Incrementing by 4 for each title
    ];
    return(
        <>
            <LeftSide />    
            <div>
                <Link className="absolute top-20 left-80 text-gray-500" to={PathConstants.HOME}>Home&gt;</Link>

                    <Link className="absolute top-20 left-96 text-gray-500" to={PathConstants.TaskManagment}>TaskManagment&gt;</Link>
                </div>
                <Link className="absolute top-28 left-80 text-black" to={PathConstants.HOME}><h1>Modifeh</h1></Link>

                <div className="flex ">
                {titlesArray.map((titleObj, index) => (
                    <Section key={index} className='p-2' title={titleObj.title} left_side={titleObj.left} />
                ))}
            </div>
        </>
    )
}

export default TaskManagment;