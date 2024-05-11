
import LeftSide from "../components/leftSide";
import PathConstants from '/src/router/pathconstants.jsx'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Section from "../components/Sections";

function TaskManagment(){
    const [showInputOfAddSection, setshowInputOfAddSection] = useState(false);
    const [inputOfAddSectionValue, setinputOfAddSectionValue] = useState('');
    
   
    const [titlesArray, setTitlesArray] = useState([
        { title: "inprogress"},
      { title: "to do"}, // Assuming you want to increment by 4 for each title
      { title: "done"}, // Incrementing by 4 for each title
    ]);
    const handleToggle = () =>{
        setshowInputOfAddSection(prevState => !prevState);

    }
    const handleInputOfsecChange = (event) =>{
            setinputOfAddSectionValue(event.target.value);
    }
    const handleSaveOfAddSectionCancel =()=>{
        setshowInputOfAddSection(false);
    }
    const handleSaveOfAddSectionSave =()=>{
        setTitlesArray(prevTitles => [
            ...prevTitles,
            { title: inputOfAddSectionValue }
          ]);
        setshowInputOfAddSection(false);
    }
    return(
        <>
            <LeftSide />    
            <div>
                <Link className="absolute top-20 left-80 text-gray-500" to={PathConstants.HOME}>Home&gt;</Link>

                    <Link className="absolute top-20 left-96 text-gray-500" to={PathConstants.TaskManagment}>TaskManagment&gt;</Link>
                </div>
                <Link className="absolute top-28 left-80 text-black" to={PathConstants.HOME}><h1>Modifeh</h1></Link>

                <div className="flex ml-48">
                {titlesArray.map((titleObj, index) => (
                    <Section key={index} className='p-2' title={titleObj.title} left_side={titleObj.left} />
                ))}
            </div>
            <div className="flex justify-end mt-0">
                  <button onClick={handleToggle} className="text-xl">+</button>
              
            </div>
            {showInputOfAddSection && (
        <div className="flex justify-end">
          <input
            type="text"
            value={inputOfAddSectionValue}
            onChange={handleInputOfsecChange}
            placeholder="Enter text"
          />
          <button onClick={handleSaveOfAddSectionSave}>Save ✅</button>
          <button onClick={handleSaveOfAddSectionCancel}>Cancel ❌</button>
        </div>
      )}
        </>
    )
}

export default TaskManagment;