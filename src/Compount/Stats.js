import React, { useEffect, useState, useRef } from "react";

const Stats = () => {
    const [happyPatients, setHappyPatients] = useState(0);
    const [satisfiedPatients, setSatisfiedPatients] = useState(0);
    const [expertDoctors, setExpertDoctors] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(statsRef.current); // Stop observing after it's visible
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );
        
        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setHappyPatients((prev) => (prev < 4800 ? prev + 50 : 4800));
                setSatisfiedPatients((prev) => (prev < 2500 ? prev + 25 : 2700));
                setExpertDoctors((prev) => (prev < 25 ? prev + 1 : 25));
            }, 20);

            return () => clearInterval(interval);
        }
    }, [isVisible]);

    return (
        <div
            ref={statsRef}
            className="relative flex justify-around items-center bg-cover bg-center py-14 mt-10 mr-28 ml-28 "
            style={{
                backgroundImage: `url('https://www.shutterstock.com/image-photo/healthcare-people-group-professional-doctor-260nw-1242323185.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold text-orange-500">{happyPatients}+</h1>
                <p className="text-lg font-semibold">Happy Patients</p>
            </div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold text-yellow-300">{satisfiedPatients}+</h1>
                <p className="text-lg font-semibold">Satisfied Patients with Service & Treatment</p>
            </div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold text-emerald-400">{expertDoctors}+</h1>
                <p className="text-lg font-semibold ">Expert Doctors</p>
            </div>
        </div>
    );
};

export default Stats;
