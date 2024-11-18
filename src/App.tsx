import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import FormGenerator from './components/FormGenerator';

const defaultSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "you@example.com",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address"
      }
    },
    {
      id: "comments",
      type: "textarea",
      label: "Additional Comments",
      required: false,
      placeholder: "Any other details you'd like to share..."
    }
  ]
};

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState(defaultSchema);

  return (
    <>
      <div className="container mx-auto p-4">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">JSON Form Playground</h1>
          <p className="text-md text-gray-500 mt-2">Transform JSON into forms effortlessly!</p>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
            <JsonEditor jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
            <FormGenerator jsonSchema={jsonSchema} />
          </div>
        </div>
      </div>

      <footer className="footer bg-indigo-600 text-white py-3">
        <div className="container text-center">
          <p className="text-sm">
            Crafted with <span style={{ color: 'red' }}>❤️</span> by
            <a href="#" className="text-yellow-400 hover:underline"> Saumya Jain</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
