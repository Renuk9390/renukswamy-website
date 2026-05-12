export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="text-gray-700 leading-7 mb-6">
        I am <b>Renukswamy Chikkamath</b>, a researcher working at the intersection of
        Artificial Intelligence, Patent Information Retrieval, and Natural Language Processing.
        My work focuses on building intelligent systems for prior art search, evaluation of
        large language models, and multilingual retrieval systems.
      </p>

      <p className="text-gray-700 leading-7 mb-6">
        I am currently pursuing doctoral research at <b>Hochschule München (University of Applied Sciences, Munich)</b>,
        where my focus is on AI-driven patent analytics and benchmark evaluation in information retrieval systems.
        My academic journey includes experience in both research and industry, spanning applied AI systems,
        software development, and information retrieval technologies.
      </p>

      <p className="text-gray-700 leading-7 mb-6">
        My research interest lies in understanding how large language models can be effectively evaluated
        and applied in real-world retrieval tasks such as patent search. I am particularly interested in
        bridging the gap between academic research and industrial applications of AI systems.
      </p>

      <p className="text-gray-700 leading-7 mb-8">
        I have also been actively involved in teaching and mentoring students in areas such as
        Machine Learning, Natural Language Processing, and Information Retrieval, and I strongly believe
        in building practical, industry-relevant AI education.
      </p>

      {/* HIGHLIGHTS SECTION */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-5 border rounded-xl">
          <h2 className="font-semibold mb-2">Research Focus</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>AI for Patent Analytics</li>
            <li>Information Retrieval Systems</li>
            <li>LLM Evaluation & Benchmarking</li>
            <li>Multilingual NLP</li>
          </ul>
        </div>

        <div className="p-5 border rounded-xl">
          <h2 className="font-semibold mb-2">Academic Identity</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Germany-based PhD Researcher</li>
            <li>Applied AI & NLP Systems</li>
            <li>Industry-Academia Collaboration</li>
            <li>Patent & Legal Tech AI Systems</li>
          </ul>
        </div>

      </div>

      {/* FINAL STATEMENT */}
      <div className="mt-10 p-6 border rounded-xl bg-gray-50">
        <p className="text-gray-700">
          My long-term goal is to build AI systems that improve access to technical knowledge,
          especially in patent and intellectual property domains, while fostering strong
          research collaborations between Europe and India.
        </p>
      </div>

    </div>
  )
}