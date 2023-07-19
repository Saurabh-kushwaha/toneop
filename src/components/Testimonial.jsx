import React from 'react';
import testimonial_1 from '../asset/tesimonial_user_1.png';
import testimonial_2 from '../asset/tesimonial_user_2.png';
const Testimonial = () => {
    return (
        <section className="bg-green-100">
            <div className="container mx-auto">
                <h2 className="text-center text-xl font-bold text-gray-800 mt-8">
                    Testimonial
                    <span className="text-green-500">#healthysmiles</span>
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="w-full sm:w-auto flex">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 flex items-center">
                            <img
                                src={testimonial_1}
                                className="w-16 h-16 sm:w-24 sm:h-24"
                                alt="User 1"
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-800 mb-2">
                                    Their delicious and nutritious meals make it easy to avoid junk food. With their exceptional quality, timely delivery, and wide variety of options, ToneOpEats is my go-to choice for healthy eating.
                                </p>
                                <p className="text-base font-bold">Suchita Sharma</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4 sm:mt-0 mx-2 flex items-center">
                            <img
                                src={testimonial_2}
                                className="w-16 h-16 sm:w-24 sm:h-24"
                                alt="User 2"
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-800 mb-2">
                                    Ankit's healthy smile says it all! With ToneOpEats, he's not only enjoying delicious and premium meals, but also feeling great about his overall health.
                                </p>
                                <p className="text-base font-bold">Rohit Singh Rajput</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
