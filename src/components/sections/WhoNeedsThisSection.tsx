
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const WhoNeedsThisSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">💡 Who Needs This?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <CardHeader>
            <Target className="h-12 w-12 text-purple-400 mb-4" />
            <CardTitle className="text-white text-xl">Dreamers with no plan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Start your business from scratch with foolproof steps.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <CardHeader>
            <TrendingUp className="h-12 w-12 text-cyan-400 mb-4" />
            <CardTitle className="text-white text-xl">Struggling owners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Break plateaus with growth hacks & proven systems.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <CardHeader>
            <Users className="h-12 w-12 text-green-400 mb-4" />
            <CardTitle className="text-white text-xl">Ambitious scalers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Advanced tactics for domination in your niche.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhoNeedsThisSection;
