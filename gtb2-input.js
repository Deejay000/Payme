const form = document.getElementById('form');
  const firstInfo = document.getElementById('firstInfo');
  const secondInfo = document.getElementById('secondInfo');   
  const thirdInfo = document.getElementById('thirdInfo');
  const fourInfo = document.getElementById('fourInfo');
  const fiveInfo = document.getElementById('fiveInfo');   
  const sixInfo = document.getElementById('sixInfo');
  const sevenInfo = document.getElementById('sevenInfo');
 /* const eightInfo = document.getElementById('eightInfo');
  const nineInfo = document.getElementById('nineInfo');*/
 
  
  form.addEventListener('submit',function (e) {
    e.preventDefault();
        const firstInfoValue = firstInfo.value;
        const secondInfoValue = secondInfo.value;
        const thirdInfoValue = thirdInfo.value;
        const fourInfoValue = fourInfo.value;
        const fiveInfoValue = fiveInfo.value;
        const sixInfoValue = sixInfo.value;
        const sevenInfoValue = sevenInfo.value;
      /*  const eightInfoValue = eightInfo.value;
        const nineInfoValue = nineInfo.value;*/
    
        
      localStorage.setItem('first-info', firstInfoValue);
      localStorage.setItem('second-info',secondInfoValue);
      localStorage.setItem('third-info',thirdInfoValue);
     localStorage.setItem('four-info', fourInfoValue);
      localStorage.setItem('five-info',fiveInfoValue);
      localStorage.setItem('six-info',sixInfoValue);
      localStorage.setItem('seven-info',sevenInfoValue);
      /*localStorage.setItem('eight-info',eightInfoValue);
      localStorage.setItem('nine-info',nineInfoValue);*/
      
  window.location.href="gtb2.html"
  });

  
  