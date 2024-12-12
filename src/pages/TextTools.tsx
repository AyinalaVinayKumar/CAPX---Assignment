import React, { useState } from 'react';
import { Languages, MessageSquare, Bot, Wand2 } from 'lucide-react';

const TextTools = () => {
  const [selectedTool, setSelectedTool] = useState('translate');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const tools = [
    {
      id: 'translate',
      name: 'Translation',
      icon: Languages,
      description: 'Translate text between languages'
    },
    {
      id: 'summarize',
      name: 'Summarization',
      icon: MessageSquare,
      description: 'Generate concise summaries'
    },
    {
      id: 'chat',
      name: 'AI Chat',
      icon: Bot,
      description: 'Chat with AI assistant'
    },
    {
      id: 'paraphrase',
      name: 'Paraphrasing',
      icon: Wand2,
      description: 'Rewrite text in different styles'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Text Processing Tools</h1>
        <p className="text-gray-400">
          Powerful text processing tools powered by advanced language models.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`p-4 rounded-xl text-center transition-all ${
              selectedTool === tool.id
                ? 'bg-blue-600 border-2 border-blue-400'
                : 'bg-gray-800/50 border-2 border-transparent hover:border-gray-700'
            }`}
          >
            <tool.icon className="h-6 w-6 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">{tool.name}</h3>
            <p className="text-xs text-gray-400">{tool.description}</p>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Input</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your text here..."
            className="w-full h-64 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-white placeholder-gray-500"
          />
          
          {selectedTool === 'translate' && (
            <div className="flex gap-4 mt-4">
              <select className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
              <select className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="es">Spanish</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          )}

          {selectedTool === 'summarize' && (
            <div className="flex gap-4 mt-4">
              <select className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </div>
          )}

          {selectedTool === 'paraphrase' && (
            <div className="flex gap-4 mt-4">
              <select className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="academic">Academic</option>
                <option value="creative">Creative</option>
              </select>
            </div>
          )}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Output</h2>
          <div className="w-full h-64 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg overflow-y-auto">
            <p className="text-gray-400">
              {outputText || 'Processed text will appear here...'}
            </p>
          </div>
          
          <div className="flex gap-4 mt-4">
            <button
              disabled={!inputText}
              className={`flex-1 px-6 py-3 rounded-lg ${
                inputText
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-700 cursor-not-allowed'
              } transition-colors`}
            >
              Process
            </button>
            <button
              disabled={!outputText}
              className={`px-6 py-3 rounded-lg ${
                outputText
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-700 cursor-not-allowed'
              } transition-colors`}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTools;