import React from "react"
import PathConstants from "./pathconstants"

const Home = React.lazy(() => import("../pages/Home"))
const Contacts = React.lazy(() => import("../pages/Contacts"))
const Clients = React.lazy(() => import("../pages/Clients"))
const Inbox = React.lazy(() => import("../pages/Inbox"))
const TaskManagment = React.lazy(() => import("../pages/TaskManagment"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.Contacts, element: <Contacts /> },
    { path: PathConstants.Clients, element: <Clients /> },
    { path: PathConstants.Inbox, element: <Inbox /> },
    { path: PathConstants.TaskManagment, element: <TaskManagment /> },
]
export default routes
