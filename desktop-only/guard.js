(function () {
  const noticeUrl = new URL('index.html', document.currentScript.src);
  const narrowScreen = window.matchMedia('(max-width: 800px)');
  const touchOnlyScreen = window.matchMedia('(hover: none) and (pointer: coarse)');

  function checkScreen() {
    if (!narrowScreen.matches && !touchOnlyScreen.matches) return;
    window.backroomsMobileBlocked = true;
    document.documentElement.style.visibility = 'hidden';
    window.location.replace(noticeUrl.href);
  }

  narrowScreen.addEventListener('change', checkScreen);
  touchOnlyScreen.addEventListener('change', checkScreen);
  checkScreen();
})();
