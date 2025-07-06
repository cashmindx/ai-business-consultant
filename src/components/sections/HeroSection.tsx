
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0 px-4 py-2 text-sm font-medium">
            🚀 Your 24/7 AI Business Consultant
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Business Consultant
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 mb-4 font-light">
            Your 24/7 Guide to Success
          </p>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            From Startup to Scale-Up: AI-Powered Strategies for Every Stage
          </p>
          
          {/* Video Section Placeholder */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-purple-500/20">
            <p className="text-purple-300 mb-4 text-lg">🎥 Watch our welcome video below to see how we can help!</p>
            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl flex items-center justify-center border border-purple-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-purple-400 transition-colors cursor-pointer">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">Welcome Video</p>
                <p className="text-slate-400">60-second explainer coming soon</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat FREE with AI
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg">
              <Zap className="mr-2 h-5 w-5" />
              Unlock PRO Tools
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
