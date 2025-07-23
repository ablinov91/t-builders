// Модуль для работы с DOM
export const domUtils = {
  updateResult: (content) => {
    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.innerHTML = content;
    }
  },
  
  toggleTheme: () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
};

// Инициализация темы при загрузке
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});
