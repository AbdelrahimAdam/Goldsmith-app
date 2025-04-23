import { openDB } from 'idb';

const dbPromise = openDB('goldsmith-db', 1, {
  upgrade(db) {
    db.createObjectStore('transactions');
  },
});

export async function saveTransactionOffline(data: any) {
  const db = await dbPromise;
  await db.put('transactions', data, Date.now().toString());
}

export async function getAllOfflineTransactions() {
  const db = await dbPromise;
  return await db.getAll('transactions');
}

