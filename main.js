let data = "";
$.getJSON("PageData.json",function(json){
    alert(json.pages.pages.home.id);
});

let current = "";
current="home";
// data.pages.pages.forEach(page =>{
//     alert(page);
// });