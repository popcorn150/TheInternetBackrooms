const requestedRoom = new URLSearchParams(window.location.search).get('room');
const roomNumber = /^\d{3,}$/.test(requestedRoom ?? '') ? requestedRoom : '002';

document.getElementById('room-number').textContent = roomNumber;
document.getElementById('room-url').textContent = `/pages/room-${roomNumber}/`;
document.title = `404 — Room ${roomNumber} not found`;

const dinoLines = [
  "What am I even running for?",
  "I'm tired, man. No running today.",
  "I think I'm stuck in an endless maze matrix. I need to escape!"
];
const bubble = document.getElementById('dino-bubble');
let lineIndex = 0;

document.getElementById('play-button').addEventListener('click', () => {
  bubble.textContent = dinoLines[lineIndex];
  bubble.hidden = false;
  lineIndex = (lineIndex + 1) % dinoLines.length;
});
