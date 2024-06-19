const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  const thirdInfo = localStorage.getItem('third-info');
  /*const fourInfo = localStorage.getItem('four-info');
  const fiveInfo = localStorage.getItem('five-info');*/
  const sixInfo = localStorage.getItem('six-info');
  
 
 
  
    document.querySelectorAll('#first-info').forEach(element => {
    element.textContent = firstInfo;
}); document.getElementById('second-info').textContent = secondInfo;
  document.getElementById('third-info').textContent = thirdInfo;
  /*document.getElementById('four-info').textContent = fourInfo;
  document.getElementById('five-info').textContent = fiveInfo;*/
  document.getElementById('six-info').textContent = sixInfo;


const amounts = document.querySelectorAll('.amount');
amounts.forEach((num) => {
  const formattedNum = num.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  num.textContent = formattedNum;
});




