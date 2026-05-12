export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>

      <p className="text-gray-600 mb-6">
        Selected research contributions in AI, NLP, and Patent Information Retrieval.
      </p>

      <div className="space-y-4">

        <div className="p-4 border rounded-xl">
          <h2 className="font-semibold">LLM-based Prior Art Search Evaluation</h2>
          <p className="text-sm text-gray-600">
            Patent retrieval benchmarking and evaluation challenges.
          </p>
        </div>

        <div className="p-4 border rounded-xl">
          <h2 className="font-semibold">Multilingual Information Retrieval Systems</h2>
          <p className="text-sm text-gray-600">
            Cross-lingual retrieval using embeddings and transformer models.
          </p>
        </div>

      </div>
    </div>
  )
}