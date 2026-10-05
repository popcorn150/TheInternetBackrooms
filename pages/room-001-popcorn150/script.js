const browserIcon = document.getElementById('browser-icon');
const exitIcon = document.getElementById('exit-icon');
const desktopIcons = document.querySelector('.desktop-icons');
const browserWindow = document.getElementById('browser-window');
const browserClose = document.getElementById('browser-close');
const browserTitleBar = document.getElementById('browser-title-bar');
const answerInput = document.getElementById('answer');
const dialogBackdrop = document.getElementById('dialog-backdrop');
const dialogMessage = document.getElementById('dialog-message');
const dialogClose = document.getElementById('dialog-close');
const dialogOk = document.getElementById('dialog-ok');
const taskLabel = document.getElementById('task-label');
const clock = document.getElementById('clock');
const decorativeIcons = document.querySelectorAll('[data-decorative-icon]');

let previousFocus = null;
const answerStorageKey = 'theinternetbackrooms:room-001:answer';
const browserStorageKey = 'theinternetbackrooms:room-001:browser-open';

function readSaved(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function save(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Keep working for this visit. */ }
}

answerInput.value = readSaved(answerStorageKey) ?? '';
if (readSaved(browserStorageKey) === 'true') {
  browserWindow.hidden = false;
  desktopIcons.inert = true;
  taskLabel.textContent = 'The Web';
}

answerInput.addEventListener('input', () => {
  save(answerStorageKey, answerInput.value);
});

function showBrowser() {
  hideBubbles();
  browserWindow.hidden = false;
  desktopIcons.inert = true;
  save(browserStorageKey, 'true');
  taskLabel.textContent = 'The Web';
  browserClose.focus();
}

function hideBrowser() {
  browserWindow.hidden = true;
  desktopIcons.inert = false;
  save(browserStorageKey, 'false');
  taskLabel.textContent = 'The desktop';
  browserIcon.focus();
}

function showDialog(message) {
  hideBubbles();
  previousFocus = document.activeElement;
  dialogMessage.textContent = message;
  dialogBackdrop.hidden = false;
  dialogOk.focus();
}

function hideDialog() {
  dialogBackdrop.hidden = true;
  previousFocus?.focus();
}

browserIcon.addEventListener('click', showBrowser);
browserClose.addEventListener('click', hideBrowser);
function hideBubbles() {
  decorativeIcons.forEach((icon) => { icon.nextElementSibling.hidden = true; });
}

decorativeIcons.forEach((icon) => {
  const clicksStorageKey = `theinternetbackrooms:room-001:clicks:${icon.id}`;
  let clicks = Number(readSaved(clicksStorageKey)) || 0;
  icon.addEventListener('click', () => {
    clicks += 1;
    save(clicksStorageKey, String(clicks));
    if (clicks < 2) return;
    hideBubbles();
    const bubble = icon.nextElementSibling;
    bubble.textContent = icon.id === 'computer-icon'
      ? (clicks % 2 === 0 ? 'This object is decorative. Please stop clicking everything.' : 'I am a computer, not a clue. Give me a break!')
      : (clicks % 2 === 0 ? 'Please stop touching me! You can clearly see that I am not the answer.' : 'There is nothing in here but old files and my patience.');
    bubble.hidden = false;
  });
});
exitIcon.addEventListener('click', () => {
  if (!browserWindow.hidden) return;
  if (answerInput.value.trim() === '1998') {
    window.location.href = '../../waiting-room/index.html?room=002';
  } else {
    showDialog("ACCESS DENIED\n\nYou can't leave until you provide the right answer.\nLook around and try again.");
  }
});
dialogClose.addEventListener('click', hideDialog);
dialogOk.addEventListener('click', hideDialog);

document.addEventListener('keydown', (event) => {
  if (dialogBackdrop.hidden) return;
  if (event.key === 'Escape') hideDialog();
  if (event.key === 'Tab') {
    const controls = [dialogClose, dialogOk];
    const next = event.shiftKey ? controls[0] : controls[1];
    if (document.activeElement === next) {
      event.preventDefault();
      (event.shiftKey ? controls[1] : controls[0]).focus();
    }
  }
});

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 30000);

let drag = null;
browserTitleBar.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button') || matchMedia('(max-width: 650px)').matches) return;
  const bounds = browserWindow.getBoundingClientRect();
  drag = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  browserTitleBar.setPointerCapture(event.pointerId);
});
browserTitleBar.addEventListener('pointermove', (event) => {
  if (!drag) return;
  const x = Math.max(0, Math.min(window.innerWidth - browserWindow.offsetWidth, event.clientX - drag.x));
  const y = Math.max(0, Math.min(window.innerHeight - browserWindow.offsetHeight - 39, event.clientY - drag.y));
  browserWindow.style.left = `${x}px`;
  browserWindow.style.top = `${y}px`;
});
browserTitleBar.addEventListener('pointerup', () => { drag = null; });
browserTitleBar.addEventListener('pointercancel', () => { drag = null; });
