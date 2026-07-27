import React from "react";
import heroimage from "../../assets/blog-page-hero-img.avif";

const HeroSection = () => {
    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0d1117] font-poppins">
            <div className="relative flex min-h-[300px] w-full overflow-hidden lg:h-[400px]">
                <img
                    src={heroimage}
                    alt="Professional Certifications"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="eager"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,13,19,0.95)_0%,rgba(9,13,19,0.78)_45%,rgba(9,13,19,0.34)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d1117] to-transparent" />

                <div className="relative z-10 flex w-full items-center px-6 py-12 sm:px-10 lg:px-16">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                            PROFESSIONAL
                        </span>
                        <div className="mt-2 h-px w-[10%] bg-blue-300/80" />


                        <h1 className="mt-4 text-4xl font-bold leading-tight text-blue-500 sm:text-5xl lg:text-6xl">
                            Certifications
                        </h1>
                        <div className="mt-2 h-px w-[40%] bg-blue-300/80" />


                        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base lg:text-lg">
                            A curated collection of credentials reflecting technical depth,
                            continuous learning, and a commitment to building reliable modern
                            digital experiences.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
