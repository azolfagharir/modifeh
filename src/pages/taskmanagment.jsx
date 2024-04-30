
import LeftSide from "../components/leftSide";
import PathConstants from '/src/router/pathconstants.jsx'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Inprogress from "../components/Inprogress";

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
    return(
        <>
            <LeftSide />
            <div>
            <Link className="absolute top-20 left-80 text-gray-500" to={PathConstants.HOME}>Home&gt;</Link>

                <Link className="absolute top-20 left-96 text-gray-500" to={PathConstants.TaskManagment}>TaskManagment&gt;</Link>
            </div>
            <Link className="absolute top-28 left-80 text-black" to={PathConstants.HOME}><h1>Modifeh</h1></Link>
{/*section one*/}
            <div className="absolute top-48 h-full w-60 bg-gray-100 left-80">
                    <h2 className="text-2xl mt-2 ml-4">to do</h2>
                    <div className="absolute left-52 top-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#67CB65" stroke="#67CB65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 8V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
            </div>




{/*section two*/}
        <Inprogress />
{/*section three*/}

            <div className="absolute top-48 h-full w-60 bg-gray-100 right-96 ml-80">
                    <h2 className="text-2xl mt-2 ml-4">Done</h2>
                    <div className="absolute left-52 top-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#67CB65" stroke="#67CB65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 8V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
    
             </div>
            </div>

            <h2 className="absolute right-4 top-52">Add</h2>
        </>
    )
}

export default TaskManagment;