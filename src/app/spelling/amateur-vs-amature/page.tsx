import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amateur or Amature - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amateur&quot; and &quot;amature&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmateurVsAmaturePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amateur or Amature</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amateur&quot; and &quot;amature&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Amature</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Amature&quot; is a misspelling. The correct spelling is &quot;amateur&quot; with &quot;eur&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amateur</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amateur&quot; is the correct spelling. It means a person who engages in an activity for pleasure rather than as a profession.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amateur (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who engages in an activity for pleasure rather than as a profession; non-professional.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He is an <strong>amateur</strong> golfer.</li>
                  <li>• The <strong>amateur</strong> competition was fierce.</li>
                  <li>• She began as an <strong>amateur</strong> writer.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Amature (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Amature&quot; is a misspelling of &quot;amateur&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Amature&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amateur</strong> when referring to non-professionals.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amateur:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Non-professional</li>
                <li>• Hobbyist</li>
                <li>• Enthusiast</li>
                <li>• Novice</li>
                <li>• Beginner</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Amature:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Amateur</strong> is spelled with &quot;eur&quot; at the end, not &quot;ure.&quot;</li>
            <li>• Used to describe someone who does something for pleasure, not money.</li>
            <li>• Can be used as both a noun and an adjective.</li>
            <li>• The word comes from French &quot;amateur&quot; meaning &quot;lover.&quot;</li>
            <li>• &quot;Amature&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;amature&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amature&quot; is never correct. The proper spelling is always &quot;amateur.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;am-a-teur&quot; - it ends with &quot;eur&quot; like many French-derived words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amateur and professional?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: An amateur does something for pleasure or as a hobby, while a professional does it for money or as a career.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amateur be used negatively?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Sometimes &quot;amateur&quot; can imply lack of skill, but it can also simply mean non-professional.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amateur&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: amateur athlete, amateur photographer, and amateur hour.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;amature&quot; occurs because people think it should end with &quot;ure&quot; instead of &quot;eur.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amateur be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amateur&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is amateur always about skill level?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Not necessarily - amateur refers to motivation (pleasure vs. money) rather than skill level.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amateur</strong> is the correct spelling with &quot;eur&quot; at the end. It means a person who engages in an activity for pleasure rather than as a profession. The misspelling &quot;amature&quot; is never correct. Use &quot;amateur&quot; to describe non-professional activities or participants.</p>
      </div>
    </div>
  )
} 