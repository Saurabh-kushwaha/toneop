import React, { useState, useEffect } from "react";
import Twisted_Greek_Salad_Bowl from '../asset/Twisted-Greek-Salad-Bowl.png';
import ceaser_salad_veg from '../asset/ceaser_salad_veg_.png';
import GLOW_FIT_SALAD_BOWL from '../asset/GLOW_FIT_SALAD_BOWL.png';
import Chicken_Protein_Power_Bowl_1 from '../asset/Chicken_Protein_Power_Bowl_1-removebg-preview.webp';
import Caesar_Salad_Bowl_With_Cajun_Chicken from '../asset/Caesar_Salad_Bowl_With_Cajun_Chicken.png';
import Grilled_Chicken_Chilli_Paprika from '../asset/Grilled_Chicken_Chilli_Paprika.png';
import Grilled_Chicken_Malai_Sauce from '../asset/Grilled_Chicken_Malai_Sauce.png';
import Grilled_Chicken_With_Creamy_Mushroom_Sauce from '../asset/Grilled_Chicken_With_Creamy_Mushroom_Sauce.png';
import GRILLED_FISH_IN_CREAMY_MUSHROOM_SAUCE from '../asset/GRILLED_FISH_IN_CREAMY_MUSHROOM_SAUCE_ (1).png';
import Testimonial from "./Testimonial";

const Slider = () => {
    const imagesArray1 = [
        Twisted_Greek_Salad_Bowl,
        ceaser_salad_veg,
        GLOW_FIT_SALAD_BOWL,
        Chicken_Protein_Power_Bowl_1,
        Caesar_Salad_Bowl_With_Cajun_Chicken
    ];

    const imagesArray2 = [
        Grilled_Chicken_Chilli_Paprika,
        Grilled_Chicken_With_Creamy_Mushroom_Sauce,
        Grilled_Chicken_Malai_Sauce,
        GRILLED_FISH_IN_CREAMY_MUSHROOM_SAUCE,
        Grilled_Chicken_With_Creamy_Mushroom_Sauce
    ];

    const [activeArray, setActiveArray] = useState(imagesArray1);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === activeArray.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [activeArray.length]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveArray(activeArray === imagesArray1 ? imagesArray2 : imagesArray1);
            setActiveIndex(0);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [activeArray]);

    return (
        <>
        <div className="flex flex-wrap justify-center items-center mt-20 meal-slider-bg">
            <h2 className="text-4xl font-bold py-14">
                <span>Our</span> <span className="text-lime-500">Menu</span>
            </h2>
            <div className={`relative w-full h-80 overflow-hidden`}>
                <div
                    className="w-full h-full md:flex lg:flex xl:flex"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {activeArray.map((image, index) => (
                        <div key={index} className="w-full h-full flex justify-center">
                            <img
                                src={image}
                                alt={`ImageAlt ${index + 1}`}
                                className="w-60 h-64 md:w-40 md:h-40 lg:w-60 lg:h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <Testimonial/>
        </>
    );
};

export default Slider;



