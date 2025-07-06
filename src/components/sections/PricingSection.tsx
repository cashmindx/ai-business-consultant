
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">📌 Pricing (PayPal Only)</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 relative">
          <CardHeader>
            <Badge className="bg-green-500 text-white w-fit">FREE</Badge>
            <CardTitle className="text-white text-2xl">$0</CardTitle>
            <CardDescription className="text-slate-300">Name generator + basic tools</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Business Name Generator</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Basic Tools Access</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20">
          <CardHeader>
            <Badge className="bg-blue-500 text-white w-fit">STARTER</Badge>
            <CardTitle className="text-white text-2xl">$29<span className="text-lg text-slate-400">/mo</span></CardTitle>
            <CardDescription className="text-slate-300">Setup guides + weekly strategy sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Everything in FREE</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Setup Guides</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Weekly Strategy Sessions</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-400 relative transform scale-105">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">MOST POPULAR</Badge>
          </div>
          <CardHeader>
            <Badge className="bg-purple-500 text-white w-fit">PRO</Badge>
            <CardTitle className="text-white text-2xl">$99<span className="text-lg text-slate-400">/mo</span></CardTitle>
            <CardDescription className="text-slate-300">Scaling playbooks & priority AI coaching</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Everything in STARTER</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Scaling Playbooks</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Priority AI Coaching</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Advanced Analytics</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20">
          <CardHeader>
            <Badge className="bg-gold-500 text-white w-fit bg-gradient-to-r from-yellow-500 to-orange-500">VIP</Badge>
            <CardTitle className="text-white text-2xl">Custom</CardTitle>
            <CardDescription className="text-slate-300">Full automation & done-for-you planning</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Everything in PRO</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Full Automation</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Done-for-You Planning</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />1-on-1 Consultation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Payment Info */}
      <div className="text-center mt-12 p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 max-w-2xl mx-auto">
        <h3 className="text-white text-xl font-semibold mb-4">💳 Secure Payment Information</h3>
        <p className="text-slate-300 mb-4"><strong>Payment Method:</strong> PayPal (details provided after signup)</p>
        <div className="flex items-center justify-center text-purple-300">
          <Shield className="h-4 w-4 mr-2" />
          <span className="text-sm">We respect anonymity – no personal data required!</span>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
