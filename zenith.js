const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  const thirdInfo = localStorage.getItem('third-info');
  const fourInfo = localStorage.getItem('four-info');
  const fiveInfo = localStorage.getItem('five-info');
  const sixInfo = localStorage.getItem('six-info');
 
 
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  document.getElementById('third-info').textContent = thirdInfo;
  document.getElementById('four-info').textContent = fourInfo;
  document.getElementById('five-info').textContent = fiveInfo;
  document.getElementById('six-info').textContent = sixInfo;











months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


 date_data = new Date();

 current_date = date_data.getDate();
document.getElementById('date').textContent = `${current_date}`;

current_month = date_data.getMonth();
document.getElementById('month').textContent = `${months[current_month]}`;

 current_year = date_data.getFullYear();
document.getElementById('year').textContent = `${current_year}`;

current_hour = date_data.getHours();
 current_minute = date_data.getMinutes();

am_pm = '';

if (current_hour >= 12) {
  am_pm = 'PM';
} else {
  am_pm = 'AM';
}

// Convert hour to 12-hour format
current_hour = current_hour % 12;
if (current_hour === 0) {
  current_hour = 12;
}

// Ensure minutes are two digits
current_minute = current_minute < 10 ? '0' + current_minute : current_minute;

document.getElementById('time').textContent = `${current_hour}:${current_minute} ${am_pm}`;




//SECOND CODE

monthss = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

//dayss = ["05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","01","02","03","04"]

date_data = new Date();

current_date = date_data.getDate();


document.getElementById('datee').textContent = `${current_date}`;

current_month = date_data.getMonth();

document.getElementById('monthh').textContent = `${monthss[current_month]}`;

current_year = date_data.getFullYear();

document.getElementById('yearr').textContent = `${current_year}`;


current_hour = date_data.getHours();
current_minute = date_data.getMinutes();

am_pm = ''

if(current_hour >= 12){
  am_pm = 'PM'
}else {
  am_pm = 'AM'
};

document.getElementById('timee').textContent = `${current_hour}:${current_minute} ${am_pm}`;



//dayyys = ["05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","","25","26","27","28","29","30","31","01","02","03","04"]



current_day = date_data.getDay()


document.getElementById('dayyy').textContent = `${dayyys[current_day]}`




