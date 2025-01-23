import React from 'react'

const LeaderboardItem = ({ rank, name, score }) => {
  return (
    <div className="flex p-4 border-b border-gray-200">
      <div className="w-1/4 text-center">{rank}</div>
      <div className="w-1/2 text-center">{name}</div>
      <div className="w-1/4 text-center">{score}</div>
    </div>
  )
}

export default LeaderboardItem
