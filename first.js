months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']

date_data = new Date()

current_day = date_data.getDay()
document.getElementById('day').textContent = days[current_day]

current_month = date_data.getMonth()
current_date = date_data.getDate()
current_hour = date_data.getHours()
current_minute = date_data.getMinutes()
am_pm = ''

if(current_hour >= 12){
  am_pm = 'PM'
}else {
  am_pm = 'AM'
}

// Convert hour to 12-hour format
current_hour = current_hour % 12;
if (current_hour === 0) {
  current_hour = 12;
}

// Ensure minutes are two digits
current_minute = current_minute < 10 ? '0' + current_minute : current_minute;

document.getElementById('month_date_time').textContent = `${months[current_month]} ${current_date}, ${current_hour}:${current_minute} ${am_pm}`


current_year = date_data.getFullYear()
document.getElementById('year').textContent = `${current_year}`












const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  const thirdInfo = localStorage.getItem('third-info');
  const fourInfo = localStorage.getItem('four-info');
  const fiveInfo = localStorage.getItem('five-info');
  const sixInfo = localStorage.getItem('six-info');
  const sevenInfo = localStorage.getItem('seven-info');
 
 
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  document.getElementById('third-info').textContent = thirdInfo;
  document.getElementById('four-info').textContent = fourInfo;
  document.getElementById('five-info').textContent = fiveInfo;
  document.getElementById('six-info').textContent = sixInfo;
  document.getElementById('seven-info').textContent = sevenInfo;


const amounts = document.querySelectorAll('.amount');
amounts.forEach((num) => {
  const formattedNum = num.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  num.textContent = formattedNum;
});

