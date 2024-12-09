import React, { useEffect, useState } from 'react';
import { fetchWorks } from '../api/api';
import WorkCard from '../components/WorkCard';
import AddWorkForm from '../components/AddWorkForm';

const Works: React.FC = () => {
  const [works, setWorks] = useState([]);

  const loadWorks = async () => {
    try {
      const { data } = await fetchWorks();
      setWorks(data);
    } catch (err) {
      console.error('Failed to fetch works', err);
    }
  };

  useEffect(() => {
    loadWorks();
  }, []);

  return (
    <div className="p-6 space-y-4 min-h-screen bg-background">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Works</h1>
        <AddWorkForm onWorkAdded={loadWorks} />
      </div>
      <div className="space-y-4">
        {works.map((work: any) => (
          <WorkCard key={work.id} title={work.title} description={work.description} />
        ))}
      </div>
    </div>
  );
};

export default Works;