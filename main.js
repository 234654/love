window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
        
        const titles = 'люблю тебя котя!'.split('');
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 300);
            }
        }

        appendTitle();
    }, 1000);
};
