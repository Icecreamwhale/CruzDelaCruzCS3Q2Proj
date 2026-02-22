
document.addEventListener('DOMContentLoaded', () => {
  const team = localStorage.getItem('team'); 
  if (!team) return;

  const teamBackgrounds = {
    'Red Bull Racing': 'asset/redbull_bg.jpg',
    'Mercedes': 'asset/mercedes_bg.webp',
    'Ferrari': 'asset/ferrari_bg.jpg',
    'McLaren': 'asset/mclaren_bg.jpg',
    'Aston Martin': 'asset/aston_bg.jpg',
    'Williams': 'asset/williams_bg.jpg',
    'Audi': 'asset/audi_bg.jpg',
    'Cadillac': 'asset/cadillac_bg.jpg',
    'Racing Bulls': 'asset/racingbulls_bg.webp',
    'Haas': 'asset/haas_bg.png'
  };

  const img = teamBackgrounds[team];
  if (img) {
    document.body.style.backgroundImage = `url("${img}")`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }
});

