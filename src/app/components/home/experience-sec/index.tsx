import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2025",
            title: "AI Research Intern",
            company: "Suvidha Foundation",
            type: "Remote",
            description: "Developed an end-to-end NLP-based financial advisory system that delivers personalized investment insights from real-time news. Built a complete data pipeline including news scraping, preprocessing, NER, sentiment analysis, and financial entity mapping. Implemented semantic search using embeddings and vector database, and applied Retrieval-Augmented Generation (RAG) with LLMs to generate tailored recommendations based on user profiles."
        },
        {
            year: "2025",
            title: "Data Analyst Intern",
            company: "Elevate labs",
            type: "Remote",
            description: "Worked on analyzing real-world datasets to extract meaningful insights and support data-driven decisions. Built interactive dashboards to visualize key metrics and trends. Performed data querying and analysis using MySQL to generate actionable business insights. Cleaned, processed, and analyzed multiple CSV datasets using Python libraries such as NumPy and Pandas. Created insightful visualizations using Matplotlib and Seaborn. Additionally, trained and evaluated machine learning models to identify patterns and improve predictive understanding."},
       
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;