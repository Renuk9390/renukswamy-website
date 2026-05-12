import Image from "next/image"

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT SIDE */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Renukswamy Chikkamath
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            AI for Patent Analytics • Information Retrieval • NLP • LLM Evaluation
          </p>

          <p className="text-gray-700 leading-7">
            Researcher working on AI-driven patent retrieval systems, multilingual NLP,
            and evaluation of large language models.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Renukswamy Chikkamath"
            width={320}
            height={320}
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>

    </section>
  )
}