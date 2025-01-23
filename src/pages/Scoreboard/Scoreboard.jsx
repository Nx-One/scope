import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GroupCard from '../../components/group-card/GroupCard'
import ScoreInput from '../../components/score-input/ScoreInput'
import GroupButton from '../../components/group-button/GroupButton'
import ActionButton from '../../components/action-button/ActionButton'

const Scoreboard = () => {
  // State to hold the group names (using an array or object)
  const [groups, setGroups] = useState([
    { id: 1, groupName: 'Group 1', score: null },
    { id: 2, groupName: 'Group 2', score: null },
    { id: 3, groupName: 'Group 3', score: null },
    { id: 4, groupName: 'Group 4', score: null },
  ])

  // Function to handle updating the group name by id
  const updateGroupName = (id, newName) => {
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === id ? { ...group, groupName: newName } : group
      )
    )
  }

  const [scoreInput, setScoreInput] = useState('') // State for the score input
  
  // Update the score for a specific group
  const updateGroupScore = (id, newScore) => {
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === id ? { ...group, score: (group.score || 0) + parseInt(newScore) } : group
      )
    )
  }
  
  // Update the score input value
  const handleScoreInputChange = (e) => {
    setScoreInput(e.target.value)
  }

  // Handle the button click and set score if input is not null
  const handleButtonClick = (id) => {
    if (scoreInput && !isNaN(scoreInput)) {
      updateGroupScore(id, scoreInput)
      setScoreInput('') // Reset score input after submitting
    } else {
      alert("Please enter a valid score")
    }
  }

  const navigate = useNavigate();

  const handleFinish = () => {
    // Navigate to Leaderboard with groups data
    navigate('/leaderboard', {
      state: { groups }
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        SCORE BOARD
      </h1>
      <h1 className="text-4xl font-bold text-center mt-2">
        CERDAS CERMAT
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 my-10">
          {groups.map(group => (
            <div key={group.id}>
              <GroupCard
                groupName={group.groupName}
                setGroupName={(newName) => updateGroupName(group.id, newName)}
                score={group.score}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <ScoreInput scoreInput={scoreInput} onScoreInputChange={handleScoreInputChange} />
        </div>
        <div className="flex justify-center justify-items-center gap-0 mt-5">
          {groups.map(group => (
            <div key={group.id}>
              <GroupButton groupName={group.groupName} onClick={() => handleButtonClick(group.id)} />
            </div>
          ))}
        </div>
        <div className="flex justify-center justify-items-center gap-0 mt-5">
          <ActionButton btnType={"success"} btnText={"Finish"} onClick={handleFinish} />
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
