
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const currentDayOfWeek = daysOfWeek[today.getDay()];

    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;


    
   function updateUTCTime (){
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentUTC = new Date().toUTCString();
    utcTimeElement.textContent = `Current UTC Time: ${currentUTC}`;
   }

   updateUTCTime();

   setInterval(updateUTCTime, 1000);

