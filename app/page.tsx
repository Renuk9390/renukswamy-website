export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      {/* HERO */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Renukswamy Chikkamath
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        AI for Patent Analytics • Information Retrieval • NLP • LLM Evaluation
      </p>

      <p className="text-gray-700 text-lg leading-7 mb-10">
        Researcher working at the intersection of Artificial Intelligence,
        Patent Information Retrieval, and Multilingual NLP.
        Focused on building intelligent systems for prior art search and
        evaluation of large language models in real-world retrieval settings.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-16">
        <a className="px-5 py-2 bg-black text-white rounded-xl"
           href="/collaborate">
          Collaborate
        </a>

        <a className="px-5 py-2 border rounded-xl"
           href="https://github.com/Renuk9390">
          GitHub
        </a>

        <a className="px-5 py-2 border rounded-xl"
           href="https://www.linkedin.com">
          LinkedIn
        </a>
      </div>

      {/* POSITIONING BLOCK */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold mb-2">Research Focus</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• AI for Patents / IP</li>
            <li>• Information Retrieval Systems</li>
            <li>• LLM Evaluation & Benchmarking</li>
            <li>• Multilingual NLP</li>
          </ul>
        </div>

        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold mb-2">Vision</h2>
          <p className="text-sm text-gray-600">
            Bridging AI research between Germany and India,
            with focus on real-world patent search systems,
            evaluation frameworks, and applied NLP solutions.
          </p>
        </div>

      </div>

    </section>
  )
}