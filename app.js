console.log("hello");
const body = document.querySelector("body"); 
const form = document.querySelector("#form");
const searchtype = document.querySelector("#searchtype"); 
const main = document.querySelector(".main"); 
console.log(main)

// business entertainment general health science sports technology

const newsapi = {
    key:"c457afc210ec4be690a2812fda192b0d",
    api:"https://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY"
}



fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${newsapi.key}`)

.then(function(response){
    return response.json();
})
.then(data=>{console.log(data)
  
           mainfunction(data);
        })





const button = document.querySelectorAll("button");
console.log(button);
for(let btn of button)
{
    btn.addEventListener("click",()=>
    {
    console.log(btn.value);

    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${btn.value}&apiKey=${newsapi.key}`)

    .then(function(response){
        return response.json();
    })
    .then(data=>{console.log(data)
      
               mainfunction(data);
            })
    
})
}

function mainfunction(data){
        const maindiv = document.createElement("div");
        maindiv.classList.add("submain");
        main.prepend(maindiv);
        data.articles.forEach((article)=>{
        // console.log(article.description);
        const subsubmain = document.createElement("div");
        subsubmain.classList.add("subsubmain");
        // li.classList.add("lisubdiv")
        const time = article.publishedAt.slice(0,10);
        
       
        subsubmain.innerHTML = `<a href="${article.url}" target="_blank">
                               
                                
                                <div class="main-descrip">
                                    <div class="descrip">
                                    <h2 class="lisubdiv">${article.title}</h2>
                                        <span>${time}</span><span>-${article.source.name}</span>
                                        <h3 class="h3descrip">${article.description}</h3>
                                        <p class="pdescrip">${article.content}</p>
                                    </div>
                                    <div class="img-div">
                                        <img src="${article.urlToImage}">
                                    </div>
                                </div>    
                                </a>`

                                
        maindiv.append(subsubmain);
        })
}



// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     console.log(`${searchtype.value}`);
// fetch(`https://newsapi.org/v2/everything?q=${searchtype.value}&from=2022-03-21&sortBy=publishedAt&apiKey=${newsapi.key}`)
// fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${newsapi.key}`)
// fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${newsapi.key}`)

//     .then(function(response){
//         return response.json();
//     })
//     .then(data=>{console.log(data)
      
//       const title =  data.articles.forEach((article)=>{
//                 console.log(article.description);
//             const img = document.createElement("img");
//             img.setAttribute("src",`${article.urlToImage}`)
//             // img.innerHTML = "image";
            
//             body.append(img);
//       });
//     })
// });
