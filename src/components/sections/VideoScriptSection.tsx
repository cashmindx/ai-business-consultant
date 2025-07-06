
const VideoScriptSection = () => {
  return (
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
  );
};

export default VideoScriptSection;
