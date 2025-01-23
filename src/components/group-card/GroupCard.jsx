import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './GroupCard.css'

const GroupCard = ({ groupName, setGroupName, score }) => {
  const [isEditing, setIsEditing] = useState(false) // To toggle between view and edit modes

  // Handle the change in the input field
  const handleInputChange = (e) => {
    setGroupName(e.target.value)
  }

  // Toggle editing mode when the button is clicked
  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  // Handle saving the new group name (for simplicity, we'll assume it's saved immediately)
  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <div>
      <div className="max-w-72 rounded overflow-hidden shadow-[rgba(0,0,15,0.5)_7px_6px_5px_0px] shadow-cyan-500 border-2 border-cyan-500 bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-center">
            {isEditing ? (
              <input
                type="text"
                value={groupName}
                onChange={handleInputChange}
                className="border-2 border-cyan-500 p-1 max-w-full"
              />
            ) : (
              groupName
            )}
            {isEditing ? (
            <div className="text-center mt-4">
              <button onClick={handleSave} className="bg-cyan-500 text-white py-1 px-3 rounded">
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          ): (
            <button onClick={handleEditClick} className='ml-2'>
              <FontAwesomeIcon icon={faPencil} />
            </button>
          )}
          </div>
          <div className="border-t-2 border-dashed"></div>
          <h1 className="text-center text-9xl font-bold my-5">
            {score !== null ? score : '0'}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default GroupCard
