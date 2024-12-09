import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { createWork } from '../api/api';

interface AddWorkFormProps {
  onWorkAdded: () => void; // Callback to refresh the works list after adding
}

const AddWorkForm: React.FC<AddWorkFormProps> = ({ onWorkAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAddWork = async () => {
    setIsSubmitting(true);
    try {
      await createWork(title, description);
      toast({ description: 'Work added successfully!' });
      onWorkAdded(); // Refresh works list
      setTitle('');
      setDescription('');
    } catch (error) {
      toast({ description: 'Failed to add work. Try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Work</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Work</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter work title"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter work description"
              className="mt-1"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleAddWork}
            disabled={isSubmitting || !title || !description}
            className="w-full"
          >
            {isSubmitting ? 'Adding...' : 'Add Work'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddWorkForm;
