import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  validation?: {
    pattern: string;
    message: string;
  };
  options?: { value: string; label: string }[];
}

interface JsonSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface FormGeneratorProps {
  jsonSchema: JsonSchema;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ jsonSchema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">{jsonSchema.formTitle}</h2>
      <p className="mb-4">{jsonSchema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {jsonSchema.fields.map((field) => (
          <div key={field.id}>
            <label className="block mb-1">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "select" ? (
              <select
                {...register(field.id, { required: field.required })}
                className="border p-2 w-full"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                {...register(field.id, { required: field.required })}
                placeholder={field.placeholder}
                className="border p-2 w-full"
              />
            ) : (
              <input
                type={field.type}
                {...register(field.id, {
                  required: field.required,
                  pattern: field.validation && {
                    value: new RegExp(field.validation.pattern),
                    message: field.validation.message,
                  },
                })}
                placeholder={field.placeholder}
                className="border p-2 w-full"
              />
            )}
            {errors[field.id] && (
              <p className="text-red-500 text-sm">
                {(errors[field.id]?.message as string) || "This field is required"}
              </p>
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
