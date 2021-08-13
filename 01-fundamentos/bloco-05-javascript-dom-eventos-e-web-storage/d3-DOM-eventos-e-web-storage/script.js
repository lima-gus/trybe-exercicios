function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//1
function calendarDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    const liDay = document.createElement('li');
    
    if (day === 24 || day === 25 || day === 31) {
      liDay.className = 'day holiday';
      liDay.innerHTML = day;
      daysList.appendChild(liDay);
    } else if (day === 4 || day === 11 || day === 18 || day === 25) {
      liDay.className = 'day friday';
      liDay.innerHTML = day;
      daysList.appendChild(liDay);
    } else {
      liDay.className = 'day';
      liDay.innerHTML = day;
      daysList.appendChild(liDay);
    }
  }  

}
calendarDays();

//2
function holidayButton(str) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  let buttonDiv = document.querySelector('.buttons-container'); 

  button.innerHTML = str;
  buttonDiv.appendChild(button);
}

holidayButton('Feriados');

//3
function holidayButtonClickEvent() {
  let holidayButton = document.getElementById('btn-holiday');
  let holidays = document.getElementsByClassName('holiday');

  holidayButton.addEventListener('click', function() {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor !== 'green') {
        holidays[i].style.backgroundColor = 'green';
      } else {
        holidays[i].style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }
  });
}

holidayButtonClickEvent();

//4
function fridayButton(str) {
  let button = document.createElement('button');
  button.id = 'btn-friday';
  let buttonDiv = document.querySelector('.buttons-container');

  button.innerHTML = str;
  buttonDiv.appendChild(button);
}

fridayButton('Sexta-feira');

//5
function fridayButtonClickEvent() {
  let fridayButton = document.getElementById('btn-friday');
  let fridays = document.getElementsByClassName('friday');
  const fridayArr = [4, 11, 18, 25];

  fridayButton.addEventListener('click', function() {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== 'Sexta-feira') {
        fridays[i].innerHTML = 'Sexta-feira';
      } else {
        fridays[i].innerHTML = fridayArr[i];
      }
    }
  });
}

fridayButtonClickEvent();

//6
function daysZoomIn() {
  let zoom = document.getElementById('days');

  zoom.addEventListener('mouseover', function(zoomIn) {
  zoomIn.target.style.fontSize = '24px';
  })
}

daysZoomIn();

function daysZoomOut() {
  let zoom = document.getElementById('days');

  zoom.addEventListener('mouseout', function(zoomOut) {
  zoomOut.target.style.fontSize = '20px';
  })
}

daysZoomOut();
