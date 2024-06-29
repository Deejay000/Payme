
const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  const thirdInfo = localStorage.getItem('third-info');
  const fourInfo = localStorage.getItem('four-info');
 
 
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  document.getElementById('third-info').textContent = thirdInfo;
  document.getElementById('four-info').textContent = fourInfo;
  
  const amounts = document.querySelectorAll('.amount');
amounts.forEach((num) => {
  const formattedNum = num.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  num.textContent = formattedNum;
});


date_data = new Date()

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

document.getElementById('time').textContent = `${current_hour}:${current_minute} ${am_pm}`




document.addEventListener("DOMContentLoaded", () => {
    // Array of predefined colors
    const colors = ['darkpink', '#33FF57', 'blue', '#FF33A1', '#07D5FF'];

    // Function to get a random color from the array
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Get all elements with the class color-box
    const colorBoxes = document.querySelectorAll('.circle');

    // Set the background color of each color-box to a random color from the array
    colorBoxes.forEach(box => {
        box.style.backgroundColor = getRandomColor();
    });
});


