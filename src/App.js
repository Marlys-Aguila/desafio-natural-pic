import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Context from "./Context";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Navbar from "./components/Navbar";

import "./styles.css";

export default function App() {
    const [fotos, setFotos] = useState([]);

    const endpoint = "/fotos.json";

    const getfotos = async () => {
        const res = await fetch(endpoint);
        let { photos } = await res.json();

        photos = photos.map((photo) => ({
            id: photo.id,
            src: photo.src.tiny,
            desc: photo.alt,
            favorito: false,
        }));

        setFotos(photos);
    };

    useEffect(() => {
        getfotos();
    }, []);

    return (
        <div className='App'>
            <Context.Provider value={{ fotos, setFotos }}>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/favoritos' element={<Favoritos />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}
