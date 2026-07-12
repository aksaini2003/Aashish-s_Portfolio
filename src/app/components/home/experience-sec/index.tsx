import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2026",
            title:"Machine Learning Intern",
            company: "Dream Wedding Hub Pvt. Ltd.",
            type: "On-Site",
            description: (
  <>
    <p className="leading-relaxed">
      Designed and developed <strong>20+ production-ready AI automation workflows</strong> using
      <strong> n8n</strong>, integrating
      <strong> Large Language Models (Gemini/OpenAI)</strong>,
      <strong> REST APIs</strong>,
      <strong> Qdrant</strong>,
      <strong> Pinecone</strong>,
      <strong> Supabase</strong>,
      <strong> Cloudinary</strong>,
      <strong> Gmail</strong>,
      <strong> Google Sheets</strong>, and third-party services.
    </p>

    <p className="leading-relaxed mt-3">
      Built intelligent automation solutions for
      <strong> Vendor Discovery from Google My Business</strong>,
      <strong> Lead Generation</strong>,
      <strong> AI Blog & Website Content Automation</strong>,
      <strong> Social Media Content Creation & Publishing</strong>,
      <strong> Web Scraping</strong>,
      <strong> Image Validation</strong>,
      <strong> Customer Support Chatbots</strong>,
      <strong> Email Automation</strong>,
      <strong> Error Handling & Workflow Monitoring</strong>, and
      <strong> Internal Business Process Automation</strong>,
      significantly improving <strong>operational efficiency</strong>,
      reducing <strong>manual effort</strong>, and streamlining
      <strong> business workflows</strong>.
    </p>
  </>
)   },
        {
            year: "2025",
            title: "AI Research Intern",
            company: "Suvidha Foundation",
            type: "Remote",
            description: (
  <>
    <p className="leading-relaxed">
      Developed an <strong>end-to-end NLP-based Financial Advisory System</strong> that delivered
      <strong> personalized investment insights</strong> from
      <strong> real-time financial news</strong>. Built a complete AI pipeline integrating
      <strong> RSS News Scraping</strong>,
      <strong> Data Preprocessing</strong>,
      <strong> Named Entity Recognition (spaCy)</strong>,
      <strong> FinBERT Sentiment Analysis</strong>, and
      <strong> Financial Entity Mapping</strong>.
    </p>

    <p className="leading-relaxed mt-3">
      Implemented <strong>Semantic Search</strong> using
      <strong> Sentence Transformers</strong> and
      <strong> ChromaDB</strong>, and applied
      <strong> Retrieval-Augmented Generation (RAG)</strong> with
      <strong> Large Language Models (LLMs)</strong> to generate
      <strong> personalized financial recommendations</strong> based on user profiles.
    </p>
  </>
)       },
        {
            year: "2025",
            title: "Data Analyst Intern",
            company: "Elevate labs",
            type: "Remote",
            description: (
  <>
    <p className="leading-relaxed">
      Analyzed <strong>real-world datasets</strong> to extract meaningful insights and support
      <strong> data-driven decision making</strong>. Built
      <strong> interactive dashboards</strong>, performed
      <strong> SQL analysis using MySQL</strong>, and transformed raw data into actionable business insights.
    </p>

    <p className="leading-relaxed mt-3">
      Processed and analyzed datasets using
      <strong> Python</strong>,
      <strong> Pandas</strong>, and
      <strong> NumPy</strong>, created visualizations with
      <strong> Matplotlib</strong> and
      <strong> Seaborn</strong>, and trained
      <strong> Machine Learning models</strong> to identify patterns and improve predictive performance.
    </p>
  </>
) } ];

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
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
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

                                <div className="pl-8 sm:pl-0 leading-relaxed text-base">
    {exp.description}
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