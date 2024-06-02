
export const applyTheme = (): void => {
  const savedTheme = localStorage.getItem('isDarkMode');
  const isDarkMode = savedTheme ? JSON.parse(savedTheme) : true;

  if (isDarkMode) {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
  } else {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
  }
};

export const setDarkMode = (isDarkMode: boolean): void => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
  } else {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
  }

  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
};

export const toggleDarkMode = (): void => {
  const savedTheme = localStorage.getItem('isDarkMode');
  const isDarkMode = savedTheme ? JSON.parse(savedTheme) : true;
  setDarkMode(!isDarkMode);
};

export const getCurrentTheme = (): boolean => {
  const savedTheme = localStorage.getItem('isDarkMode');
  return savedTheme ? JSON.parse(savedTheme) : true;
};
