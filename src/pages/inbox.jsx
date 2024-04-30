
import LeftSide from "../components/leftSide";
import { Link } from "react-router-dom";
import PathConstants from '/src/router/pathconstants.jsx';

function Inbox(){
    return(
        <>
                <LeftSide />
                <div>
            <Link className="absolute top-20 left-80 text-gray-500" to={PathConstants.HOME}>Home&gt;</Link>

                <Link className="absolute top-20 left-96 text-gray-500" to={PathConstants.Inbox}>Inbox&gt;</Link>
            </div>
        </>
    )
}

export default Inbox;