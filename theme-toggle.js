(function() {
    const themeKey = 'spechub_theme';

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        document.body.classList.toggle('dark-theme', isDark);
        const toggleButton = document.getElementById('themeToggleBtn');
        if (toggleButton) {
            toggleButton.textContent = isDark ? '☀️ Light' : '🌙 Dark';
            toggleButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    function loadTheme() {
        const storedTheme = localStorage.getItem(themeKey);
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = storedTheme === 'dark' || storedTheme === 'light'
            ? storedTheme
            : (prefersDark ? 'dark' : 'light');
        applyTheme(theme);
    }

    function toggleTheme() {
        const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        localStorage.setItem(themeKey, nextTheme);
        applyTheme(nextTheme);
    }

    function isLocalNavigation(link) {
        if (!link || !link.href) return false;
        if (link.target && link.target !== '_self') return false;
        if (link.hasAttribute('download')) return false;
        const url = new URL(link.href, window.location.href);
        return url.origin === window.location.origin && url.pathname !== window.location.pathname;
    }

    function initPageTransitions() {
        document.body.classList.add('page-transition-ready');

        const links = Array.from(document.querySelectorAll('a[href]'));
        links.forEach(link => {
            if (!isLocalNavigation(link)) return;
            link.addEventListener('click', (event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                const targetHref = link.href;
                document.body.classList.add('page-transition-exit');
                window.setTimeout(() => {
                    window.location.href = targetHref;
                }, 320);
            });
        });

        window.setTimeout(() => {
            document.body.classList.add('page-transition-enter');
        }, 10);
    }

    function init() {
        const toggleButton = document.getElementById('themeToggleBtn');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
        loadTheme();
        initPageTransitions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();