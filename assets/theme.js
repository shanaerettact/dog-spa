// Theme toggle script: 支援多個切換按鈕 (.theme-toggle)
(function(){
  const toggles = document.querySelectorAll('.theme-toggle');
  const icons = document.querySelectorAll('.theme-icon');

  function setIcon(isDark){
    icons.forEach(ic=>{
      if(isDark){ ic.classList.remove('fa-moon'); ic.classList.add('fa-sun'); }
      else { ic.classList.remove('fa-sun'); ic.classList.add('fa-moon'); }
    });
  }

  function applyTheme(theme){
    if(theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    setIcon(theme === 'dark');
  }

  // 初始化主題（優先順序：localStorage > 系統偏好 > light）
  const saved = localStorage.getItem('theme');
  if(saved){ applyTheme(saved); }
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){ applyTheme('dark'); }
  else { applyTheme('light'); }

  function toggle(){
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setIcon(isDark);
  }

  // 綁定所有具有 .theme-toggle 的按鈕
  toggles.forEach(btn => btn.addEventListener('click', toggle));
})();
