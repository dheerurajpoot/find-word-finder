import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Hierarchy or Heirarchy - Which is Correct?",
  description: "Learn the correct spelling between &apos;hierarchy&apos; and &apos;heirarchy&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function HierarchyVsHeirarchyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Hierarchy or Heirarchy</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Hierarchy or Heirarchy, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Heirarchy</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Heirarchy&quot; is not a valid word in English.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-green-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Hierarchy</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Hierarchy&quot; is a noun meaning a system of ranking or organization.
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Definition */}
      <div className="space-y-8">
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Hierarchy</span> (noun): A system in which people or things are ranked one above the other according to status or authority; a structured organization.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The company has a clear hierarchy of management.</li>
              <li>Social hierarchy determines status in many societies.</li>
              <li>The military operates on a strict hierarchy.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;hierarchy&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Ranking</li>
                  <li>Order</li>
                  <li>Pecking order</li>
                  <li>Chain of command</li>
                  <li>Structure</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Organization</li>
                  <li>System</li>
                  <li>Levels</li>
                  <li>Authority</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Hierarchy&quot; is the correct spelling. &quot;Heirarchy&quot; is a common misspelling—remember, it starts with &quot;hie-&quot; not &quot;hei-&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it heirarchy or hierarchy?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;hierarchy.&quot; &quot;Heirarchy&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce hierarchy?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈhaɪərɑːrki/ (HY-er-ar-kee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does hierarchy mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A system in which people or things are ranked one above the other according to status or authority; a structured organization.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 