// src/layouts/AdminLayout.tsx

import React, { ReactNode } from 'react';
import MobileLayout from './MobileLayout';
import TabletLayout from './TabletLayout';
import DesktopLayout from './DesktopLayout';

interface AdminLayoutProps {
  children: ReactNode;
  layout?: 'mobile' | 'tablet' | 'desktop'; // Optional layout prop
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, layout = 'desktop' }) => {
  switch (layout) {
    case 'mobile':
      return <MobileLayout>{children}</MobileLayout>;
    case 'tablet':
      return <TabletLayout>{children}</TabletLayout>;
    case 'desktop':
    default:
      return <DesktopLayout>{children}</DesktopLayout>; // Safe fallback
  }
};

export default AdminLayout;

