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
        <div className='border bg-white p-6 mt-60' style={{ marginTop: '230px', marginLeft:"5%", marginRight:"5%"}}>
            <div className="flex p-5 justify-center border-b">
                <button
                    className={`rounded-md border mr-5 py-1.5 px-8 focus:outline-none ${activeTab === 'veg' ? 'bg-lime-600 text-white' : ' text-gray-700'
                        }`}
                   
                    onClick={() => handleTabClick('veg')}
                >
                    Veg
                </button>
                <button
                    className={`rounded-md border py-1.5 px-8  focus:outline-none ${activeTab === 'nonveg' ? 'bg-lime-600 text-white' : ' text-gray-700'
                        }`}
                    onClick={() => handleTabClick('nonveg')}
                >
                    Non-Veg
                </button>
            </div>
            <div className="mt-4">
                {activeTab === 'veg' && (
                    <div>
                        <ul className="">
                            {veg.map((item, index) => (
                                <li key={index} className="md:flex lg:flex xl:flex border rounded-lg overflow-hidden m-4" >
                                    <div className="text-center p-2">
                                        <img
                                            className='w-40 m-auto'
                                            src={item?.img}
                                            alt={item?.title}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-md font-bold mb-2">{item?.title}</h3>
                                        <p className="text-sm font-semibold text-gray-500 mb-4">{item?.discription}</p>
                                        <div className='flex'>
                                            <div className="mb-4 ">
                                                <label className="text-sm font-semibold">{item?.medium?.name}</label>
                                                <ul className="flex mr-2">
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.protein}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Protein</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fat}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fat</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fiber}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fiber</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.carbs}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Carbs</h6>
                                                    </li>
                                                    <li>=</li>
                                                    <li className='mx-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.calorie}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Calorie</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold">{item?.learge?.name}</label>
                                                <ul className="flex mr-2">
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.protein}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Protein</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fat}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fat</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fiber}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fiber</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.carbs}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Carbs</h6>
                                                    </li>
                                                    <li>=</li>
                                                    <li className='mx-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.calorie}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Calorie</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {activeTab === 'nonveg' && (
                    <div>
                        <ul className="">
                            {nonveg.map((item, index) => (
                                <li key={index} className="md:flex lg:flex xl:flex border rounded-lg overflow-hidden m-4">
                                    <div className="text-center p-2">
                                        <img
                                            className='w-40 m-auto'
                                            src={item?.img}
                                            alt={item?.title}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-md font-bold mb-2">{item?.title}</h3>
                                        <p className="text-sm font-semibold text-gray-500 mb-4">{item?.discription}</p>
                                        <div className='flex'>
                                            <div className="mb-4 ">
                                                <label className="text-sm font-semibold">{item?.medium?.name}</label>
                                                <ul className="flex mr-2">
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.protein}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Protein</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fat}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fat</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fiber}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fiber</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.carbs}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Carbs</h6>
                                                    </li>
                                                    <li>=</li>
                                                    <li className='mx-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.calorie}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Calorie</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold">{item?.learge?.name}</label>
                                                <ul className="flex mr-2">
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.protein}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Protein</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fat}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fat</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.fiber}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Fiber</h6>
                                                    </li>
                                                    <li className='mr-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.carbs}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Carbs</h6>
                                                    </li>
                                                    <li>=</li>
                                                    <li className='mx-2'>
                                                        <span className='text-xs font-medium'>{item?.medium?.calorie}</span>
                                                        <h6 className='text-lime-600 font-medium text-sm'>Calorie</h6>
                                                    </li>
                                                </ul>
                                            </div>
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
