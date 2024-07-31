import React, { useState, useEffect } from 'react';
import './Adoption.css';
import { useNavigate } from 'react-router-dom';

const animals = [
    { name: 'Animal 1', img: 'https://media.istockphoto.com/id/479513144/photo/baby-african-elephant-calf.jpg?s=612x612&w=0&k=20&c=nGGORGNW1x_U069DIrIm62xK3bvw9HUEm335_eNWIV4=', detailsPage: '/details/animal1' },
    { name: 'Animal 2', img: 'https://media.istockphoto.com/id/1358464345/photo/mare-and-foal.jpg?s=612x612&w=0&k=20&c=K_yKzFMHEWckTpYN-LJMo7jUDdNR5Gndk5ZYSaXnTwI=', detailsPage: '/details/animal2' },
    { name: 'Animal 3', img: 'https://media.istockphoto.com/id/170118176/photo/bengal-tiger-in-bandhavgarh-np-india.jpg?s=612x612&w=0&k=20&c=7NqdHroGt5wBLfyKAJ_gIvbaLjJzNMtSz6jkZZdEsAo=', detailsPage: '/details/animal3' },
    { name: 'Animal 4', img: 'https://media.istockphoto.com/id/157375891/photo/scarlet-macaws.jpg?s=612x612&w=0&k=20&c=rrvMxRyLm77jcnmnrGtdOpw0PTxo8mkNOUA_hO3RO1g=', detailsPage: '/details/animal4' },
    { name: 'Animal 5', img: 'https://media.istockphoto.com/id/155125520/photo/two-great-pandas-playing-together-chengdu-sichuan-province-china.jpg?s=612x612&w=0&k=20&c=uDgsyyMezi7SykhkW6NKgNURslHhlAiULeRMdogvoys=', detailsPage: '/details/animal5' },
    { name: 'Animal 5', img: 'https://media.istockphoto.com/id/173312739/photo/this-playful-red-panda-come-in-for-closer-look.jpg?s=612x612&w=0&k=20&c=un9qEdDNVLHpLnGnXhfh9wTyHUN_F-RZtD7KB2zylCc=', detailsPage: '/details/animal5' },
    
    // Add more animals as needed
];

const Adoption = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animals.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const navigateToDetails = (page) => {
        navigate(page);
    };

    return (
        <div className="container">
            <h1>Animal Adoption</h1>
            <div className="carousel">
                {animals.map((animal, index) => (
                    <div
                        key={index}
                        className="image-card"
                        style={{
                            opacity: currentImageIndex === index ? 1 : 0,
                            zIndex: currentImageIndex === index ? 1 : 0,
                        }}
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
