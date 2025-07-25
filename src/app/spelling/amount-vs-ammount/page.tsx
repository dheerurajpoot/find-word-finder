import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amount or Ammount - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amount&quot; and &quot;ammount&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmountVsAmmountPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amount or Ammount</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amount&quot; and &quot;ammount&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ammount</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ammount&quot; is a misspelling. The correct spelling is &quot;amount&quot; with a single &quot;m&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amount</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amount&quot; is the correct spelling. It means the total quantity or sum of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amount (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The total quantity or sum of something; the extent or degree of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The total <strong>amount</strong> was $100.</li>
                  <li>• A large <strong>amount</strong> of work remains.</li>
                  <li>• The <strong>amount</strong> of time needed varies.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ammount (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ammount&quot; is a misspelling of &quot;amount&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ammount&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amount</strong> when referring to quantities.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amount:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Quantity</li>
                <li>• Sum</li>
                <li>• Total</li>
                <li>• Extent</li>
                <li>• Degree</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ammount:</h4>
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
            <li>• <strong>Amount</strong> is spelled with a single &quot;m&quot;.</li>
            <li>• Used to refer to quantities, sums, or degrees of something.</li>
            <li>• The word comes from Old French &quot;amonter&quot; meaning &quot;to go up.&quot;</li>
            <li>• &quot;Ammount&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ammount&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ammount&quot; is never correct. The proper spelling is always &quot;amount.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is only one &quot;m&quot; in &quot;amount.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amount and number?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Amount&quot; is used for uncountable nouns, while &quot;number&quot; is used for countable nouns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amount be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amount&quot; can be used as a verb meaning &quot;to add up to&quot; or &quot;to be equivalent to.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amount&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: amount to, large amount, small amount, and total amount.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ammount&quot; occurs because people think it should have double &quot;m&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amount be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amount&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is amount always about money?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amount&quot; can refer to any quantity, not just money - time, work, effort, etc.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amount</strong> is the correct spelling with a single &quot;m&quot;. It means the total quantity or sum of something. The misspelling &quot;ammount&quot; is never correct. Use &quot;amount&quot; to refer to quantities, sums, or degrees of something.</p>
      </div>
    </div>
  )
} 