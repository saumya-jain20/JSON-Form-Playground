# JSON Form Playground

JSON Form Playground is an intuitive tool that converts JSON schemas into interactive, dynamic forms. It allows you to create and edit JSON schemas in a user-friendly editor and instantly preview the corresponding form.

## Features

- **JSON Schema Editor**: Edit your form's structure using JSON in a dedicated editor.
- **Dynamic Form Generator**: Visualize your JSON schema as a live form.
- **Field Support**:
  - Text, Email, Phone, Select, Textarea, File, Date, etc.
  - Validation for patterns, required fields, and custom placeholders.
- **Real-time Updates**: Forms dynamically update as you edit the JSON schema.
- **Responsive Design**: Fully responsive layout for desktop and mobile screens.
- **Theming**: Clean, professional UI with Tailwind CSS.

---

## Demo

https://json-form-playground.vercel.app/

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/json-form-playground.git
   cd json-form-playground
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Folder Structure

```plaintext
.
├── public/             # Public assets
├── src/
│   ├── components/
│   │   ├── JsonEditor.tsx      # JSON Schema editor
│   │   ├── FormGenerator.tsx   # Form generation logic
│   │   └── FieldRenderer.tsx   # Renders individual fields dynamically
│   ├── App.tsx                # Main application logic
│   ├── index.tsx              # React entry point
│   └── styles/                # Tailwind and custom styles
├── README.md           # Project documentation
├── package.json        # Dependencies and scripts
└── tailwind.config.js  # Tailwind CSS configuration
```

---

## Usage

1. **Edit JSON Schema**:
   - Update the schema in the **JSON Editor** (left pane).
   - Fields like `id`, `type`, `label`, `required`, and `placeholder` define the form structure.

2. **Preview Live Form**:
   - The **Form Generator** (right pane) renders the form based on your JSON schema.

### Example JSON Schema

```json
{
  "formTitle": "Feedback Form",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "rating",
      "type": "select",
      "label": "Rating",
      "required": true,
      "options": [
        { "label": "Excellent", "value": "5" },
        { "label": "Good", "value": "4" },
        { "label": "Average", "value": "3" },
        { "label": "Poor", "value": "2" },
        { "label": "Terrible", "value": "1" }
      ]
    },
    {
      "id": "comments",
      "type": "textarea",
      "label": "Comments",
      "placeholder": "Share your thoughts..."
    }
  ]
}
```

---

## Dependencies

- **React**: Frontend framework for building the app.
- **Tailwind CSS**: For styling and layout.
- **TypeScript**: Type-safe JavaScript for better development.
- **Ace Editor**: JSON code editing experience.

---

## Contribution

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Commit your changes: `git commit -m "Description of changes"`.
4. Push the branch: `git push origin feature-branch-name`.
5. Open a pull request.

---

### Crafted with ❤️ by [Saumya Jain](mailto:jainsaumya012@gmail.com).
