
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentUTC = new Date().toUTCString();
    utcTimeElement.textContent = `Current UTC Time: ${currentUTC}`;

