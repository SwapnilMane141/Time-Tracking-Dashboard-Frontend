'use strict'


const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const profileBox = `
    <div class="profile-box">
        <div class="profile-box__upper">
            <img src="Images/image-jeremy.png" alt="Jeremy Img" class="profile-img">
            <span class="report">Report for</span>
            <div class="profile-name">Jeremy Robson</div>
        </div>
        <div class="profile-box__bottom">
            <span class='space'></span>
            <a class="schedule schedule--daily">Daily</a>
            <a class="schedule schedule--weekly">Weekly</a>
            <a class="schedule schedule--monthly schedule-active small-margin">Monthly</a>
        </div>
    </div>
    `


  
const box = document.querySelector(".box__first");
  
box.insertAdjacentHTML('afterbegin',profileBox);

const displayTimeframes = function(data, profileBox,selectedTimeframe='daily'){
    // box.innerHTML = '';
    const timeCardBoxes = document.querySelectorAll('.box__first--work');
    timeCardBoxes.forEach((element)=> element.remove());
    
    
    let startIndex = 1;
    for(const x of data){
        const html = `
            <div class="box__first--work">
                <div class="top-img top-img--${startIndex}">
                    <img class='icon-img' src="Images/icon-${x.title.toLowerCase()}.svg" alt="${x.title} Icon">
                </div>
                <div class="time-card">
                    <div class="category">
                        <div class="category__text">
                            ${x.title}
                        </div>
                        <div class="category__options">
                            <img src="Images/icon-ellipsis.svg" alt="">
                        </div>
                    </div>
                    <div class="time_count">
                        <div class="time_count__hours">
                            ${x.timeframes[selectedTimeframe].current}hrs
                        </div>
                        <div class="time_count__lastWeek">
                            Last Week - ${x.timeframes[selectedTimeframe].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
        `;

        box.insertAdjacentHTML('afterbegin',html);
        startIndex += 1;
        // console.log(html);
    }
}




// console.log(data[5]);
// for(const x of data){
//     console.log(x,x.timeframes.daily.current,x.timeframes.monthly.previous);
// }

// Default Time Frame - Daily:
displayTimeframes(data,profileBox,'monthly');


let scheduleButtons = document.querySelectorAll('.schedule');


scheduleButtons.forEach((schedule) => schedule.addEventListener('click',function(){
    const selectedSchedule = (schedule.classList[1]).split('--')[1]; // Gives daily, weekly, monthly text
    scheduleButtons.forEach((element) => element.classList.remove("schedule-active"));
    schedule.classList.add('schedule-active');
    displayTimeframes(data,profileBox,selectedSchedule);
}));

