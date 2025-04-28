const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let row = document.querySelector(".row")
let inputBox = document.getElementById("input-box")

const showData = (result) => {
    row.innerHTML = ""
    result.forEach(item => {
        let mainBox = document.createElement("div")
        mainBox.classList.add("col-lg-3")
        mainBox.classList.add("col-sm-6")
        mainBox.classList.add("py-3")
        mainBox.innerHTML = `<div class="container position-relative m-container px-0  rounded-3" style="background: url(${imgPath + item.poster_path}) bottom center; background-size: cover;">
                        <div class="container m-overview position-absolute bg-white bg-opacity-75 rounded-top-1  text-capitalize py-3 pb-0">
                            <div class="m-title  d-flex justify-content-between align-items-center">
                                <h5 class="w-100 overflow-hidden">${item.title}</h5>
                                <span class="text-warning fs-6 fw-bold">${item.vote_average}</span> 
                            </div> 
                            <p class="text-secondary">${item.overview}</p>
                        </div>
                    </div>`
        row.append(mainBox)

    });

}

const getInit = async (api) => {
    console.log("hello...");
    let response = await fetch(api)
    let getData = await response.json()
    let result = getData.results;
    showData(result)
}

getInit(apiUrl)


inputBox.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    
    if (e.target.value != "") {
        getInit(searchApi + e.target.value)
    }
    else {
        getInit(apiUrl)
    }

})


