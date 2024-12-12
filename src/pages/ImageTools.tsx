import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Wand2, Cube } from 'lucide-react';

const ImageTools = () => {
  const [selectedTool, setSelectedTool] = useState('generate');
  
  const tools = [
    {
      id: 'generate',
      name: 'Text to Image',
      icon: Wand2,
      description: 'Generate images from text descriptions'
    },
    {
      id: 'enhance',
      name: 'Image Enhancement',
      icon: ImageIcon,
      description: 'Enhance and upscale images'
    },
    {
      id: '3d',
      name: '3D Conversion',
      icon: Cube,
      description: 'Convert images to 3D models'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">AI Image Tools</h1>
        <p className="text-gray-400">
          Transform and generate images using powerful AI models.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`p-6 rounded-xl text-left transition-all ${
              selectedTool === tool.id
                ? 'bg-blue-600 border-2 border-blue-400'
                : 'bg-gray-800/50 border-2 border-transparent hover:border-gray-700'
            }`}
          >
            <tool.icon className="h-8 w-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-400">{tool.description}</p>
          </button>
        ))}
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6">
        {selectedTool === 'generate' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Text to Image Generation</h2>
            <textarea
              placeholder="Describe the image you want to generate..."
              className="w-full h-32 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-white placeholder-gray-500 mb-6"
            />
            <button className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Generate Image
            </button>
          </div>
        )}

        {selectedTool === 'enhance' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Image Enhancement</h2>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center mb-6">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <p className="text-gray-400 mb-2">Drag and drop an image here</p>
              <p className="text-sm text-gray-500">or</p>
              <button className="mt-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                Browse Files
              </button>
            </div>
          </div>
        )}

        {selectedTool === '3d' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">3D Model Conversion</h2>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center mb-6">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <p className="text-gray-400 mb-2">Upload an image to convert to 3D</p>
              <p className="text-sm text-gray-500">Supported formats: JPG, PNG</p>
              <button className="mt-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                Select Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageTools;