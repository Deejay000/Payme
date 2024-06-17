const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  
 
 
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  

const amounts = document.querySelectorAll('.amount');
amounts.forEach((num) => {
  const formattedNum = num.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  num.textContent = formattedNum;
});

