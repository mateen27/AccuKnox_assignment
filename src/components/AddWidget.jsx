import React from 'react';

const AddWidgetButton = () => {
  return (
    <div className='col-span-4'>
      <div className='border shadow-sm rounded-lg p-4 bg-gray-50 hover:bg-gray-100 min-h-[150px] transition-colors duration-200 flex flex-col justify-center items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Add Widget</button>
      </div>
    </div>
  );
};

export default AddWidgetButton;