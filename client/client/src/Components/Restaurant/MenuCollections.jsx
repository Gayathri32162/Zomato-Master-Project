import React,{useState} from 'react';
import ImageViewer from "react-simple-image-viewer";

function MenuCollections(props) {

    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [ currentImage,setCurrentImage] = useState(0);
    const closeViewer = () => {
        setIsMenuOpen(false)
    };
    const openViewer = () => {
        setIsMenuOpen(true)
    };

    return (
        <>
            {isMenuOpen && (
            <ImageViewer
            src={props.image}
            currentIndex={currentImage}
            onClose={closeViewer}
            />
            )}
            <div className="w-32 h-32 md:w-48 flex flex-col md:h-48">
                <img src={props.image[0]} 
                alt="menu" 
                className="w-full transform transition duration-400 rounded-lg hover:scale-11"/>
            </div> 
        </>
    )
}

export default MenuCollections;
