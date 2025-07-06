
import { Zap, FileText, TrendingUp, MessageCircle } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">✨ What's Inside?</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="text-center p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/20">
          <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">Business Name Generator</h3>
          <p className="text-slate-300 text-sm">Instant brandable ideas in seconds.</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/20">
          <FileText className="h-12 w-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">Zero-to-Launch Blueprint</h3>
          <p className="text-slate-300 text-sm">Legal, financial, and operational setup checklist.</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/20">
          <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">AI Growth Engine</h3>
          <p className="text-slate-300 text-sm">Custom marketing & sales strategies.</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/20">
          <MessageCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">24/7 Text/Audio Chat</h3>
          <p className="text-slate-300 text-sm">Like a McKinsey consultant in your pocket.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
