import { Link } from "react-router-dom";
import PathConstants from '/src/router/pathconstants.jsx'

function LeftSide(){
    return(
        <>
        <div className="absolute bg-gray-200 top-10 h-full">
            <div className="bg-gray-500	">
               
            </div>
              <img className=" w-32 top-28 mt-10 left-8 mx-20" src="/public/logo.png" alt="modifeh" />

            <div>
            <br />
            <br />
            <Link className="  mx-20  text-black" to={PathConstants.Clients}>Clients</Link>
            <br />
            <Link className="absolute  mx-20 mt-8 text-black" to={PathConstants.Contacts}>Contacts</Link>
            <br />
            <Link className="absolute  mx-20 mt-16 text-black" to={PathConstants.Inbox}>inbox</Link>
            <br />
            <Link className="absolute  mx-20 mt-24 text-black" to={PathConstants.TaskManagment}>TaskManagment</Link>
            </div>
        </div>
          
        </>
    )
}

export default LeftSide;