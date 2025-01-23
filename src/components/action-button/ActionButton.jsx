import React from 'react'
import './ActionButton.css'

const ActionButton = ({btnType,btnText, onClick = null}) => {
  return (
    <div>
        { btnType === 'gray' ? (
            <button 
              type="button" 
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              {...(onClick && {onClick})}
            >{btnText}</button>
          ) : btnType === 'success' ? (
            <button 
              type="button" 
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              {...(onClick && {onClick})}
            >{btnText}</button>
          ) : (
            <button 
              type="button" 
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              {...(onClick && {onClick})}
            >{btnText}</button>
          )
        }
    </div>
  )
}

export default ActionButton
