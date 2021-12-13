import React from "react"
import Main from "./pages/Main/index"
type routerType = {
    path: string,
    element: React.FC,

}

const router:Array<routerType> = [
    {
        path: '/',
        element: Main
    }
]

export default router