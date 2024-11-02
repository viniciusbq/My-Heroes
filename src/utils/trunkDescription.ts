import { useEffect, useState } from 'react';

export const truncateDescription = (description: string) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!description) {
    return;
  }

  const words = description.split(' ');
  return words.length > 50 && isSmallScreen
    ? words.slice(0, 30).join(' ') + '...'
    : description;
};
