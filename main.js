let data = "";

function loadJSON(path)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    data = JSON.parse(xhr.responseText);
            } else {
                if (error)
                    console.error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

loadJSON("PageData.json");
current="home";
pageData.pages.forEach(page =>{
    alert(page);
});