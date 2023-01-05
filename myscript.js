const hamburger = document.getElementById('hamburger');
const navigation2 = document.getElementById('nav2');
const closer = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation2.classList.toggle('active');
});

closer.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navigation2.classList.remove('active');
})