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

function normalizeCategoryData(category, items) {
  if (!Array.isArray(items)) return [];

  return items.map(item => {
    if (typeof item !== 'object' || item === null) return item;
    const normalized = { ...item };

    if (category === 'cpu') {
      if ('cores' in normalized && !('coresThreads' in normalized)) {
        normalized.coresThreads = normalized.cores;
      }
      if ('clock' in normalized && !('clock' in normalized)) {
        normalized.clock = normalized.clock;
      }
      if ('tdp' in normalized && typeof normalized.tdp === 'undefined') {
        normalized.tdp = normalized.tdp;
      }
      if ('cooler' in normalized && typeof normalized.cooler === 'undefined') {
        normalized.cooler = normalized.cooler;
      }
    }

    if (category === 'gpu') {
      if ('memory' in normalized && !('memorySize' in normalized)) {
        normalized.memorySize = normalized.memory;
      }
      if ('power' in normalized && !('powerRequirement' in normalized)) {
        normalized.powerRequirement = normalized.power;
      }
    }

    return normalized;
  });
}

function getCategoryData(category, fallbackData, storage = globalThis.localStorage) {
  const stored = getStorageValue(storage, `spechub_${category}_data`);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return normalizeCategoryData(category, parsed);
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
