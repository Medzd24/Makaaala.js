
    const numberOfItems = 5;
    const rssFeedUrl = "https://www.tun-24.com/rss.xml";

    // جلب البيانات من مصدر RSS
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssFeedUrl}`)
        .then(response => response.json())
        .then(data => {
            const items = data.items.slice(1, numberOfItems);

            // تحديث الروابط والنصوص
            items.forEach((item, index) => {
                const headlineElement = document.getElementById(`headline${index + 1}`);
                headlineElement.textContent = item.title;
                headlineElement.href = item.link;
            });
        })
        .catch(error => console.error("Error fetching RSS feed:", error));
