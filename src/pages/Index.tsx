import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Target, Users, MessageCircle, FileText, TrendingUp, Shield, Camera, Play, Heart, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
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

      {/* Who Needs This Section */}
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

      {/* Features Section */}
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

      {/* Pricing Section */}
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
          <p className="text-slate-300 mb-2"><strong>PayPal:</strong> mulondoherbert@gmail.com</p>
          <p className="text-slate-300 mb-4"><strong>Support:</strong> theknightmentor@gmail.com</p>
          <div className="flex items-center justify-center text-purple-300">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm">We respect anonymity – no personal data required!</span>
          </div>
        </div>
      </div>

      {/* Enhanced Video Script Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">🎬 "Your AI Business Bestie" Video Script</h2>
            <p className="text-xl text-purple-200 mb-4">Enhanced with Real Human Faces for Trust & Emotional Connection</p>
            <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0 px-4 py-2">
              2 min 30 sec – Optimized for Emotional Engagement
            </Badge>
          </div>

          {/* Casting Suggestions */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Users className="mr-3 h-6 w-6 text-purple-400" />
                👥 Casting Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Struggling Newbie</h3>
                  <p className="text-slate-300 text-sm">Early 20s, frustrated at laptop</p>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Mid-Career Stretcher</h3>
                  <p className="text-slate-300 text-sm">40s mom with home office</p>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Ambitious CEO</h3>
                  <p className="text-slate-300 text-sm">30s Black man in co-working space</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Script Scenes */}
          <div className="space-y-6">
            {/* Scene 1 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Play className="mr-3 h-5 w-5 text-red-400" />
                  🎥 SCENE 1: Problem Hook (0:00-0:12)
                </CardTitle>
                <CardDescription className="text-slate-300">Close-up shots of all 3 personas looking stressed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-purple-200 italic mb-2"><strong>AI Voice (Empathetic):</strong></p>
                  <p className="text-slate-300">"Late-night panic about LLC forms? (cut to newbie)<br/>
                  Feeling stuck at $10k/month? (mom sighs)<br/>
                  Wasting money on bad ads? (CEO rubs temples)<br/>
                  Breathe. I'm your AI secret weapon."</p>
                </div>
              </CardContent>
            </Card>

            {/* Scene 2 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Star className="mr-3 h-5 w-5 text-yellow-400" />
                  🌟 SCENE 2: Human + AI Collaboration (0:13-0:30)
                </CardTitle>
                <CardDescription className="text-slate-300">Split screens – left=human faces, right=AI tool in action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-purple-200 italic mb-2"><strong>AI Voice:</strong></p>
                  <p className="text-slate-300">"Meet Sarah (mom smiles) – she used my Name Generator to rebrand her bakery.<br/>
                  (Show name ideas popping up)<br/>
                  Now? Tripled her orders! (show fake 'Order Up!' sticker on her screen)"</p>
                </div>
              </CardContent>
            </Card>

            {/* Scene 3 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Zap className="mr-3 h-5 w-5 text-blue-400" />
                  🛠️ SCENE 3: Feature Demo w/ Reactions (0:31-1:00)
                </CardTitle>
                <CardDescription className="text-slate-300">Newbie typing → AI responds → his face lights up</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-purple-200 italic mb-2"><strong>AI Voice (Playful):</strong></p>
                  <p className="text-slate-300">"Watch Jose go from 'clueless' to 'oh damn, this works!' in 30 seconds.<br/>
                  (Show checklist generating + his fist pump)<br/>
                  Pro tip: My Competitor Spy Tool makes research stupid-easy. (CEO raises eyebrows)"</p>
                </div>
              </CardContent>
            </Card>

            {/* Scene 4 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <MessageCircle className="mr-3 h-5 w-5 text-green-400" />
                  💡 SCENE 4: Testimonials (1:01-1:30)
                </CardTitle>
                <CardDescription className="text-slate-300">"Real people" talking to camera – stock actors or UGC-style clips</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-pink-500">
                    <p className="text-pink-200 font-semibold">Sarah (Mom):</p>
                    <p className="text-slate-300">"I almost quit… then the AI found a niche even I missed!"</p>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-200 font-semibold">CEO:</p>
                    <p className="text-slate-300">"Saved $7k on useless FB ads. Worth every penny."</p>
                  </div>
                  <p className="text-xs text-slate-400 italic">Text overlay: "Actual user results – identities protected"</p>
                </div>
              </CardContent>
            </Card>

            {/* Scene 5 */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Target className="mr-3 h-5 w-5 text-purple-400" />
                  🎁 SCENE 5: CTA w/ Faces (1:31-2:30)
                </CardTitle>
                <CardDescription className="text-slate-300">All 3 personas now smiling + screen share of PayPal payment page</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-purple-200 italic mb-2"><strong>AI Voice (Warm):</strong></p>
                  <p className="text-slate-300">"Your turn. First 100 get:<br/>
                  - Free 1:1 strategy session ($500 value)<br/>
                  - My 'Steal Clients' Playbook (see Jose's results!)<br/>
                  (Whispers) Don't let Sarah outshine you…"</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Production Cheatsheet */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-cyan-500/20 mt-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Camera className="mr-3 h-6 w-6 text-cyan-400" />
                🎦 Production Cheatsheet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Where to Get Faces:</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start">
                      <Badge className="bg-green-500 text-white mr-2 mt-1">FREE</Badge>
                      <div>
                        <strong>Stock Videos</strong> (Pexels, Pixabay)<br/>
                        <span className="text-sm text-slate-400">Search "frustrated entrepreneur" / "happy businesswoman"</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-blue-500 text-white mr-2 mt-1">PAID</Badge>
                      <div>
                        <strong>Actors</strong> (Upwork, Fiverr)<br/>
                        <span className="text-sm text-slate-400">Budget: ~$50-100 per actor for 2-3 expressions</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-purple-500 text-white mr-2 mt-1">UGC</Badge>
                      <div>
                        <strong>UGC Style</strong> (Film friends saying 1 line)<br/>
                        <span className="text-sm text-slate-400">Blur faces if anonymous</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4 text-lg">Editing Hacks:</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li><strong>Reaction Shots:</strong> Zoom in on faces when AI gives answers (emotion = trust)</li>
                    <li><strong>Text Overlays:</strong> Add captions like "Real user (identity protected)" for social proof</li>
                    <li><strong>Music Swells:</strong> Upbeat tone when showing successes</li>
                  </ul>

                  <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <h4 className="text-red-300 font-semibold mb-2">⚠️ Legal Note:</h4>
                    <p className="text-red-200 text-sm">Use only royalty-free faces or paid actors with signed releases.</p>
                  </div>
                </div>
              </div>

              <Separator className="my-8 bg-cyan-500/20" />
              
              <div className="text-center">
                <h3 className="text-white font-semibold mb-4 text-lg">💡 Why This Converts Better</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-cyan-300 font-semibold">5x More Memorable</p>
                    <p className="text-slate-400 text-sm">Faces vs text-only (Stanford Research)</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-green-300 font-semibold">Diverse Casting</p>
                    <p className="text-slate-400 text-sm">Widens audience relatability</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-purple-300 font-semibold">Problem → Solution Arc</p>
                    <p className="text-slate-400 text-sm">Mirrors viewer's journey</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Script Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">🎥 Your Success Starts Here</h2>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-white text-xl font-semibold mb-6">Video Script Outline</h3>
            <div className="text-left space-y-4 text-slate-300">
              <div><strong className="text-purple-300">0:00-0:15</strong> – "Stuck on your business journey? Meet your 24/7 AI consultant..."</div>
              <div><strong className="text-purple-300">0:16-0:30</strong> – "Whether you're starting out (show startup checklist) or scaling up (show analytics dashboard)..."</div>
              <div><strong className="text-purple-300">0:31-0:45</strong> – "Get instant tools like our Business Name Generator (demo) and step-by-step coaching..."</div>
              <div><strong className="text-purple-300">0:46-0:60</strong> – "Join 1,000+ success stories – chat free now!" (CTA button pop-up)</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-400">
            <p>© 2024 AI Business Consultant – Anonymous. Powerful. Always On.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
