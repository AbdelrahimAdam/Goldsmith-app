import { 
  MdDashboard, 
  MdInventory, 
  MdPriceChange, 
  MdBarChart, 
  MdPerson, 
  MdSettings, 
  MdSecurity, 
  MdHistory, 
  MdStore, 
  MdGroups, 
  MdAssignment, 
  MdContactPhone, 
  MdPaid, 
  MdGavel 
} from 'react-icons/md';  // Import icons

const navigationConfig = [
  {
    path: '/dashboard',
    label: 'sidebar.dashboard',
    icon: MdDashboard,
    roles: ['admin', 'superadmin', 'user']  // Allowed roles
  },
  {
    path: '/inventory',
    label: 'sidebar.inventory',
    icon: MdInventory,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/price-tracking',
    label: 'sidebar.priceTracking',
    icon: MdPriceChange,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/analytics',
    label: 'sidebar.analytics',
    icon: MdBarChart,
    roles: ['superadmin']  // Allowed roles
  },
  {
    path: '/profile',
    label: 'sidebar.profile',
    icon: MdPerson,
    roles: ['admin', 'superadmin', 'user']  // Allowed roles
  },
  {
    path: '/settings', 
    label: 'sidebar.settings', 
    icon: MdSettings,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/security',
    label: 'sidebar.security',
    icon: MdSecurity,
    roles: ['superadmin']  // Allowed roles
  },
  {
    path: '/history',
    label: 'sidebar.history',
    icon: MdHistory,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/store',   
    label: 'sidebar.store',   
    icon: MdStore,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/employees',
    label: 'sidebar.employees',
    icon: MdGroups,
    roles: ['superadmin']  // Allowed roles
  },
  {
    path: '/tasks',   
    label: 'sidebar.tasks',   
    icon: MdAssignment,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/contacts', 
    label: 'sidebar.contacts', 
    icon: MdContactPhone,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/payments',
    label: 'sidebar.payments',
    icon: MdPaid,
    roles: ['admin', 'superadmin']  // Allowed roles
  },
  {
    path: '/compliance',
    label: 'sidebar.compliance',
    icon: MdGavel,
    roles: ['superadmin']  // Allowed roles
  } 
]; 

export default navigationConfig;

