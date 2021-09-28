document.getElementById('header-container').style.backgroundColor = "#44B069";

document.getElementById('footer-container').style.backgroundColor = "#113533";

const emergency = document.querySelectorAll('.emergency-tasks')
for (i = 0; i < emergency.length; i += 1) {
  emergency[i].style.backgroundColor = "#F39E85";
}

const emergencyH3 = document.querySelectorAll('.emergency-tasks h3')
for (i = 0; i < emergencyH3.length; i +=1) {
  emergencyH3[i].style.backgroundColor = "#A501F3"
}

const noEmergency = document.querySelectorAll('.no-emergency-tasks')
for (i = 0; i < noEmergency.length; i +=1) {
  noEmergency[i].style.backgroundColor = "#F8DB5E"
}

const noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3')
for (i = 0; i < noEmergencyH3.length; i +=1) {
  noEmergencyH3[i].style.backgroundColor = "#232525"
}
