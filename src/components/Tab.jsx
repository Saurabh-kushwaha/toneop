import React, { useState } from 'react';
import Twisted_Greek_Salad_Bowl from '../asset/Twisted-Greek-Salad-Bowl.png';
import ceaser_salad_veg from '../asset/ceaser_salad_veg_.png';
import GLOW_FIT_SALAD_BOWL from '../asset/GLOW_FIT_SALAD_BOWL.png';
import Chicken_Protein_Power_Bowl_1 from '../asset/Chicken_Protein_Power_Bowl_1-removebg-preview.webp';
import Caesar_Salad_Bowl_With_Cajun_Chicken from '../asset/Caesar_Salad_Bowl_With_Cajun_Chicken.png';
import Chicken__Quinoa_Salad_Bowl from '../asset/Chicken__Quinoa_Salad_Bowl.png';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('veg');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    let veg = [
        {
            img: Twisted_Greek_Salad_Bowl,
            title: "Twisted Greek Salad Bowl",
            discription: "A nutritious salad made with Herbed Quinoa, Assorted Lettuce, Chickpeas, Feta Cheese, and Arugula, dressed in Oregano Lime Vinaigrette and topped with Olives, Roasted Melon Seeds and Walnut Mix.",
            medium: {
                name: "Medium Salad",
                protein: '9g',
                fat: '16g',
                fiber: '5g',
                carbs: '23g',
                calorie: 276
            },
            learge: {
                name: "Large Salad",
                protein: '14g',
                fat: '25g',
                fiber: '8g',
                carbs: '38g',
                calorie: 441
            }
        },
        {
            img: ceaser_salad_veg,
            title: "Caesar Salad Bowl",
            discription: "A healthy bowl of Cajun Paneer, Assorted Lettuce, Spring Mix, Herbed Multigrain Croutons, and Parmesan Cheese with Greek Yoghurt dressing, topped with Roasted Pumpkin and Chia Seeds.",
            medium: {
                name: "Medium Salad",
                protein: '18g',
                fat: '21g',
                fiber: '1g',
                carbs: '15g',
                calorie: 323
            },
            learge: {
                name: "Large Salad",
                protein: '27g',
                fat: '31g',
                fiber: '3g',
                carbs: '29g',
                calorie: 499
            }
        },
        {
            img: GLOW_FIT_SALAD_BOWL,
            title: "Glow Fit Salad Bowl",
            discription: "A flavourful bowl of Assorted Lettuce, Quinoa, Avocado, Chickpeas, Black Raisins, American Corn, Cranberry, Mix Greens, Apple, and Pineapple, drenched in Turmeric Mustard dressing and topped with homemade Super Seeds Mix.",
            medium: {
                name: "Medium Salad",
                protein: '8g',
                fat: '13g',
                fiber: '4g',
                carbs: '43g',
                calorie: 329
            },
            learge: {
                name: "Large Salad",
                protein: '14g',
                fat: '19g',
                fiber: '8g',
                carbs: '67g',
                calorie: 498
            }
        }
    ];

    let nonveg = [
        {
            img: Chicken_Protein_Power_Bowl_1,
            title: "Chicken Protein Power Bowl",
            discription: "A power bowl of Grilled Chicken, Boiled Egg White Chunks, Quinoa, Assorted Lettuce, Bell Peppers, and Gherkins in Low-Fat Honey Mustard dressing, topped with Homemade Super Seeds Mix.",
            medium: {
                name: "Medium Salad",
                protein: '23g',
                fat: '12g',
                fiber: '2g',
                carbs: '14g',
                calorie: 262
            },
            learge: {
                name: "Large Salad",
                protein: '37g',
                fat: '19g',
                fiber: '4g',
                carbs: '26g',
                calorie: 446
            }
        },
        {
            img: Caesar_Salad_Bowl_With_Cajun_Chicken,
            title: "Caesar Salad Bowl With Cajun Chicken",
            discription: "A delicious mix of Grilled Cajun Chicken, Assorted Lettuce, Spring Mix, Herbed Multigrain Croutons, and Parmesan Cheese in Greek Yoghurt Ranch dressing.",
            medium: {
                name: "Medium Salad",
                protein: '20g',
                fat: '13g',
                fiber: '2g',
                carbs: '15g',
                calorie: 256
            },
            learge: {
                name: "Large Salad",
                protein: '36g',
                fat: '23g',
                fiber: '3g',
                carbs: '30g',
                calorie: 463
            }
        },
        {
            img: Chicken__Quinoa_Salad_Bowl,
            title: "Chicken & Quinoa Salad Bowl",
            discription: "A perfect mix of Assorted Lettuce, Quinoa, Grilled Chicken, Boiled Egg Whites, Arugula, Carrot Juliennes, Oven Roasted Beetroot, and Parmesan Cheese, dressed with spicy Chipotle Sauce and topped with roasted Sunflower and Pumpkin Seeds.",
            medium: {
                name: "Medium Salad",
                protein: '23g',
                fat: '18g',
                fiber: '2g',
                carbs: '15g',
                calorie: 315
            },
            learge: {
                name: "Large Salad",
                protein: '39g',
                fat: '27g',
                fiber: '4g',
                carbs: '27g',
                calorie: 499
            }
        }
    ]

    return (
        <div className="border border-red-600">
            <div className="flex border-b border-gray-300">
                <button
                    className={`py-2 px-4 focus:outline-none ${activeTab === 'veg' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => handleTabClick('veg')}
                >
                    Veg
                </button>
                <button
                    className={`py-2 px-4 focus:outline-none ${activeTab === 'nonveg' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => handleTabClick('nonveg')}
                >
                    Non-Veg
                </button>
            </div>
            <div className="mt-4">
                {activeTab === 'veg' && (
                    <div>
                        <h3 className="text-xl font-bold mb-2">Veg Food</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {veg.map((item, index) => (
                                <li key={index} className="border rounded-lg overflow-hidden">
                                    <div className="text-center">
                                        {/* <img
                                            src={item?.img}
                                            alt={item?.title}
                                            className="w-48 mx-auto"
                                        /> */}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold mb-2">{item?.title}</h3>
                                        <p className="mb-4">{item?.description}</p>
                                        <div className="mb-4">
                                            <label className="font-bold">{item?.medium?.name}</label>
                                            <ul className="flex justify-between">
                                                <li>
                                                    <span>{item?.medium?.protein}</span>
                                                    <label>Protein</label>
                                                </li>
                                                <li>
                                                    <span>{item?.medium?.fat}</span>
                                                    <label>Fat</label>
                                                </li>
                                                <li>
                                                    <span>{item?.medium?.fiber}</span>
                                                    <label>Fiber</label>
                                                </li>
                                                <li>
                                                    <span>{item?.medium?.carbs}</span>
                                                    <label>Carbs</label>
                                                </li>
                                                <li>=</li>
                                                <li>
                                                    <span>{item?.medium?.calorie}</span>
                                                    <label>Calorie</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <label className="font-bold">{item?.learge?.name}</label>
                                            <ul className="flex justify-between">
                                                <li>
                                                    <span>{item?.learge?.protein}</span>
                                                    <label>Protein</label>
                                                </li>
                                                <li>
                                                    <span>{item?.learge?.fat}</span>
                                                    <label>Fat</label>
                                                </li>
                                                <li>
                                                    <span>{item?.learge?.fiber}</span>
                                                    <label>Fiber</label>
                                                </li>
                                                <li>
                                                    <span>{item?.learge?.carbs}</span>
                                                    <label>Carbs</label>
                                                </li>
                                                <li>=</li>
                                                <li>
                                                    <span>{item?.learge?.calorie}</span>
                                                    <label>Calorie</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {activeTab === 'nonveg' && (
                    <div>
                        <h3 className="text-xl font-bold mb-2">Non-Veg Food</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nonveg.map((item, index) => (
                                <li key={index} className="border rounded-lg overflow-hidden">
                                    <div className="text-center">
                                        {/* <img
                                            src={item?.img}
                                            alt={item?.title}
                                            className="w-48 mx-auto"
                                        /> */}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold mb-2">{item?.title}</h3>
                                        <p className="mb-4">{item?.description}</p>
                                        <div className="mb-4">
                                            <label className="font-bold">{item?.medium?.name}</label>
                                            <ul className="flex justify-between">
                                                <li>
                                                    <span>{item?.medium?.protein}</span>
                                                    <label>Protein</label>
                                                </li>
                                                <li>
                                                    <span>{item?.medium?.fat}</span>
                                                    <label>Fat</label>
                                                </li>
                                                <li>
                                                    <span>{item?.medium?.fiber}</span>
                                                    <label>Fiber</label>
                                                </li>
                                                <li>
                                                    <span>{item?.medium?.carbs}</span>
                                                    <label>Carbs</label>
                                                </li>
                                                <li>=</li>
                                                <li>
                                                    <span>{item?.medium?.calorie}</span>
                                                    <label>Calorie</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <label className="font-bold">{item?.learge?.name}</label>
                                            <ul className="flex justify-between">
                                                <li>
                                                    <span>{item?.learge?.protein}</span>
                                                    <label>Protein</label>
                                                </li>
                                                <li>
                                                    <span>{item?.learge?.fat}</span>
                                                    <label>Fat</label>
                                                </li>
                                                <li>
                                                    <span>{item?.learge?.fiber}</span>
                                                    <label>Fiber</label>
                                                </li>
                                                <li>
                                                    <span>{item?.learge?.carbs}</span>
                                                    <label>Carbs</label>
                                                </li>
                                                <li>=</li>
                                                <li>
                                                    <span>{item?.learge?.calorie}</span>
                                                    <label>Calorie</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tab;
