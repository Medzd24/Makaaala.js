 
        const bloggerId = '8781535279728903487';
        const apiKey = 'AIzaSyCciRkKAcwlJJQ9v89lrJHQKnr7R8PpYeQ';
        const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${bloggerId}/posts?key=${apiKey}&maxResults=4`;

        const postLinks = []; // مصفوفة لتخزين روابط المقالات

        async function fetchHeadlines() {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                // تحديث العناوين والروابط
                for (let i = 0; i < 4; i++) {
                    const headlineElement = document.getElementById(`headline${i + 1}`);
                    
                    headlineElement.innerText = data.items[i].title;
                    headlineElement.href = data.items[i].url;
                    
                    postLinks[i] = data.items[i].url; // تخزين الرابط في المصفوفة
                }
            } catch (error) {
                console.error('حدث خطأ أثناء جلب العناوين:', error);
            }
        }

        fetchHeadlines();
