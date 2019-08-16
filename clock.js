class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    const date = new Date();
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();  
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    if (this.seconds < 59) {
      this.seconds++;
    } else {
      this.seconds = 0;
      if (this.minutes < 59) {
        this.minutes++;
      } else {
        this.minutes = 0;
        if (this.hour < 24) {
          this.hour ++;
        } else {
          this.hour = 0;
        }
      }

    }
    this.printTime();
  }
}

const clock = new Clock();