let x;
let y;
let z;
let open =document.querySelector("#open");
let close =document.querySelector("#close");
let element =document.querySelector(".aside-bar")
let element2 =document.querySelector(".aside-content")
let contactUs=document.querySelector("#contactUs")
let resultArry=[];
async function getMovies(catogery,type,time){
    let response = await fetch(`https://api.themoviedb.org/3/${catogery}/${type}/${time}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let finalResult =await response.json();
    let resultArry=finalResult.results;
    let cartona="" ;
    for (let i = 0; i <resultArry.length; i++) {
        if (resultArry[i].original_title == undefined) {
            x=resultArry[i].name;
        }else{
            x=resultArry[i].original_title;
        }
        if(resultArry[i].first_air_date != undefined){
            y=resultArry[i].first_air_date
        }else{
            y="unspecified date"
        }
        cartona += `<div class=" col-sm-6 col-md-4 col-lg-3 ">
        <div class="item  position-relative   overflow-hidden ">
            <img class="overflow-hidden"  src="https://image.tmdb.org/t/p/w500${resultArry[i].backdrop_path}" alt="" >
            <div class=" p-2 ">
                <h3 class=" mt-3 text-center  h5">${x}</h3>
                <p class="mt-2 text-center text-danger fs-6 ">${resultArry[i].vote_average}</p>
            </div>


        </div>
    </div>`
    }
    console.log(resultArry);
    document.getElementById("data").innerHTML=cartona;
}
getMovies("trending","all","week")
$("#nowPlaying").click(function () {
    getMovies("trending","all","week")
})
$("#popular").click(function () {
    getMovies("trending","tv","day")
})
$("#topRated").click(function () {
    getMovies("trending","tv","week")
})
$("#trending").click(function () {
    getMovies("trending","all","week")
})
$("#upcoming").click(function () {
    getMovies("trending","movie","day")
})
$("#contactUs").click(function(){
})




$('.menu').click(function () { 
   
    
    if(document.querySelector('#xxx').getAttribute('class')=='d-none'){
        document.querySelector('#xxx').classList.remove('d-none')
        document.querySelector('.navbar-toggler-icon').classList.add('d-none')
        $('.showLeft').animate({'left':'0%'})

    }else{
        document.querySelector('.navbar-toggler-icon').classList.remove('d-none')
        document.querySelector('#xxx').classList.add('d-none')
        $('.showLeft').animate({'left':'-100%'})

    }
});
