import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import LeaderboardItem from "../../components/leaderboard-items/LeaderboardItem";
import LeaderboardHeader from "../../components/leaderboard-header/LeaderBoardHeader";
import ActionButton from '../../components/action-button/ActionButton'

const Leaderboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    // Get groups data passed from Scoreboard
    if (location.state && location.state.groups) {
      const sortedGroups = location.state.groups.sort((a, b) => b.score - a.score);
      setData(sortedGroups);
    }
  }, [location.state]);

  const handleBackToScoreboard = () => {
    navigate('/');
  };


  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center p-5">Leaderboard</h1>
      <LeaderboardHeader />
      {
        data.map((item, index) => (
          <LeaderboardItem key={index} rank={index + 1} name={item.groupName} score={item.score} />
        ))
      }
      
      <div className="flex justify-end mt-5">
        <ActionButton btnType={"Back"} btnText={"Add New Score"} onClick={handleBackToScoreboard} />
      </div>
    </div>
  );
};

export default Leaderboard;
