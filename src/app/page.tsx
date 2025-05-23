import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <img 
              src="/alessandro-paolini/avatar.png" 
              alt="Alessandro Paolini" 
              width={128} 
              height={128} 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Alessandro Paolini</h1>
            <p className="text-xl text-gray-400">AI Engineer</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/AlessandroPaolini7" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://linkedin.com/in/alessandropaolini" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="mailto:apaolini01@gmail.com">
              <Mail className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
          <p className="text-gray-400 max-w-2xl">
          I'm an AI Engineer with a strong background in data engineering. Over the last year, I've been working on building data pipelines, deploying AI agents, and designing complex end-to-end data workflows using Python, LangChain, LangGraph, SQL, and AWS services such as Athena or Glue.

I'm particularly interested in Fintech, Insurtech, and EdTech—industries where real-world challenges can be meaningfully addressed through AI, as long as they're built on solid data foundations.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">As seen on</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="bg-[#111111] border-0 hover:bg-[#161616] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-sky-400 font-medium mb-2">Teramot</h3>
              <p className="text-gray-400 text-sm mb-4">
                Building AI-driven automation for data engineering workflows. Implementing intelligent systems for data processing and analysis.
              </p>
              <a href="#experience" className="text-sky-400 text-sm hover:text-sky-300 transition-colors">
                More details →
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-[#111111] border-0 hover:bg-[#161616] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-sky-400 font-medium mb-2">Systems Engineering</h3>
              <p className="text-gray-400 text-sm mb-4">
                UTN (National Technological University) graduate with focus on AI, Data Science, and Systems Design.
              </p>
              <a href="#education" className="text-sky-400 text-sm hover:text-sky-300 transition-colors">
                More details →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Currently excited about...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-sky-400 font-medium mb-2">AI Agents & Automation</h3>
            <p className="text-gray-400 text-sm">
              Exploring the possibilities of AI agents in automating complex workflows and making data engineering more accessible.
            </p>
          </div>
          <div>
            <h3 className="text-sky-400 font-medium mb-2">LangChain & LangGraph</h3>
            <p className="text-gray-400 text-sm">
            Building advanced AI applications using LangChain and LangGraph to orchestrate complex language model behaviors.
            </p>
          </div>
          <div>
            <h3 className="text-sky-400 font-medium mb-2">Data Engineering Evolution</h3>
            <p className="text-gray-400 text-sm">
            Modernizing data engineering through AI-powered tools and automation-first pipelines.
            </p>
          </div>
          <div>
            <h3 className="text-sky-400 font-medium mb-2">Machine Learning</h3>
            <p className="text-gray-400 text-sm">
            Designing scalable machine learning systems that solve real-world data challenges with impact and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-16 max-w-3xl mx-auto">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-medium">AI Engineer @ Teramot</h3>
              <div className="text-right">
                <p className="text-gray-400 text-sm">July 2024 - Present</p>
                <p className="text-gray-400 text-sm">Rosario, Argentina</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              As an AI Engineer, my role was to develop new features related to AI & Data from scratch to production.
              Some of my deliverables were:
            </p>
            <ul className="list-disc pl-5 text-gray-400 text-sm space-y-3">
              <li>Designed and implemented an intelligent foreign key-primary key detection system leveraging AI agents within LangChain. By automating relationship discovery, the system significantly improved data integrity and consistency across core data pipelines, increasing accuracy by 40% while removing manual intervention.</li>
              <li>Designed and implemented an outlier detection algorithm leveraging statistical methods, including probability distribution analysis, kurtosis evaluation, and sample-size-adjusted thresholds, implemented directly in SQL (Trino). The system dynamically adapts detection thresholds based on data distribution. This optimization was particularly crucial for heavy-tailed distributions.</li>
              <li>Designed and implemented an AI-driven data fixer agent leveraging LangChain and LangGraph. This agent detects and corrects schema inconsistencies and data integrity issues, ensuring cleaner and more reliable datasets for downstream analytics.</li>
              <li>Designed and developed from 0-1 an AutoML pipeline for time series forecasting that allows users to request and generate predictions using natural language, using AI agents to make EDAs, feature engineering and training models. The system dynamically extracts and engineers temporal features such as lags, rolling statistics, and seasonal components, optimizing them based on dataset characteristics. It benchmarks multiple forecasting models using Random Search for hyperparameter optimization.</li>
              <li>Designed and implemented a RAG pipeline leveraging OpenAI File Search to enable efficient retrieval of documents.</li>
              <li>Designed and implemented a data modeling agent, using LangChain and LangGraph, to interpret business requirements in order to generate a data warehouse matching all instructions such as joins, aggregations, filters with an accuracy of 95%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Bachelor's Degree in Systems Engineering</h3>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Mar 2020 - Feb 2025</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">UTN (Universidad Tecnológica Nacional)</p>
              <p className="text-gray-400 text-sm">Rosario, Argentina</p>
            </div>
            <p className="text-gray-400 text-sm mt-2">GPA: 8.15/10.0</p>
            <p className="text-gray-400 text-sm mt-2">Relevant Coursework: Data Analysis, Systems Design; Data Science; Data Structures and Algorithms; Artificial
            Intelligence; Multivariate Calculus; Probability and Statistics, Databases.</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">C2 Certificate of Proficiency in English</h3>
              <div className="text-right">
                <p className="text-gray-400 text-sm">December 2019</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Cambridge Assessment English</p>
              <p className="text-gray-400 text-sm">Rosario, Argentina</p>
            </div>
            <p className="text-gray-400 text-sm mt-2">Score: 205. I also passed FCE and CAE, but this particular exam demonstrates my full mastery of English.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 mb-4">
            Feel free to reach out to: {' '}               
            <a href="mailto:apaolini01@gmail.com" className="text-sky-400 hover:underline">
              apaolini01@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
