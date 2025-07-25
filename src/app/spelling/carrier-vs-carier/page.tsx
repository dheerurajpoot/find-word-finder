import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Carrier or Carier - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;carrier&quot; and &quot;carier&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CarrierVsCarierPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Carrier or Carier</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;carrier&quot; and &quot;carier&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carier</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carier&quot; is a misspelling. The correct spelling is &quot;carrier&quot; with two &quot;r&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Carrier</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Carrier&quot; is the correct spelling. It means a person or company that transports goods or people.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Carrier (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person or company that transports goods, people, or messages; a container for carrying something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The shipping <strong>carrier</strong> delivered the package.</li>
                  <li>• Airlines are common <strong>carriers</strong> of passengers.</li>
                  <li>• The <strong>carrier</strong> bag held all the groceries.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carier (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carier&quot; is a misspelling of &quot;carrier&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carier&quot; is not used in standard English.</li>
                  <li>• Always use <strong>carrier</strong> when referring to transport.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Carrier:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Transporter</li>
                <li>• Conveyor</li>
                <li>• Bearer</li>
                <li>• Messenger</li>
                <li>• Container</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carier:</h4>
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
            <li>• <strong>Carrier</strong> is spelled with two &quot;r&quot;s, not one.</li>
            <li>• The word comes from Old French &quot;carier&quot; meaning to carry.</li>
            <li>• Can be used in transportation, communication, and medical contexts.</li>
            <li>• Often refers to companies or individuals that transport goods or people.</li>
            <li>• &quot;Carier&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;carier&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carier&quot; is never correct. The proper spelling is always &quot;carrier.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;car-ri-er&quot; - the word has two &quot;r&quot;s like &quot;carry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between carrier and transporter?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to moving things, but &quot;carrier&quot; often implies a business or service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;carier&quot; likely occurs because people forget the second &quot;r.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;carrier&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: common carrier, aircraft carrier, and carrier pigeon.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can carrier be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrier&quot; is only used as a noun. The verb form would be &quot;carry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is carrier only used in transportation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrier&quot; is used in many contexts including communication, medicine, and military.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word carrier?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Old French &quot;carier&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Carrier</strong> is the correct spelling with two &quot;r&quot;s. It means a person or company that transports goods, people, or messages. The misspelling &quot;carier&quot; is never correct. Use &quot;carrier&quot; to describe transportation services, containers, or individuals who carry things in various contexts.</p>
      </div>
    </div>
  )
} 