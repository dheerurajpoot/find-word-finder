import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brother or Broher - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brother&quot; and &quot;broher&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brother, broher, spelling, correct spelling, word comparison, English spelling, family, sibling',
  openGraph: {
    title: 'Brother or Broher - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brother&quot; and &quot;broher&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BrotherVsBroherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brother or Broher</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Brother&quot; and &quot;Broher&quot;. This is a noun referring to a male sibling or close male friend.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Broher
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Broher&quot; is a misspelling of the word &quot;brother.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• My broher is older than me</li>
              <li>• He is my broher from another mother</li>
              <li>• The broher helped me move</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brother
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Brother&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• My brother is older than me</li>
              <li>• He is my brother from another mother</li>
              <li>• The brother helped me move</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brother</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brother</strong> (noun): A male sibling; a boy or man who shares one or both parents with another person.
          </p>
          <p>
            <strong>Brother</strong> (noun): A close male friend or companion, often used as a term of endearment.
          </p>
          <p>
            <strong>Brother</strong> (noun): A member of a religious order or fraternal organization.
          </p>
          <p>
            Used to refer to a male sibling, close male friend, or member of a brotherhood or religious order.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brother</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Sibling</li>
              <li>• Bro (informal)</li>
              <li>• Buddy</li>
              <li>• Mate</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Pal</li>
              <li>• Friend</li>
              <li>• Comrade</li>
              <li>• Fellow</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brother&quot; is always spelled with &quot;th&quot; in the middle, not &quot;h&quot;</li>
          <li>• The word comes from Old English &quot;brōþor&quot; meaning male sibling</li>
          <li>• The pronunciation is /ˈbrʌðər/ (BRUH-ther)</li>
          <li>• &quot;Broher&quot; is a common misspelling but is never correct</li>
          <li>• The &quot;th&quot; sound is important for correct pronunciation</li>
          <li>• It&apos;s a noun referring to a male sibling or close male friend</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;broher&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget the &quot;t&quot; in the middle and write it as &quot;broher&quot; instead of &quot;brother.&quot; The &quot;th&quot; sound is important.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;broher&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;broher&quot; is always incorrect. Always use &quot;brother&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brother&quot; and &quot;sister&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brother&quot; refers to a male sibling, while &quot;sister&quot; refers to a female sibling. Both are nouns for family relationships.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;brother&quot; as having &quot;th&quot; like &quot;mother&quot; and &quot;father.&quot; All these family words have the &quot;th&quot; sound in the middle.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brother</strong> is the correct spelling of this word. The incorrect spelling &quot;broher&quot; should never be used.
          </p>
          <p>
            Remember: Brother has &quot;th&quot; in the middle (like &quot;mother&quot; and &quot;father&quot;). The word refers to a male sibling or close male friend, and the &quot;th&quot; sound is essential for correct pronunciation.
          </p>
        </div>
      </div>
    </div>
  )
} 