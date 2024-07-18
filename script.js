document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'Shift') {
            let searchTerm = prompt("Enter Korean word:");
            if (searchTerm) {
                let url = `https://korean.dict.naver.com/koendict/#/search?query=${encodeURIComponent(searchTerm)}`;
                let searches = JSON.parse(localStorage.getItem('searches')) || [];

                let previousIndex = searches.indexOf(url);
                if (previousIndex !== -1) {
                    let ago = searches.length - previousIndex;
                    alert(`You looked this up ${ago} searches ago`);
                } else {
                    searches.push(url);
                    localStorage.setItem('searches', JSON.stringify(searches));
                }

                document.getElementById('dictionaryFrame').src = url;
            }
        }
    });
});
