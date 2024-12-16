document.getElementById('rollButton').addEventListener('click', function() {
    const dice = document.getElementById('dice');
    dice.style.animation = 'none'; // Reset animation
    dice.offsetHeight; // Trigger reflow
    dice.style.animation = null; // Restart animation
 });
  
 document.getElementById('rollButton').addEventListener('click', function() {
    const dice = document.getElementById('dice');
    const randomX = Math.floor(Math.random() * 4) * 90; // Random multiple of 90 degrees
    const randomY = Math.floor(Math.random() * 4) * 90; // Random multiple of 90 degrees
    dice.style.animation = 'none'; // Reset animation
    dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`; // Apply random rotation
    dice.offsetHeight; // Trigger reflow
    dice.style.animation = null; // Restart animation
 });