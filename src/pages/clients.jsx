
import LeftSide from "../components/leftSide";
import PathConstants from '/src/router/pathconstants.jsx'
import { Link } from "react-router-dom";
function Clients(){
    return(
        <>
            <LeftSide />
            <div>
            <Link className="absolute top-20 left-80 text-gray-500" to={PathConstants.HOME}>Home&gt;</Link>

                <Link className="absolute top-20 left-96 text-gray-500" to={PathConstants.Clients}>Clients&gt;</Link>
            </div>
        </>
    )
}

export default Clients;