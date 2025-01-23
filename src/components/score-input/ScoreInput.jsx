import React from 'react'
import './ScoreInput.css'

const ScoreInput = ({ scoreInput, onScoreInputChange }) => {
  return (
    <div>
        <label htmlFor="score" className="text-2xl font-bold">Score</label>
        <input
          type="number"
          id="score"
          name="score"
          className="border-2 border-black rounded-lg p-2 mx-2"
          value={scoreInput}
          onChange={onScoreInputChange} // Update score input state in parent
        />
    </div>
  )
}

export default ScoreInput
