import { Link } from "react-router-dom";
import PathConstants from '/src/router/pathconstants.jsx'

function LeftSide(){
    return(
        <>

            <img className="absolute w-32 top-14 left-8" src="logo.png" alt="modifeh" />

            <div>
            <Link className="absolute left-16 top-48" to={PathConstants.Clients}>Clients</Link>
            <Link className="absolute left-16 top-56" to={PathConstants.Contacts}>Contacts</Link>
            <Link className="absolute left-16 top-64" to={PathConstants.Inbox}>inbox</Link>
            <Link className="absolute left-16 top-72 " to={PathConstants.TaskManagment}>TaskManagment</Link>
            </div>
        </>
    )
}

export default LeftSide;