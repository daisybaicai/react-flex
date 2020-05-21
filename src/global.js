
function setHtmlFontSize() {
    let deviceWidth = document.documentElement.clientWidth;
    const tmpWidth = (document.documentElement.clientHeight * 1440) / 900;
    if (window.screen.width * 10 !== window.screen.height * 16) {
      deviceWidth = (document.documentElement.clientWidth * 1440) / 1600;
    }
    deviceWidth = deviceWidth < tmpWidth ? deviceWidth : tmpWidth;
    document.documentElement.style.fontSize = `${deviceWidth / 14.4}px`;
  }
  
  setHtmlFontSize();
  window.addEventListener(
    'resize',
    () => {
      setHtmlFontSize();
    },
    false
  );
  