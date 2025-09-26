let currentlyPlayingAudio = null;
const PAUSE_IMG = "../img/pause.png";
const PLAY_IMG = "../img/play.png";

function closeMenu() {
    document.getElementById('burger-checkbox').checked = false;
}

/**
 * @param {HTMLElement} buttonElement 
 * @param {string} audioId 
 */
function togglePlayPause(buttonElement, audioId) {
    const audio = document.getElementById(audioId);

    if (!audio) return;

    if (audio.paused) {
        if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
            currentlyPlayingAudio.pause();
            const prevButton = currentlyPlayingAudio.closest('.disc').querySelector('.container-img-play');
            if (prevButton) {
                prevButton.src = PLAY_IMG;
            }
        }

        audio.play();
        buttonElement.src = PAUSE_IMG;
        
        currentlyPlayingAudio = audio;

    } else {
        audio.pause();
        buttonElement.src = PLAY_IMG;
        
        currentlyPlayingAudio = null;
    }
}

function initializeDragScroll() {
    const slider = document.querySelector('.draggable');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (!slider) return;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('dragging');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('dragging');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('dragging');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });
}


function createObserver(selector, className, options = { threshold: 0.1 }) {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initializeDragScroll();
    
    createObserver('.title-black', 'title-black-animation', { threshold: 0.5 });

    createObserver('.container-img-kessy', 'container-img-kessy-animation', { threshold: 0.1 });
    
    createObserver('.container-img-kessy3', 'container-img-kessy3-animation', { threshold: 0.2 });

    createObserver('.concert-grid-card1', 'concert-grid-card-animation', { threshold: 0.2 });
    createObserver('.concert-grid-card-red', 'concert-grid-card-animation2', { threshold: 0.2 });
    createObserver('.concert-grid-card3', 'concert-grid-card-animation3', { threshold: 0.2 });
});