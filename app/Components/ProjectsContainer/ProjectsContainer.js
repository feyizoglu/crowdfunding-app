'use client'
import { useEffect } from 'react';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { setProjects } from '@/app/redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '@/app/firebase/firebase-confing';
import format from 'date-fns/format';

function ProjectsContainer({ children }) {
  const projects = useSelector(state => state.auth.projects);
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

      const currentDate = format(new Date(), 'dd/MM/yy');
      const deletionPromises = projectsArr
        .filter((project) => project.timeline[1] < currentDate)
        .map(async (project) => {
          await deleteDoc(doc(db, 'projects', project.docId));
        });

      Promise.all(deletionPromises);
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch])



  return children;
}

export default ProjectsContainer
