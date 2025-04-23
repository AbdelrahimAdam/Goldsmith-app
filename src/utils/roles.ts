export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  USER = 'user',
}

export const hasSuperAdminAccess = (role?: string) => role === UserRole.SUPER_ADMIN;

