let data = ""
$.getJSON('PageData.json',function(json){
    console.log(json.pages.pages.home.id)
});

let current = "";
current="home";
// data.pages.pages.forEach(page =>{
//     alert(page);
// });