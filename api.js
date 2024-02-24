const ellist = document.querySelector(".list100")

function salom (arr){
    arr.forEach((item) =>{
        


        const html = `
        <header class="header0">
        <article class="card">  
            <img class="ichi" src="./Rectangle 356.png" alt="">
             <h4 class="country__region">${item.title}</h4>
             <p class="country__row"><span></span>${item.body}</p>
             <p class="country__row"><span></span>2019</p>
             <button class="btnl">Bookmark</button>
             <button class="btnl1">More Info</button>
             <button class="btnl2">Read</button>
             </article>
            </header>
        `;
        ellist.insertAdjacentHTML('beforeend', html);
        
    })
}
fetch("http://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => salom(data))





