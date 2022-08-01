var page = 1
var listNews = []
let handleClick = (e) => {
    page = e.target.dataset.page
    console.log(e);
    fetch(`http://localhost:3000/listNews/${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            let bd = document.getElementById('body')
            let temp = ""
            data.data.forEach(val => {
                temp += `<div class="col-lg-6 col-12 g-2">
                            <div class="p-3 border bg-light">
                                <a class="link-custom" href='/detail-news/${val.id}'><h6>${val.title}</h6></a>
                                
                                <div class="content-news">
                                    <img src="${val.image}" alt="" width=300 height=200>
                                    <div>${val.content}</div>
                                </div>
                                
                            </div>
                        </div>`
            })
            bd.innerHTML = temp
        })
}
fetch(`http://localhost:3000/listNews/${page}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(data => data.json())
    .then(data => {
        let bd = document.getElementById('body')
        let temp = ""
        data.data.forEach(val => {
            listNews.push(val)
            temp += `<div class="col-lg-6 col-12 g-2">
                            <div class="p-3 border bg-light">
                                <a class="link-custom" href='/detail-news/${val.id}'><h6>${val.title}</h6></a>
                                
                                <div class="content-news">
                                    <img src="${val.image}" alt="" width=300 height=200>
                                    <div>${val.content}</div>
                                </div>
                                
                            </div>
                        </div>`
        })
        bd.innerHTML = temp
    })

// search

let search = document.getElementById('search')
search.addEventListener('keyup', (e) => {
    let words = e.target.value
    let temp = ''
    let bd = document.getElementById('body')
    listNews.forEach(val => {
        if (val.title.toLowerCase().indexOf(words.toLowerCase()) != -1) {
            temp += `<div class="col-lg-6 col-12 g-2">
                            <div class="p-3 border bg-light">
                                <a class="link-custom" href='/detail-news/${val.id}'><h6>${val.title}</h6></a>
                                
                                <div class="content-news">
                                    <img src="${val.image}" alt="" width=300 height=200>
                                    <div>${val.content}</div>
                                </div>
                                
                            </div>
                        </div>`
        }
    })
    bd.innerHTML = temp
})