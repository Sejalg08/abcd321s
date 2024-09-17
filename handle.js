document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Welcome screen animation
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const welcomeMessage = document.querySelector('.welcome-message');

    gsap.to(welcomeMessage, { opacity: 1, duration: 1, ease: "power2.out" });
    gsap.to(welcomeMessage, { opacity: 0, duration: 1, delay: 2, ease: "power2.in", onComplete: () => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        animateMainContent();
    }});

    function animateMainContent() {
        gsap.from('.hero h1', { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" });
        gsap.from('.hero p', { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: "power2.out" });
        gsap.from('.hero .btn', { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: "power2.out" });
        gsap.from('.card', { opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: "power2.out" });
        gsap.from('.sidebar-icon', { opacity: 0, x: 20, duration: 0.8, stagger: 0.1, delay: 0.8, ease: "power2.out" });
    }

    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Sidebar functionality
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    sidebarIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const section = icon.dataset.section;
            if (section) {
                alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section clicked!`);
            }
        });
    });

    // Sample posts data
    const posts = [
        {
            id: 1,
            author: "John Doe",
            role: "Student at XYZ University",
            content: "This is an example of a post content where students can share updates, problems, or discussions.",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            id: 2,
            author: "Jane Smith",
            role: "Alumni at XYZ University",
            content: "Another post here with different content and interactions. This post is slightly longer to demonstrate how the content is truncated in the square format.",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            id: 3,
            author: "Alice Johnson",
            role: "Professor at XYZ University",
            content: "Sharing some insights from my recent research on artificial intelligence and its applications in education.",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        {
            id: 4,
            author: "Bob Williams",
            role: "Student at XYZ University",
            content: "Looking for study partners for the upcoming calculus exam. Anyone interested?",
            avatar: "/placeholder.svg?height=40&width=40"
        }
    ];

    // Render posts
    const postsContainer = document.getElementById('posts-container');
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-avatar">${post.author[0]}</div>
                <div>
                    <div class="post-author">${post.author}</div>
                    <div class="post-role">${post.role}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <button class="post-action"><i data-lucide="thumbs-up"></i> Like</button>
                <button class="post-action"><i data-lucide="message-circle"></i> Comment</button>
                <button class="post-action"><i data-lucide="share-2"></i> Share</button>
                <button class="post-action emoji-button">😀</button>
            </div>
        `;
        postsContainer.appendChild(postElement);

        // Animate post appearance
        gsap.to(postElement, { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            delay: 0.1 * index, 
            ease: "power2.out" 
        });
    });

    // Re-initialize Lucide icons for dynamically added content
    lucide.createIcons();

    // Emoji functionality
    const emojiList = ['😀', '😂', '😍', '🤔', '👍', '🎉', '🔥', '💯'];
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('emoji-button')) {
            const currentEmoji = e.target.textContent.trim();
            const currentIndex = emojiList.indexOf(currentEmoji);
            const nextIndex = (currentIndex + 1) % emojiList.length;
            e.target.textContent = emojiList[nextIndex];

            // Animate emoji change
            gsap.from(e.target, { scale: 1.2, duration: 0.3, ease: "elastic.out(1, 0.3)" });
        }
    });

    // Like button functionality
    document.addEventListener('click', (e) => {
        if (e.target.closest('.post-action') && e.target.closest('.post-action').textContent.includes('Like')) {
            const likeButton = e.target.closest('.post-action');
            likeButton.classList.toggle('liked');
            if (likeButton.classList.contains('liked')) {
                likeButton.style.color = '#FF6B6B';
                gsap.from(likeButton, { scale: 1.2, duration: 0.3, ease: "elastic.out(1, 0.3)" });
            } else {
                likeButton.style.color = '';
            }
        }
    });
});
