
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users, Play, Star, Zap, Target, MessageCircle, Camera, Heart, TrendingUp } from "lucide-react";

const EnhancedVideoScriptSection = () => {
  return (
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
  );
};

export default EnhancedVideoScriptSection;
