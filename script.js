let prev = document.getElementById('prev');
let next = document.getElementById('next');
let carousel = document.querySelector('.carousel');
let list = document.querySelector('.list');
let thumbnail = document.querySelector('.thumbnail');
let items = document.querySelectorAll('.list .items');
let thumbItems = document.querySelectorAll('.thumbnail .item');

let currentIndex = 0;
let timeRunning = 2000;
let runTimeOut;
let runAutoRun = setTimeout(() => showSlider('next'), 7000);

next.onclick = function() {
    showSlider('next');
}

prev.onclick = function() {
    showSlider('prev');
}

function showSlider(type) {
    // Remove animation classes from previous run
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
    
    clearTimeout(runTimeOut);
    clearTimeout(runAutoRun);
    
    // Get current active elements
    let activeItem = document.querySelector('.list .items.active');
    let activeThumb = document.querySelector('.thumbnail .item.active');
    
    // Remove active classes
    if(activeItem) activeItem.classList.remove('active');
    if(activeThumb) activeThumb.classList.remove('active');
    
    if(type === 'next') {
        currentIndex = (currentIndex + 1) % items.length;
    } else {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }
    
    // Add active classes to new items
    items[currentIndex].classList.add('active');
    thumbItems[currentIndex].classList.add('active');
    
    // Add animation class to carousel
    carousel.classList.add(type);
    
    runTimeOut = setTimeout(() => {
        carousel.classList.remove(type);
        
        // Reset auto-run
        runAutoRun = setTimeout(() => showSlider('next'), 7000);
    }, timeRunning);
}

items[0].classList.add('active');
thumbItems[0].classList.add('active');


const searchInput = document.querySelector('.search-box input');
const searchIcon = document.querySelector('.search-box i');

searchIcon.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        // In a real app, this would fetch from an API
        alert(`Searching for: ${searchTerm}\nThis would display search results in a real implementation`);
        // Clear input after search
        searchInput.value = '';
    }
}