import React from 'react';
import {
  StyledLeaderboardWrapper,
  StyledLeaderboardRow,
} from './styles/StyledLeaderboard';

const compareValues = (key, order = 'asc') => {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};

const Leaderboard = ({ text, leaderboardList }) => (
  <StyledLeaderboardWrapper>
    <div>{text}</div>
    {leaderboardList
      .sort(compareValues('userScore', 'desc'))
      .slice(0, 5)
      .map((user, i) => {
        return (
          <StyledLeaderboardRow
            key={user.id}
          >{`${user.userName} - ${user.userScore}`}</StyledLeaderboardRow>
        );
      })}
  </StyledLeaderboardWrapper>
);

export default Leaderboard;
