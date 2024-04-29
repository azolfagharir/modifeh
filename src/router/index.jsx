import React from "react"
import PathConstants from "./pathconstants"

const Home = React.lazy(() => import("../pages/Home"))
const Contacts = React.lazy(() => import("../pages/Contacts"))
//const Portfolio = React.lazy(() => import("../pages/inbox"))
const Inbox = React.lazy(() => import("../pages/inbox"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.contacts, element: <Contacts /> },
    //{ path: PathConstants.PORTFOLIO, element: <Portfolio /> },
    { path: PathConstants.Inbox, element: <Inbox /> },
]
export default routes
