import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
    const { fotos } = useContext(Context);
    const numFavoritos = fotos.filter((foto) => foto.favorito).length;

    return (
        <>
            <h1>Fotos favoritas</h1>
            <div className='grid-columns-4'>
                {numFavoritos === 0 ? (
                    <p>No hay fotos favoritas</p>
                ) : (
                    fotos
                        .filter((foto) => foto.favorito)
                        .map((foto, index) => (
                            <img
                                src={foto.src}
                                alt={foto.desc}
                                key={index}
                                className='img-padding'
                            />
                        ))
                )}
            </div>
        </>
    );
}
