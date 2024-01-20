import React from "react";
import { Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Doritos from "./Doritos";
import Sprite from "./Sprite";
import Snickers from "./Snickers";


function RouteList() {
    return (
        <Routes>
            <Route path="/doritos" element={<Doritos />} />

            <Route path="/sprite" element={<Sprite />} />

            <Route path="/snickers" element={<Snickers />} />

            <Route path="/" element={<VendingMachine />} />
        </Routes>
    );
}


export default RouteList;