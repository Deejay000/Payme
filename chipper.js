document.getElementById('string_inner_container').innerHTML = create_random_string(10)

function create_random_string(string_lenght) {
  var random_string = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(var i, i = 0; i < string_lenght; i++){
    random_string += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return random_string
}


const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  const thirdInfo = localStorage.getItem('third-info');
  const fourInfo = localStorage.getItem('four-info');
  const fiveInfo = localStorage.getItem('five-info');
  const sixInfo = localStorage.getItem('six-info');
 const sevenInfo = localStorage.getItem('seven-info');
 const eightInfo = localStorage.getItem('eight-info');
 const nineInfo = localStorage.getItem('nine-info');
 
 
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  document.getElementById('third-info').textContent = thirdInfo;
  document.getElementById('four-info').textContent = fourInfo;
  document.getElementById('five-info').textContent = fiveInfo;
  document.getElementById('six-info').textContent = sixInfo;
  document.getElementById('seven-info').textContent = sevenInfo;
document.getElementById('eight-info').textContent = eightInfo;
  document.getElementById('nine-info').textContent = nineInfo;


const amounts = document.querySelectorAll('.amount');
amounts.forEach((num) => {
  const formattedNum = num.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  num.textContent = formattedNum;
});
