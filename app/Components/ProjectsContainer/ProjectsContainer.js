'use client'
import { useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setProjects } from '@/app/redux/features/authSlice';
import { db } from '@/app/firebase/firebase-confing';

function ProjectsContainer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, 'projects'));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      const projectsArr = querySnapShot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          docId: doc.id,
        };
      });
      dispatch(setProjects(projectsArr));
    })
    return () => {
      unsubscribe();
    };
  }, [
  ])
  return children;
}

export default ProjectsContainer
