import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beautiful or Butiful - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beautiful&quot; and &quot;butiful&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeautifulVsButifulPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beautiful or Butiful</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beautiful&quot; and &quot;butiful&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Butiful</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Butiful&quot; is a misspelling. The correct spelling is &quot;beautiful&quot; with &quot;beau&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beautiful</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beautiful&quot; is the correct spelling. It means pleasing to the senses or mind aesthetically.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beautiful (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Pleasing to the senses or mind aesthetically; possessing qualities that give great pleasure or satisfaction.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The sunset was <strong>beautiful</strong> tonight.</li>
                  <li>• She wore a <strong>beautiful</strong> dress to the party.</li>
                  <li>• The garden looked <strong>beautiful</strong> in spring.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Butiful (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Butiful&quot; is a misspelling of &quot;beautiful&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Butiful&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beautiful</strong> when describing aesthetic appeal.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beautiful:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Gorgeous</li>
                <li>• Stunning</li>
                <li>• Lovely</li>
                <li>• Attractive</li>
                <li>• Pretty</li>
                <li>• Elegant</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Butiful:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Beautiful</strong> is spelled with &quot;beau&quot; at the beginning, not &quot;bu.&quot;</li>
            <li>• The word comes from Old French &quot;bel&quot; meaning fair or handsome.</li>
            <li>• Used to describe people, places, objects, and experiences.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• &quot;Butiful&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;butiful&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;butiful&quot; is never correct. The proper spelling is always &quot;beautiful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;beau-tiful&quot; - the word starts with &quot;beau&quot; which means beautiful in French.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the adverb form of beautiful?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The adverb form is &quot;beautifully&quot; - add &quot;ly&quot; to the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beautiful be used to describe things other than appearance?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, beautiful can describe sounds, ideas, actions, and other qualities beyond just visual appeal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;butiful&quot; likely occurs because of pronunciation patterns or confusion about the &quot;beau&quot; prefix.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;beautiful&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: beautiful day, beautiful music, beautiful soul, and beautiful mind.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beautiful be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beautiful&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beautiful and pretty?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Beautiful&quot; is more intense and comprehensive, while &quot;pretty&quot; is lighter and more casual.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beautiful</strong> is the correct spelling with &quot;beau&quot; at the beginning. It means pleasing to the senses or mind aesthetically. The misspelling &quot;butiful&quot; is never correct. Think of it as &quot;beau-tiful&quot; to remember the correct spelling.</p>
      </div>
    </div>
  )
} 