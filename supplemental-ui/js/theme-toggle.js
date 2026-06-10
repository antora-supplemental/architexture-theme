(function() {
  const applyTheme = (theme, save = false) => {
    // Enable transient transitions only during the swap
    document.documentElement.classList.add('is-transitioning');
    
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    
    document.documentElement.style.colorScheme = theme;
    
    if (save && typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    
    // Remove transition class after the duration (400ms matches the CSS)
    setTimeout(() => {
      document.documentElement.classList.remove('is-transitioning');
    }, 450);
  };

  const initToggle = () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    
    const onToggle = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      
      if (!document.startViewTransition) {
        applyTheme(newTheme, true);
        return;
      }

      const winW = window.innerWidth;
      const winH = window.innerHeight;
      const R = 45; 
      const hexW = Math.sqrt(3) * R;
      const cols = Math.ceil(winW / hexW) + 2;
      const rows = Math.ceil(winH / (1.5 * R)) + 2;
      
      let polygons = '';
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const cx = c * hexW + (Math.abs(r) % 2 === 1 ? hexW / 2 : 0);
          const cy = r * 1.5 * R;
          const delay = Math.random() * 0.7;
          
          const pts = [];
          for(let i=0; i<6; i++) {
            const angle_rad = Math.PI / 180 * (60 * i - 30);
            pts.push(`${cx + R * Math.cos(angle_rad)},${cy + R * Math.sin(angle_rad)}`);
          }
          polygons += `<polygon points="${pts.join(' ')}" style="transform-origin: ${cx}px ${cy}px; animation: hexReveal 0.5s ${delay}s both ease-out;" fill="black" />`;
        }
      }

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${winW} ${winH}" width="${winW}" height="${winH}"><style>@keyframes hexReveal { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1.05); opacity: 1; } }</style>${polygons}</svg>`;
      const dataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      
      document.documentElement.style.setProperty('--hex-mask', `url("${dataUri}")`);
      document.documentElement.classList.add('hex-transitioning');

      const transition = document.startViewTransition(() => {
        applyTheme(newTheme, true);
      });

      transition.finished.then(() => {
        document.documentElement.classList.remove('hex-transitioning');
      });
    };

    themeToggle.addEventListener("click", onToggle);
    themeToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
