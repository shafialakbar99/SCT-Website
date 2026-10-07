/**
 * Safe Storage Utility
 * Prevents DOMException / SecurityError crashes in restricted iframe environments (AI Studio preview,
 * incognito mode, cross-origin frames, third-party cookie blocking) by falling back to an in-memory store.
 */

const memoryStore = new Map<string, string>();

function isStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    const testKey = '__hf_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const canUseLocalStorage = isStorageAvailable();

export const safeStorage = {
  getItem: (key: string): string | null => {
    if (canUseLocalStorage) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        // Fallback to memory
      }
    }
    return memoryStore.get(key) ?? null;
  },

  setItem: (key: string, value: string): void => {
    if (canUseLocalStorage) {
      try {
        window.localStorage.setItem(key, value);
        return;
      } catch {
        // Fallback to memory
      }
    }
    memoryStore.set(key, value);
  },

  removeItem: (key: string): void => {
    if (canUseLocalStorage) {
      try {
        window.localStorage.removeItem(key);
        return;
      } catch {
        // Fallback to memory
      }
    }
    memoryStore.delete(key);
  },

  getAllKeys: (): string[] => {
    if (canUseLocalStorage) {
      try {
        return Object.keys(window.localStorage);
      } catch {
        // Fallback to memory
      }
    }
    return Array.from(memoryStore.keys());
  }
};
