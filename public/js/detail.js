let id = window.location.href.split('/')[4]
fetch(`http://localhost:3000/news-detail/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(data => data.json())
    .then(data => {
        document.getElementById('title').innerHTML = data.data[0].title
        document.getElementById('img').src = data.data[0].image
        document.getElementById('content').innerHTML = data.data[0].content
    })