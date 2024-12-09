import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@shadcn/ui/card';

interface WorkCardProps {
  title: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description }) => {
  return (
    <Card className="w-full border">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
