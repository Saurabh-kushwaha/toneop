import React from 'react';
import Tab from "./Tab";
const MenuTabs = () => {
    return (
        <>
        <div className="flex overflow-x-auto MenuScreen_menutabs_div_scroll">
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/supersalad.webp" alt="Salad Bowls" className="MenuScreen_menutabs_img" />
                Salad Bowls
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/ourgrills.webp" alt="Grills" className="MenuScreen_menutabs_img" />
                Grills
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/smoothiebowl.webp" alt="Smoothie Bowl" className="MenuScreen_menutabs_img" />
                Smoothie Bowl
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/healthyjuice.webp" alt="Juice" className="MenuScreen_menutabs_img" />
                Juice
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/Meal-Bowl.svg" alt="Meal Bowl" className="MenuScreen_menutabs_img" />
                Meal Bowl
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/Biryani.png" alt="Biryani" className="MenuScreen_menutabs_img" />
                Biryani
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/super_shake.png" alt="Super Shake" className="MenuScreen_menutabs_img" />
                Super Shake
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/bubble_tea_ans_shake.png" alt="Bubble Tea & Shake" className="MenuScreen_menutabs_img" />
                Bubble Tea & Shake
            </button>
            <button className="MenuScreen_button outline-none border border-gray-300">
                <img src="https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/category/Sandwich_meals.png" alt="Sandwich Meal" className="MenuScreen_menutabs_img" />
                Sandwich Meal
            </button>
            </div>
            <Tab />
        </>
    );
};

export default MenuTabs;
