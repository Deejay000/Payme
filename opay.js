document.getElementById('string_inner_container').innerHTML = create_random_string(25)

function create_random_string(string_lenght) {
  var random_string = '';
  var characters = '1234567890'
  for(var i, i = 0; i < string_lenght; i++){
    random_string += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return random_string
}


const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
 /* const thirdInfo = localStorage.getItem('third-info');*/
  const fourInfo = localStorage.getItem('four-info');
  const fiveInfo = localStorage.getItem('five-info');
  const sixInfo = localStorage.getItem('six-info');
 
 
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  /*document.getElementById('third-info').textContent = thirdInfo;*/
  document.getElementById('four-info').textContent = fourInfo;
  document.getElementById('five-info').textContent = fiveInfo;
  document.getElementById('six-info').textContent = sixInfo;

document.addEventListener('DOMContentLoaded', (event) => {
            const fiveInfo = localStorage.getItem('third-info');
            let masked = fiveInfo;

            if (fiveInfo && fiveInfo.length > 6) {
                const firstTwo = fiveInfo.slice(0, 3);
                const lastFour = fiveInfo.slice(-3);
                masked = firstTwo + '*'.repeat(fiveInfo.length - 6) + lastFour;
            ;}

            document.getElementById('third-info').textContent = masked;
        });



const amounts = document.querySelectorAll('.amount');
amounts.forEach((num) => {
  const formattedNum = num.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  num.textContent = formattedNum;
});



months = ["January","February","March","April","May","June","July","August","September","October","November","December"]


 date_data = new Date();

current_date = date_data.getDate()


document.getElementById('date').textContent = `${current_date}`

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
