let count = 0;

let intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);

   /* if (count === 3) {
        clearInterval(intervalId);
    }*/
}, 1000);