let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let search = document.querySelector("#state");
    let state = search.value;
    let data = await getCollage(state);
    console.log(data); 
    displayData(data);
    search.value = "";
});
function displayData(data){
    let list = document.querySelector("#result");
    list.innerHTML = ""; 
    for(collage of data){
        let li = document.createElement("li");
        li.classList.add("collage");
        li.textContent = collage.name;
        list.appendChild(li);
    }
};
async function getCollage(state){
    try{
        
        let res = await axios.get(url+state);
            return res.data;
     
       
    }catch(e){
        console.log("error", e);
    }
}