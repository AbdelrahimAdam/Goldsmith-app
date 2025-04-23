import { getAllOfflineTransactions } from './storage';

export async function syncOfflineTransactions() {
  if (navigator.onLine) {
    const pending = await getAllOfflineTransactions();
    for (const tx of pending) {
      await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tx),
      });
    }
  }
}

