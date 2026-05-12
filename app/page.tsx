import { clear } from "console";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-8 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Renukswamy Chikkamath
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          AI for Patent Analytics • Information Retrieval • NLP • LLM Evaluation
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-6">
          Researcher working at the intersection of Artificial Intelligence,
          Patent Information Retrieval, Multilingual NLP, and Benchmark Evaluation.
          Currently pursuing PhD research at Hochschule München (Munich University
          of Applied Sciences), Germany.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-10">
          Interested in Indo-German research collaborations, applied AI systems,
          retrieval-augmented generation (RAG), prior art search, and industry-academia
          innovation in AI.
        </p>

        <div className="flex gap-4">
          <a
            href="https://scholar.google.com"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
          >
            Google Scholar
          </a>

          <a
            href="https://github.com/Renuk9390"
            className="px-6 py-3 border border-black rounded-xl hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}