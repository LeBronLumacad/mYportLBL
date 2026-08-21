// ============================================
// INTERESTS SECTION - INTERACTIVE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Interest data with LOCAL images
    const interestData = {
        gaming: {
            title: '🎮 Gaming',
            icon: 'fa-gamepad',
            images: [
                { src: 'gaming-1.jpg', label: 'Character Collection' },
                { src: 'gaming-2.jpg', label: 'Beautiful Characters' },
                { src: 'gaming-3.jpg', label: 'Collection part 2' },
                { src: 'gaming-4.jpg', label: 'Account Review' }
            ]
        },
        pets: {
            title: '🐾 Pets',
            icon: 'fa-paw',
            images: [
                { src: 'pets-1.jpg', label: 'Happy Dog' },
                { src: 'pets-2.jpg', label: 'Cute Cat' },
                { src: 'pets-3.jpg', label: 'Playful Pet' },
                { src: 'pets-4.jpg', label: 'Animal Love' }
            ]
        },
        webtoon: {
            title: '📚 Webtoon',
            icon: 'fa-book-open',
            images: [
                { src: 'webtoon-1.jpg', label: 'Favorite Webtoon' },
                { src: 'webtoon-2.jpg', label: 'Just started' },
                { src: 'webtoon-3.jpg', label: 'Reading Time' },
                { src: 'webtoon-4.jpg', label: 'Colorful Stories' }
            ]
        },
        manwha: {
            title: '📖 Manwha',
            icon: 'fa-book',
            images: [
                { src: 'manwha-1.jpg', label: 'Korean Comics' },
                { src: 'manwha-2.jpg', label: 'Drama Stories' },
                { src: 'manwha-3.jpg', label: 'Thriller Tales' },
                { src: 'manwha-4.jpg', label: 'Comedy Adventures' }
            ]
        },
        manga: {
            title: '📕 Manga',
            icon: 'fa-scroll',
            images: [
                { src: 'manga-1.jpg', label: 'Japanese Comics' },
                { src: 'manga-2.jpg', label: 'Shonen Series' },
                { src: 'manga-3.jpg', label: 'Shojo Stories' },
                { src: 'manga-4.jpg', label: 'Seinen Adventures' }
            ]
        },
        anime: {
            title: '🎬 Anime',
            icon: 'fa-film',
            images: [
                { src: 'anime-1.jpg', label: 'Anime Action' },
                { src: 'anime-2.jpg', label: 'Slice of Life' },
                { src: 'anime-3.jpg', label: 'Fantasy World' },
                { src: 'anime-4.jpg', label: 'Anime Culture' }
            ]
        }
    };

    //  elements
    const interestCards = document.querySelectorAll('.interest-card');
    const interestDisplay = document.getElementById('interestDisplay');
    const interestContent = document.getElementById('interestContent');
    const interestTitle = document.getElementById('interestTitle');
    const interestImageGrid = document.getElementById('interestImageGrid');
    const closeBtn = document.getElementById('closeInterestDisplay');
    const placeholder = document.querySelector('.interest-display-placeholder');

    // display images 
    function displayInterest(interestKey) {
        const data = interestData[interestKey];
        if (!data) return;

        // Hide placeholder, show content
        if (placeholder) placeholder.style.display = 'none';
        interestContent.style.display = 'block';

        // Set title
        interestTitle.textContent = data.title;

        // Clear and populate image grid
        interestImageGrid.innerHTML = '';
        
        data.images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'interest-image-item';
            item.innerHTML = `
                <img src="../images/interests/${img.src}" alt="${img.label}" loading="lazy" onerror="this.src='../images/interests/placeholder.jpg'">
                <div class="image-overlay">
                    <span>${img.label}</span>
                </div>
            `;
            interestImageGrid.appendChild(item);
        });

        // Highlight active card
        interestCards.forEach(card => {
            card.classList.remove('active');
            if (card.dataset.interest === interestKey) {
                card.classList.add('active');
            }
        });

        // Scroll to display
        interestDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Click handler for interest cards
    interestCards.forEach(card => {
        card.addEventListener('click', function() {
            const interest = this.dataset.interest;
            if (interest) {
                displayInterest(interest);
            }
        });
    });

    // Close display handler
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            interestContent.style.display = 'none';
            if (placeholder) placeholder.style.display = 'flex';
            interestCards.forEach(card => card.classList.remove('active'));
        });
    }

    // Keyboard shortcut: ESC to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && interestContent.style.display === 'block') {
            closeBtn.click();
        }
    });

});