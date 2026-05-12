import Image from "next/image"

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - TEXT */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Renukswamy Chikkamath
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            AI for Patent Analytics • Information Retrieval • NLP • LLM Evaluation
          </p>

          <p className="text-gray-700 text-lg leading-7 mb-8">
            Researcher working at the intersection of AI, Patent Information Retrieval,
            and Multilingual NLP. Focused on prior art search, retrieval systems,
            and evaluation of large language models.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="/collaborate" className="px-5 py-2 bg-black text-white rounded-xl">
              Collaborate
            </a>

            <a href="/about" className="px-5 py-2 border rounded-xl">
              About Me
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">

          <Image
            src="/profile.jpg"
            alt="Renukswamy Chikkamath"
            width={320}
            height={320}
            className="rounded-2xl shadow-lg object-cover"
          />

        </div>

      </div>

    </section>
  )
}