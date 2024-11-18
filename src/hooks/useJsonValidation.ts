import { useState } from 'react';

const useJsonValidation = () => {
  const [error, setError] = useState<string | null>(null);

  const validateJson = (text: string) => {
    try {
      JSON.parse(text);
      setError(null);
      return true;
    } catch (e) {
      setError("Invalid JSON syntax");
      return false;
    }
  };

  return { validateJson, error };
};

export default useJsonValidation;
