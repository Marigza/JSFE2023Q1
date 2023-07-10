export const setLocalStorage = (level: number) => {
  (level <= 10) ? localStorage.setItem('level', String(level)) : localStorage.setItem('level', '0');
}

export const getLocalStorage = (level: number) => {
  if (localStorage.getItem('level')) return level;
}