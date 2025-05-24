document.addEventListener("DOMContentLoaded", function () {
  // Set current year and last modified
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const modifiedEl = document.getElementById("lastModified");
  if (modifiedEl) modifiedEl.textContent = document.lastModified;

  // Wind chill calculation
  function calculateWindChill(tempC, windKmh) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
  }

  const tempEl = document.getElementById("temperature");
  const windEl = document.getElementById("windSpeed");
  const chillEl = document.getElementById("windChill");

  if (tempEl && windEl && chillEl) {
    const temperature = parseFloat(tempEl.textContent);
    const windSpeed = parseFloat(windEl.textContent);

    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
      windChill = calculateWindChill(temperature, windSpeed) + "°C";
    }

    chillEl.textContent = windChill;
  }
});

