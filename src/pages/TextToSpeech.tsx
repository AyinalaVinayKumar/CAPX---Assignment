import React, { useState } from 'react';
import { Volume2, Play, Download, Settings } from 'lucide-react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('en-US-1');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Text to Speech Converter</h1>
        <p className="text-gray-400">
          Transform your text into natural-sounding speech using advanced AI technology.
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
              className="w-full h-40 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-white placeholder-gray-500"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Voice</label>
              <select
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="en-US-1">English (US) - Female</option>
                <option value="en-US-2">English (US) - Male</option>
                <option value="en-GB-1">English (UK) - Female</option>
                <option value="en-GB-2">English (UK) - Male</option>
              </select>
            </div>

            <button
              type="button"
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading || !text}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg ${
                loading || !text
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              } transition-colors`}
            >
              {loading ? (
                'Converting...'
              ) : (
                <>
                  <Play className="h-5 w-5" /> Convert to Speech
                </>
              )}
            </button>

            <button
              type="button"
              disabled={true}
              className="px-6 py-3 bg-gray-700 rounded-lg cursor-not-allowed"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Audio Preview</h2>
        <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-700 rounded-lg">
          <div className="text-center text-gray-500">
            <Volume2 className="h-8 w-8 mx-auto mb-2" />
            <p>Convert text to preview audio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;