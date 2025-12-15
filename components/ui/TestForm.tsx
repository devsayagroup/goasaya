import React from 'react';
import { appendToGS } from '@/app/api/appendToGS';

const TestForm = () => {
  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const result = await appendToGS(data);
    if (result) {
      console.log('Data appended to Google Sheet!');
    } else {
      console.error('Failed to append data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestForm;