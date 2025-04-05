  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shakeElement(element) {
    const originalPosition = {
      left: element.style.left || '',
      top: element.style.top || ''
    };
    let shakeInterval = setInterval(() => {
      const x = getRandomInt(-10, 10);
      const y = getRandomInt(-10, 10);
      element.style.position = 'relative';
      element.style.left = (parseInt(originalPosition.left) || 0) + x + 'px';
      element.style.top = (parseInt(originalPosition.top) || 0) + y + 'px';
    }, 50);

    setTimeout(() => {
      clearInterval(shakeInterval);
      element.style.left = originalPosition.left;
      element.style.top = originalPosition.top;
      element.style.position = '';
    }, 200);
  }

  function shakeAllElements() {
    const allElements = document.querySelectorAll('body > *');
    allElements.forEach(element => {
      if (element.tagName.toLowerCase() !== 'marquee') { // Don't shake the marquee
        shakeElement(element);
      }
    });
  }

  function createMarquee() {
    const marquee = document.createElement('marquee');
    marquee.textContent = 'THE CORRUPTION IS ABOUT TO BEGIN, RUN!';
    marquee.style.backgroundColor = 'black';
    marquee.style.color = 'white';
    marquee.style.width = '100%';
    marquee.style.position = 'fixed';
    marquee.style.top = '0';
    marquee.style.left = '0';
    marquee.style.zIndex = '1000'; // Ensure it's on top
    document.body.prepend(marquee);
  }

  // Create the marquee immediately
  createMarquee();

  // Trigger shake and redirect after 5 seconds
  setTimeout(() => {
    shakeAllElements();
    setTimeout(() => {
      window.location.href = 'https://pranx.com/crack/';
    }, 1000); // Small delay after shaking before redirecting
  }, 5000);
