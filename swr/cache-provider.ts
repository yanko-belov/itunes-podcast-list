export function localStorageProvider(): Map<string, any> {
  const cacheKey = 'app-cache';
  const map = new Map<string, any>(JSON.parse(localStorage?.getItem(cacheKey) || '[]'))

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem(cacheKey, appCache)
  })
  return map
}
