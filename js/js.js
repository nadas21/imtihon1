const list  = document.querySelector(".list")

function renderData(arr){
    arr.forEach((item) => {
let data = `
<li class="kist-item">
<div class="list-item-box">
    <img src="./img/card-img.png" alt="book" class="item-img">
</div>
<h4 class="item-title">
${item.title}
</h4>
<p class="text">

</p>
<p class="text-year">
  2008
</p>
<div class="item-bottom-box">
    <button class="item-btn-first">
        bookmark
    </button>
    <button class="item-btn-second">
        More info
    </button>
</div>
<button class="item-btn-third">
    bookmark
</button>
</li> 
`

list.insertAdjacentHTML("beforeend", data)
    })
}

fatch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => renderData(data))
