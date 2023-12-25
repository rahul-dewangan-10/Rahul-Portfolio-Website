document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const modeLabel = document.getElementById('modeLabel');
  const stylesheet = document.getElementById('stylesheet');

  modeToggle.addEventListener('change', () => {
    console.log("mode switched");
      if (modeToggle.checked) {
          modeLabel.textContent = 'Dark Theme';
          stylesheet.href = 'dark_experiment.css'; // Link to your dark mode stylesheet
      } else {
          modeLabel.textContent = 'Light Theme';
          stylesheet.href = 'style.css'; // Link to your bright mode stylesheet
      }
  });

  function loadHTML(htmlFile) {
      fetch(htmlFile)
          .then(response => response.text())
          .then(html => document.body.innerHTML = html)
          .catch(error => console.error('Error loading HTML:', error));
  }
});
