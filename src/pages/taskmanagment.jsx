
import LeftSide from "../components/leftSide";
import PathConstants from '/src/router/pathconstants.jsx'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Section from "../components/Sections";
//import CreateButton from "../components/CreateButton";

function TaskManagment(){
    const [showInputOfAddSection, setshowInputOfAddSection] = useState(false);
    const [inputOfAddSectionValue, setinputOfAddSectionValue] = useState('');
    
   let sectionQuantity = 1;
    const [titlesArray, setTitlesArray] = useState([
        { title: "inprogress", index:sectionQuantity++},
      { title: "to do", index:sectionQuantity++}, // Assuming you want to increment by 4 for each title
      { title: "done", index:sectionQuantity++}, // Incrementing by 4 for each title
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
            { title: inputOfAddSectionValue, index:sectionQuantity++ }
          ]);
        setshowInputOfAddSection(false);
        setinputOfAddSectionValue('');

    }
    return(
        <>
            <LeftSide />    
            <div>
                <Link className="absolute top-20 left-80 text-gray-500" to={PathConstants.HOME}>Home&gt;</Link>

                    <Link className="absolute top-20 left-96 text-gray-500" to={PathConstants.TaskManagment}>TaskManagment&gt;</Link>
                </div>
                <Link className="absolute top-28 left-80 text-black" to={PathConstants.HOME}><h1>Modifeh</h1></Link>

                <div className="flex flex-wrap ml-48">
                {titlesArray.map((titleObj, index) => (
        <div key={index} className="w-1/4 flex-shrink-0">
          <Section key={index} className="p-2 flex-grow" title={titleObj.title} />
         {/*<CreateButton key2={index} />
          <button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id={titleObj.title} type='submit' >{titleObj.title}</button>
 */} 
        </div>
      ))}

            </div>
            <div className="flex justify-end mt-0 ">
                  <button onClick={handleToggle} className="text-xl ">+</button>
              
            </div>
            {showInputOfAddSection && (
        <div className = "flex justify-end ">
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