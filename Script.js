
let previousShortenedLinks = [];

        async function shortURL() {
            const url = document.getElementById("url").value;
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
            
            if (response.ok) {
                const shortenedLink = await response.text();
                previousShortenedLinks.push(shortenedLink);

                let resultHTML = `Shortened URL: <a href="${shortenedLink}" target="_blank">${shortenedLink}</a><br>`;
                
                if (previousShortenedLinks.length > 1) {
                    resultHTML += "Previously shortened URLs:<ul>";
                    previousShortenedLinks.slice(0, -1).forEach((prevLink) => {
                        resultHTML += `<li><a href="${prevLink}" target="_blank">${prevLink}</a></li>`;
                    });
                    resultHTML += "</ul>";
                }

                document.getElementById('result').innerHTML = resultHTML;
            } else {
                document.getElementById('result').innerHTML = "Error shortening";
            }
        }