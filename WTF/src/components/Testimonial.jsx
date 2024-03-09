import React from 'react';
import pp1 from "../assets/pp1.png";
import pp2 from "../assets/pp2.png";
import pp3 from "../assets/pp3.png";

const Testimonial = () => {
    return (
        <div className="min-h-screen bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-4xl font-bold text-gray-800">What Students Say</div>
                <div className="mt-1 text-center text-gray-600">Lorem Ipsum is simply dummy text of the printing.</div>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <TestimonialCard image={pp1} name="Finlay Kirk" profession="Web Developer">
                        “Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself”
                    </TestimonialCard>
                    <TestimonialCard image={pp2} name="Dannette P. Cervantes" profession="Web Design">
                        “Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”
                    </TestimonialCard>
                    <TestimonialCard image={pp3} name="Clara R. Altman" profession="UI&UX Design">
                        “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”
                    </TestimonialCard>
                </div>

                <div className="mt-12 flex justify-center">
                    <svg width="126" height="14" viewBox="0 0 126 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="7" r="7" fill="#C2C2C2" />
                        <circle cx="119" cy="7" r="7" fill="#C2C2C2" />
                        <circle cx="61" cy="7" r="7" fill="#C2C2C2" />
                        <rect y="1" width="39" height="12" rx="6" fill="#4D2C5E" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const TestimonialCard = ({ image, name, profession, children }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
                <div className="text-gray-600">{children}</div>
                <div className="flex items-center mt-6">
                    <img className="h-14 w-14 rounded-full" src={image} alt={name} />
                    <div className="ml-3">
                        <div className="text-xl font-bold">{name}</div>
                        <div className="text-base text-gray-500">{profession}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
