window.onload = function ()    {
    const timerEle = document.getElementById('timer');
    
    
    
    
    
    function getFormatAmPm () {
        const currentTime = new Date();
        let mins = currentTime.getMinutes();
        let hours = currentTime.getHours();
        let seconds = currentTime.getSeconds();

        console.log('validation time', hours, mins, seconds)
        const ampm = hours >=12 ? 'pm' : 'am';
    
        // seconds = seconds < 10 ? '0' + seconds: seconds; 
        mins = mins < 10 ? '0' + mins: mins;
        hours = hours %12;
        hours = hours ? hours : 12;
        seconds = seconds < 10 ? '0' + seconds :  seconds;
    
        const dateTimeFormat = `${hours}:${mins}:${seconds} - ${ampm}`
        console.log('validation', dateTimeFormat)
        setTimeout(getFormatAmPm, 1000);
        timerEle.innerHTML = dateTimeFormat;
        timerEle.textContent = dateTimeFormat
        // return dateTimeFormat;
    
    }

    getFormatAmPm()
}

