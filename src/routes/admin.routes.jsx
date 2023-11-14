import { Routes, Route } from "react-router-dom"

import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { DeviceMenu } from "../pages/DeviceMenu"
import { NewPlate } from "../pages/NewPlate"
import { EditPlate } from "../pages/EditPlate"


export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/menu" element={<DeviceMenu />} />
            <Route path="/new" element={<NewPlate />} />
            <Route path="/edit/:id" element={<EditPlate />} />
        </Routes>
    )
}