document.getElementById('yesBtn').addEventListener('click', function() {
      document.querySelector('.message').style.display = 'none';
      document.getElementById('yesBtn').style.display = 'none';
      document.getElementById('noBtn').style.display = 'none';
      document.getElementById('response').style.display = 'block';
      document.getElementById('response').innerText = 'Nam rất vui vì Ngọc đã đồng ý!';
      
      // Chuyển hướng sau 30 giây
      setTimeout(function() {
          window.location.href = 'https://www.facebook.com/phuongnam.derkaiser/';
      }, 2000); // 2000 milliseconds = 2 seconds
  });
  
  document.getElementById('noBtn').addEventListener('mouseover', function() {
      const noBtn = document.getElementById('noBtn');
      const container = document.querySelector('.container');
      const containerRect = container.getBoundingClientRect();
      const noBtnRect = noBtn.getBoundingClientRect();
      
      let newTop, newLeft;
  
      do {
          newTop = Math.random() * (containerRect.height - noBtnRect.height);
          newLeft = Math.random() * (containerRect.width - noBtnRect.width);
      } while (newTop < 0 || newLeft < 0);
  
      noBtn.style.position = 'absolute';
      noBtn.style.top = `${newTop}px`;
      noBtn.style.left = `${newLeft}px`;
  });
  