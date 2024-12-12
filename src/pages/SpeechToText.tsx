import React, { useState } from 'react';
import { Mic, StopCircle, RotateCcw, FileText } from 'lucide-react';

const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const resetTranscription = () => {
    setTranscription('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Speech to Text Converter</h1>
        <p className="text-gray-400">
          Convert spoken words into text in real-time using advanced speech recognition.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recording</h2>
          
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-700 rounded-lg mb-6">
            <button
              onClick={toggleRecording}
              className={`p-8 rounded-full ${
                isRecording 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } transition-colors mb-4`}
            >
              {isRecording ? (
                <StopCircle className="h-8 w-8" />
              ) : (
                <Mic className="h-8 w-8" />
              )}
            </button>
            <p className="text-gray-400">
              {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={resetTranscription}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RotateCcw className="h-5 w-5" /> Reset
            </button>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Transcription</h2>
          
          <div className="h-64 mb-6">
            {transcription ? (
              <div className="h-full p-4 bg-gray-900 rounded-lg overflow-y-auto">
                <p className="text-gray-300">{transcription}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-700 rounded-lg text-gray-500">
                <FileText className="h-8 w-8 mb-2" />
                <p>Transcribed text will appear here</p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              disabled={!transcription}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg ${
                transcription
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-700 cursor-not-allowed'
              } transition-colors`}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;