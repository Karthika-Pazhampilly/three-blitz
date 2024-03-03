let previousShortenedLink = "";

async function shortURL() {
    const Url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
    
    if (response.ok) {
        const data = await response.text();
        previousShortenedLink = data;

        document.getElementById('result').innerHTML = `
        Shortened URL: <a href="${data}" target="_blank">${data}</a><br>
        Previously shortened: <a href="${previousShortenedLink}" target="_blank">${previousShortenedLink}</a>`;
    } else {
        document.getElementById('result').innerHTML = "Error shortening";
    }
}
