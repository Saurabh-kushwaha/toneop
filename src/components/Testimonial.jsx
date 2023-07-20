import React from 'react';
import testimonial_1 from '../asset/tesimonial_user_1.png';
import testimonial_2 from '../asset/tesimonial_user_2.png';
const Testimonial = () => {
    return (
        <section className="meal-slider-bg mt-20 py-20">
            <div className="footer_address mx-auto">
                <h2 className="text-center text-4xl font-bold text-gray-800 pb-20">
                    Testimonial <span className="text-lime-500">#healthysmiles</span>
                </h2>

                <div className="flex">
                    <div className="w-full md:flex lg:flex xl:flex">
                        <div className="sm:w-full md:flex lg:flex xl:flex sm:m-auto w-1/2">
                            <img
                                src={testimonial_1}
                                className="w-60 h-64 md:w-40 md:h-40 lg:w-60 lg:h-64 m-auto object-cover"
                                alt="User 1"
                            />
                            <div className="flex flex-wrap justify-center items-center px-8">
                                <div>
                                    <p className="text-xl text-gray-800 mb-2 sm:text-center md:text-left">
                                        Their delicious and nutritious meals make it easy to avoid junk food. With their exceptional quality, timely delivery, and wide variety of options, ToneOpEats is my go-to choice for healthy eating.
                                    </p>
                                    <p className="text-xl font-bold sm:text-center md:text-left">Suchita Sharma</p>
                                </div>
                            </div>
                        </div>

                        <div className="sm:w-full md:flex lg:flex xl:flex sm:m-auto w-1/2">
                            <img
                                src={testimonial_2}
                                className="w-60 h-64 md:w-40 md:h-40 lg:w-60 lg:h-64 m-auto object-cover"
                                alt="User 2"
                            />
                            <div className="flex flex-wrap justify-center items-center px-8">
                                <div>
                                    <p className="text-xl text-gray-800 mb-2 sm:text-center md:text-left">
                                        Ankit's healthy smile says it all! With ToneOpEats, he's not only enjoying delicious and premium meals, but also feeling great about his overall health.
                                    </p>
                                    <p className="text-xl font-bold sm:text-center md:text-left">Rohit Singh Rajput</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;
