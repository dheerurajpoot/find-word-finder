import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beautiful or Beautyful - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beautiful&quot; and &quot;beautyful&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeautifulVsBeautyfulPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beautiful or Beautyful</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beautiful&quot; and &quot;beautyful&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beautyful</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beautyful&quot; is a misspelling. The correct spelling is &quot;beautiful&quot; with &quot;eau&quot; in the middle.</p>
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
                  <li>• The sunset was absolutely <strong>beautiful</strong>.</li>
                  <li>• She wore a <strong>beautiful</strong> dress to the party.</li>
                  <li>• The garden was filled with <strong>beautiful</strong> flowers.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beautyful (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beautyful&quot; is a misspelling of &quot;beautiful&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beautyful&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beautiful</strong> when describing something attractive.</li>
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
                <li>• Attractive</li>
                <li>• Lovely</li>
                <li>• Gorgeous</li>
                <li>• Stunning</li>
                <li>• Pretty</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beautyful:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Beautiful</strong> is spelled with &quot;eau&quot; in the middle, not &quot;ea.&quot;</li>
          <li>• The word comes from the Old French &quot;bel&quot; meaning &quot;beautiful.&quot;</li>
          <li>• Used to describe something that is pleasing to look at or experience.</li>
          <li>• Can be used for people, objects, places, or abstract concepts.</li>
          <li>• &quot;Beautyful&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beautyful&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beautyful&quot; is never correct. The proper spelling is always &quot;beautiful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;beau&quot; + &quot;tiful&quot; - the &quot;eau&quot; spelling is common in French-derived words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beautiful and pretty?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Beautiful&quot; is more formal and comprehensive, while &quot;pretty&quot; is more casual and often refers to delicate attractiveness.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beautiful be used for things other than appearance?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beautiful&quot; can describe sounds, ideas, actions, or any pleasing experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;beautyful&quot; likely occurs because of confusion with the word &quot;beauty.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;beautiful&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: beautiful day, beautiful mind, beautiful soul, and beautiful weather.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beautiful</strong> is the correct spelling with &quot;eau&quot; in the middle. It means pleasing to the senses or mind aesthetically. The misspelling &quot;beautyful&quot; is never correct. Use &quot;beautiful&quot; to describe anything that is attractive or pleasing.</p>
      </div>
    </div>
  )
} 