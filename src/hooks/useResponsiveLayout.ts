import { useEffect, useState } from 'react';

type LayoutType = 'mobile' | 'tablet' | 'desktop';

const useResponsiveLayout = (): LayoutType => {
  const [layout, setLayout] = useState<LayoutType>('desktop');

  const updateLayout = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setLayout('mobile');
    } else if (width >= 640 && width < 1024) {
      setLayout('tablet');
    } else {
      setLayout('desktop');
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return layout;
};

export default useResponsiveLayout;

