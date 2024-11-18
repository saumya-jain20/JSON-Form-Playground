import React, { useState } from 'react';
import useJsonValidation from '../hooks/useJsonValidation';

interface JsonEditorProps {
  jsonSchema: object;
  setJsonSchema: (schema: object) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ jsonSchema, setJsonSchema }) => {
  const [jsonText, setJsonText] = useState(JSON.stringify(jsonSchema, null, 2));
  const { validateJson, error } = useJsonValidation();

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedText = e.target.value;
    setJsonText(updatedText);
    const isValid = validateJson(updatedText);
    if (isValid) {
      setJsonSchema(JSON.parse(updatedText));
    }
  };

  return (
    <div className="json-editor-container">
      <h2 className="json-editor-title">JSON Editor</h2>
      
      <textarea
        value={jsonText}
        onChange={handleJsonChange}
        className="json-textarea"
        placeholder="Paste or edit your JSON here..."
      />
      
      {/* Show error message if JSON is invalid */}
      {error && <p className="json-error">{error}</p>}
    </div>
  );
};

export default JsonEditor;
