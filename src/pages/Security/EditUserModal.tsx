import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: { id: string; name: string; email: string; role: string }) => void;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

const EditUserModal: React.FC<EditUserModalProps> = ({ isOpen, onClose, onSave, user }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(isOpen);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  }, [user]);

  if (!isOpen && !show) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: user.id, name, email, role });
    onClose();
  };

  return (
    <div className={classNames(
      'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300',
      isOpen ? 'bg-black/40 backdrop-blur-sm opacity-100' : 'opacity-0 pointer-events-none'
    )}>
      <div className={classNames(
        'transform transition-all duration-300 w-full max-w-md rounded-xl shadow-xl px-6 py-6',
        'backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-300/30',
        'text-gray-800 dark:text-gray-200',
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      )}>
        <h2 className="text-2xl font-semibold text-yellow-200 mb-6">{t('Edit User')}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">{t('Name')}</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white/70 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 border border-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">{t('Email')}</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-white/70 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 border border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">{t('Role')}</label>
            <select
              className="w-full px-4 py-2 rounded-md bg-white/70 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 border border-gray-300"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">{t('User')}</option>
              <option value="admin">{t('Admin')}</option>
              <option value="superadmin">{t('Super Admin')}</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md shadow-sm"
            >
              {t('Cancel')}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-200 hover:bg-yellow-300 text-gray-900 rounded-md shadow-sm"
            >
              {t('Save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;

