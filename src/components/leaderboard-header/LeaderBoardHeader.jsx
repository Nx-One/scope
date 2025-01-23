import React from 'react'

const LeaderBoardHeader = () => {
  return (
    <div className="flex bg-gray-800 text-white p-4 rounded-t-md">
      <div className="w-1/4 font-semibold text-center">Rank</div>
      <div className="w-1/2 font-semibold text-center">Player</div>
      <div className="w-1/4 font-semibold text-center">Score</div>
    </div>
  )
}

export default LeaderBoardHeader
