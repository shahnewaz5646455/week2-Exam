






document.getElementById("hand").addEventListener("click",(event)=>{
    var productContainer = document.getElementById('product-container');
    
    while (productContainer.firstChild) {
        

        productContainer.removeChild(productContainer.firstChild);
    }
    

    let mealName=document.getElementById("search-box").value;
    console.log(mealName);
    loadAllProduct(mealName);
    document.getElementById("search-box").value="";
    document.getElementById("product-container");


});



const loadAllProduct=(mealName)=>{
    console.log(mealName);
    let url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${mealName}`;
    fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                displayProduct(data);
                
            });

};
loadAllProduct("");


const displayProduct=(data)=>{
    const container=document.getElementById("product-container");
    console.log(data.player);
    data.player.forEach(p => {
        console.log(p.strPlayer);
        

        const div=document.createElement("div");
            div.classList.add("product-card");
            let link="https://www.youtube.com/";
           
            div.innerHTML=`
            <div class="card-img">
                        <img class="img" src=${p.strThumb} alt="">
            </div>
                    
            <h5 class="text-center mt-3 fw-bold">Name : ${p.strPlayer}</h5>
            <h5 class="text-center mt-3 fw-bold">Gender : ${p.strGender}</h5>
            <h5 class="text-center mt-3 fw-bold">Country : ${p.strNationality}</h5>
            <h5 class="text-center mt-3 fw-bold">Number : ${p.idPlayer}</h5>
            <h5 class="text-center mt-3 fw-bold">Date Of Birth : ${p.dateBorn}</h5>
            <h5 class="text-center mt-3 fw-bold">Weight : ${p.strWeight}</h5>
            <div class="icon-container">
            <i class="icc2 fa-brands fa-facebook"><a class="deco fw-bold"  href=${p.strFacebook}>Facebook</a></i>
            <i class="icc2 fa-brands fa-instagram"><a class="deco fw-bold"  href=${p.strInstagram}>Instagram</a></i>
            <i class="icc2 fa-brands fa-twitter"><a class="deco fw-bold"  href=${p.strTwitter}>Twitter</a></i>
            </div>
            <button id="hand" onclick="kk('${p.strPlayer}','${p.strThumb}','${p.strGender}')" class="bt">Add Group</button>
            <!-- Button trigger modal -->
            <button type="button" onclick="mm('${p.idPlayer}')" id="details" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Details
            </button>
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Player Information</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body" id="modal-body">
                  
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

            
            `

            
            
            container.appendChild(div);




           
          
          
          

          
           

            
       
        
    });

}
let male=0;
let female=0;

const kk=(name,img,gender)=>{

    const cart_count=document.getElementById("count").innerText;
    
    


    console.log(male,female);
    document.getElementById("male").innerText=male;
    document.getElementById("female").innerText=female;


    let convert=parseInt(cart_count);
    convert+=1;
    document.getElementById("count").innerText=convert;
    if(gender=="Male" && convert<=11){
        male+=1;
    }
    else if(gender=="Female" && convert<=11){
        female+=1;
    }

    console.log(name,img);
    if (convert>11) {
        console.log("you can not add");
        alert("You Can Not Add")
        document.getElementById("v21").innerText="you can not add";
        document.getElementById("count").innerText=11;
        
    }
    else{
            const add=document.getElementById("add-group");
            const div=document.createElement("div");
            div.classList.add("info");
            div.innerHTML=`
                <div class="card-img">
                <img class="img" src=${img} alt="">
                </div>
                <h5>${name}</h5>
            
            
            
            `
            add.appendChild(div);

    }
    

    
};
const mm=(id)=>{
  document.getElementById("modal-body").innerHTML="";
                
      let url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
    
       out(data.players[0])
        
    });

}


const out=(player)=>{
  console.log(player.strPlayer);
  const con=document.getElementById("modal-body");
  const div=document.createElement("div");
            div.classList.add("moda-info");
            div.innerHTML=`
            <h5 class="text-center mt-3 fw-bold">Name : ${player.strPlayer}</h5>
            <h5 class="text-center mt-3 fw-bold">ID : ${player.idPlayer}</h5>
            <h5 class="text-center mt-3 fw-bold">Country : ${player.strNationality}</h5>
            <h5 class="text-center mt-3 fw-bold">Number : ${player.idPlayer}</h5>
            <h5 class="text-center mt-3 fw-bold">Date Of Birth : ${player.dateBorn}</h5>
            <h5 class="text-center mt-3 fw-bold">Weight : ${player.strWeight}</h5>
            <h5 class="text-center mt-3 fw-bold">Description : ${player.strDescriptionEN}</h5>
            
            
            `

            con.appendChild(div);




}
