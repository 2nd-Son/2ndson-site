(() => {
  const shell = document.querySelector('.shell');
  if (!shell) return;

  function fitFanlink() {
    const phone = window.matchMedia('(max-width: 760px)').matches;

    if (phone) {
      const safeX = 16;
      const safeY = 16;
      const fitX = (window.innerWidth - safeX) / 390;
      const fitY = (window.innerHeight - safeY) / 844;
      const scale = Math.max(0.55, Math.min(fitX, fitY, 1.12));
      shell.style.setProperty('--fanlink-scale', scale.toFixed(4));
      return;
    }

    const safeX = 72;
    const safeY = 64;
    const baseW = shell.offsetWidth;
    const baseH = shell.offsetHeight;
    const fitX = (window.innerWidth - safeX) / baseW;
    const fitY = (window.innerHeight - safeY) / baseH;
    const scale = Math.max(0.55, Math.min(fitX, fitY, 1.12));
    shell.style.setProperty('--fanlink-scale', scale.toFixed(4));
  }

  window.addEventListener('load', fitFanlink);
  window.addEventListener('resize', fitFanlink);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitFanlink);
  }
  fitFanlink();
})();
