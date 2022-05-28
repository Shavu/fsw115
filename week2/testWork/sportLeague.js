fetch('https://api-football-standings.azharimm.site/leagues')
  .then(response => response.json())
  .then(data => document.write(data));
  

  
