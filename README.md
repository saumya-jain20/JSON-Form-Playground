
# Dynamic Form Generator

This is a dynamic form generator application that takes a JSON schema as input and generates a styled, functional form in real-time. The application features a JSON editor on the left and a form preview on the right. The form updates in real-time as the JSON is edited. This project is built using React, TypeScript, Tailwind CSS, and React Hook Form.

## Features
- **JSON Schema Editor**: A real-time JSON editor with syntax highlighting and validation.
- **Dynamic Form Generation**: The form updates in real-time as the JSON schema is edited.
- **Field Types Support**: Supports various field types like text, email, select, radio, and textarea.
- **Form Validation**: Displays error messages for required fields and custom validation (e.g., pattern matching for email).
- **Form Submission**: Submits the form data and logs it to the console with a success message.
- **Responsive Layout**: The form is mobile-responsive, with the editor and form stacked on smaller screens.
- **Styled with Tailwind CSS**: Consistent styling using Tailwind CSS.
- **Real-Time Updates**: Both the editor and form preview are updated instantly.

## Demo

A live version of the app can be viewed [here](#).

## Requirements

- Node.js (v16.0 or higher)
- npm or yarn

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/dynamic-form-generator.git
```

### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies.

```bash
cd dynamic-form-generator
npm install
```
or
```bash
yarn install
```

### 3. Run the Application
Start the development server.

```bash
npm start
```
or
```bash
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
/src
  /components
    - FormGenerator.tsx    # Component for rendering the generated form
    - JsonEditor.tsx       # Component for editing the JSON schema
  /hooks
    - useJsonValidation.ts # Custom hook for validating JSON schema
  index.css                # Global styles
  App.tsx                  # Main component containing the split-screen layout
  index.tsx                # Entry point for React app
  tailwind.config.js       # Tailwind CSS configuration
  tsconfig.json            # TypeScript configuration
```

## Example JSON Schema

```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    }
  ]
}
```

### Fields:
- **id**: The unique identifier for the field (used for form handling).
- **type**: The field type (`text`, `email`, `select`, `textarea`, etc.).
- **label**: The label displayed next to the field.
- **required**: Boolean flag to indicate if the field is required.
- **validation**: Custom validation for fields like email (optional).
- **options**: For `select` and `radio` field types, an array of options to choose from.

## Testing

### 1. Unit Tests
Unit tests are written using Jest. To run the tests, execute:

```bash
npm test
```
or
```bash
yarn test
```

### 2. E2E Tests
End-to-end tests using Playwright are included. To run the E2E tests, use:

```bash
npx playwright test
```

## Deployment

You can deploy this project on Vercel or Netlify.

## Future Enhancements

- **Copy Form JSON Button**: Add a button to copy the generated JSON schema.
- **Dark Mode Support**: Implement a dark mode toggle.
- **Download Submissions**: Allow users to download form submissions as JSON files.