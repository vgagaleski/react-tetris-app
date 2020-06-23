import { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';

export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('Leaderboard')
      .onSnapshot((snapshot) => {
        const newLeaderboard = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(newLeaderboard);
        setLeaderboard(newLeaderboard);
      });
  }, []);

  return [leaderboard, setLeaderboard];
};
