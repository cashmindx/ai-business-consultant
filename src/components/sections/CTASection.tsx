
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">🔥 Ready to Begin?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg">
            Chat FREE with AI
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg">
            Unlock PRO Tools
          </Button>
        </div>
        
        <blockquote className="text-xl text-purple-200 italic mb-8 border-l-4 border-purple-500 pl-6">
          "The best time to plant a tree was 20 years ago. The second best time is NOW."
        </blockquote>
      </div>
    </div>
  );
};

export default CTASection;
