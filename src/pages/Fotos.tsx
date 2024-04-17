import React, {useState, useEffect} from 'react'
import Menu from "./Menu"

interface Photo{
    title: String;
    thumbnailUrl: String
}

const Fotos: React.FC = () => {
    const[photos, setPhotos] = useState<Photo[]>([]);
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos'

    useEffect(() => {
        const fetchPhotos = async() => {
            try{
                const response = await fetch(apiUrl);
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPhotos(data);
            } catch(error) {
                console.error("Não foi possível buscar as fotos: ", error);
            }
        }
        fetchPhotos();
    }, []);
    return (
        <div>
            <header className='bg-gray-900 py-4 fixed top-0 w-full'>
                <h1 className='h-3 text-center text-4xl font-bold text-gray-300 mb-8'>Fotos</h1>
                <Menu />
            </header>
            <div className='mt-10 flex flex-wrap justify-center'>
                {photos.map((photo) => (
                    <div key={photo.title} className="m-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                        <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-auto rounded-t-lg" />
                        <div className="p-4">
                            <p className="text-gray-800 font-bold">{photo.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fotos