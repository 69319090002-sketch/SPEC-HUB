function getStorageValue(storage, key) {
  if (!storage) return null;
  if (typeof storage.getItem === 'function') {
    return storage.getItem(key);
  }
  if (Object.prototype.hasOwnProperty.call(storage, key)) {
    return storage[key];
  }
  return null;
}

function setStorageValue(storage, key, value) {
  if (!storage) return;
  if (typeof storage.setItem === 'function') {
    storage.setItem(key, value);
  } else {
    storage[key] = value;
  }
}

function getCategoryData(category, fallbackData, storage = globalThis.localStorage) {
  const stored = getStorageValue(storage, `spechub_${category}_data`);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    } catch (error) {
      console.warn('Failed to parse stored data', error);
    }
  }

  return Array.isArray(fallbackData) ? fallbackData : [];
}

function saveCategoryData(category, data, storage = globalThis.localStorage) {
  setStorageValue(storage, `spechub_${category}_data`, JSON.stringify(data));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getCategoryData, saveCategoryData };
}
