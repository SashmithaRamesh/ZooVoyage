import React, { useState, useEffect } from 'react';
import './Adoption.css';
import { useNavigate } from 'react-router-dom';

const animals = [
    { name: 'Animal 1', img: 'https://media.istockphoto.com/id/157375891/photo/scarlet-macaws.jpg?s=612x612&w=0&k=20&c=rrvMxRyLm77jcnmnrGtdOpw0PTxo8mkNOUA_hO3RO1g=', detailsPage: '/details/animal1' },
    { name: 'Animal 2', img: 'https://media.istockphoto.com/id/487672202/photo/horse-in-horse-ranch.jpg?s=612x612&w=0&k=20&c=ph0nQqx7E3W60brN7lk22iQzHkhTd13xVhG8DymqqW8=', detailsPage: '/details/animal2' },
    { name: 'Animal 3', img: 'https://media.istockphoto.com/id/1426001836/photo/little-brown-rabbit-or-bunny-in-lying-on-a-green-grass.jpg?s=612x612&w=0&k=20&c=Y6bw7lahaxbGreALHWRpcIRvwf3qwohcR8VRvRm8xE4=', detailsPage: '/details/animal3' },
    { name: 'Animal 4', img: 'https://media.istockphoto.com/id/1615662746/photo/monkeys-at-forest-in-zhangjiajie-china.jpg?s=612x612&w=0&k=20&c=SgbXSTFma_kWfh33GX-Zc9NBV-wG4R8OGk6ABc73pGA=', detailsPage: '/details/animal4' },
    { name: 'Animal 5', img: 'https://media.istockphoto.com/id/1568510118/photo/two-elephants.jpg?s=612x612&w=0&k=20&c=UkYw5aI_s8LYXXxdpbem53FKHnrDidxtqoHqS9cocRM=', detailsPage: '/details/animal5' },
    { name: 'Animal 6', img: 'https://media.istockphoto.com/id/1161355738/photo/a-peacock-sitting-on-a-tree-branch.jpg?s=612x612&w=0&k=20&c=vTEF0n4LXPpP5UgGPIUpHGWgyXPAYWeKXBOA24C2D2E=', detailsPage: '/details/animal6' },
];

const Adoption = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [exitingIndex, setExitingIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setExitingIndex(currentImageIndex);
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animals.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const navigateToDetails = (page) => {
        navigate(page);
    };

    return (
        <div className="container-adopt">
            <br></br>
            <h4 className='adopt'>ANIMAL&nbsp; ADOPTION</h4>
            <div className="carousel-adopt">
                {animals.map((animal, index) => (
                    <div
                        key={index}
                        className={`image-card-adopt ${index === currentImageIndex ? 'active' : ''} ${index === exitingIndex ? 'exiting' : ''}`}
                    >
                        <img src={animal.img} alt={animal.name} />
                        <div className="buttons">
                            <button
                                className="view-button"
                                onClick={() => navigateToDetails(animal.detailsPage)}
                            >
                                View Details
                            </button>
                            <button
                                className="adopt-button"
                                onClick={() => navigateToDetails(animal.detailsPage)}
                            >
                                Adopt Me
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Adoption;
