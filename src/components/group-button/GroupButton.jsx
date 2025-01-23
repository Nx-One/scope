import React from 'react'
import './GroupButton.css'

const GroupButton = ({ groupName, onClick }) => {
  return (
    <div className='max-w-100'>
        <button 
        type="button" 
        className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
        onClick={onClick} // Trigger the onClick to update the score
        >
          {groupName}
        </button>
    </div>
  )
}

export default GroupButton
