let works = [
  {
    id: 1,
    title: "Physics Research",
    description: "Study of quantum mechanics",
  },
  { id: 2, title: "Math Research", description: "Analysis of integrals" },
  { id: 3, title: "New Work", description: "Details about the work" },
];

// Simulates a fetch request
export const mockFetchWorks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(works);
    }, 500); // Simulate API delay
  });
};

// Simulates a POST request
export const mockCreateWork = (title: string, description: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newWork = { id: works.length + 1, title, description };
      works = [...works, newWork]; // Create a new array reference
      resolve(newWork);
    }, 500); // Simulate API delay
  });
};
