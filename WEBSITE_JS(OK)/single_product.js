
let data = new URLSearchParams(window.location.search)

let idd = data.get("id")


fetch(`http://localhost:3000/product?id=${idd}`)
    .then((r) => {
        return r.json()
    })
    .then((res) => {
      
        document.getElementById("box1").innerHTML = view(res)    
       
        document.getElementById("ac").addEventListener("click",()=>{
            patchData(res)

        add_to_cart(res)
           
        })
        
    })
    .catch((er) => {
        console.log(er);
    })

    function add_to_cart(res){
        fetch(`http://localhost:3000/single_product?id=${res[0].id}`)

        .then((r)=>{
            return r.json();
        })
        .then((Res)=>{
         
            console.log(Res);
            if(Res.length>0){
                // alert("nOOOOOOOOOOOOOOOOOOOOOOOOOO")
                Swal.fire({
                    icon: "error",
                    title: "This product is already in Cart Page...",
                    text: "Something went wrong!",
                 

                    html: `
                   Go to This Page
                    <a href="add_to_cart.html" autofocus   style="text-decoration: underline; color: blue;">Lets Check</a>,
                   
                  `,
                  });
            }
            else{
                fetch(`http://localhost:3000/single_product`,{
                    method:"POST",
                    headers: {
                        "content-type":"application/json"
                    },
                    body: JSON.stringify({...res[0],quantity:1})

                })
                .then((r)=>{
                    return r.json();
                })
                .then((res)=>{
                    console.log(res);
                    
                })



                .catch((err)=>{
                    console.log(err);
                    
                })
                  
                Swal.fire({
                    title: "Product Add In Cart!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
          
            }

                    
        })
        .catch((er)=>{
            console.log(er);
            
        })
    }
    

function view(arr) {
    return arr.map((el) => {
        return `
          <div class="my w-[80%] h-[auto] mt-[2%]  ms-[10%] flex mt-[5%]" >
        <div class="my1 flex flex-col justify-center relative items-center w-[40%] h-[600px] " >
            <i class="fa-regular fa-heart absolute top-[10px] right-[10px] text-[30px]"></i>
            <img class="w-[90%] h-[80%] mt-[-70px]" src="${el.img}" alt="">
            <button id="ac"  class="w-[70%] h-[50px] text-[20px] 
            text-[white] rounded-[10px] mb-[3%] bg-[#FF7043]">ADD TO CART</button>
        </div>
        <div class="my2 pt-[3%] w-[60%] h-[600px] p-[10px] text-[gray]" style="">
            <p class=" text-[20px]">
              ${el.dis}
            </p>

            <p class="text-[20px] font-[600] mt-[3%] text-[black] "> $ ${el.price} MRP  <span class="text-[20px] text-[#35AC4C] ms-[2%]  ">17% OFF</span> </p>

            <p class="mt-[2%] " style="opacity: 0.4;">MRP incl. all taxes</p>
            <hr class="mt-[4%]">

            <p class="text-[#00A0DC] font-[600] text-[18px]   ">Get Free Shipping with  <span>
                <img src="https://cdn.fcglcdn.com/brainbees/images/m/newclub.png" class="inline-block ms-[1%] h-[20px]"  alt=""></span>
            <span class="text-[#FF7043] text-[17px] ms-[55%]">Join Now  
                <i class="fa-solid fa-chevron-right"></i> </span>
            
            
            </p>


            <p class="text-[18px] mt-[4%] ">Shipping Cost  <span class="text-[#35AC4C] text-[18px]">  $ 00</span>  
                 <span class="ms-[7%]">Earn club cash    </span>  
                 <span class="text-[black] text-[18px]">  $ 05</span> 
                 <i class="ri-error-warning-line text-[24px] ms-[1%] text-[#009EDC]"></i></p>

                 <div class="mr w-[56%] rounded-[6px] flex justify-between items-center pe-[5%]
                  mt-[3%] h-[40px] bg-[#F5F5F5]">
                    <div class="mr1  h-[100%] w-[] flex justify-center items-center">
                        <p class="text-[#009FDB] font-[600] text-[18px] ms-[20px]   ">Club Benefits</p>
                    </div>
                    <div class="mr2 h-[100%] w-[] flex justify-center items-center">
                        <div class="imh me-[10px]">
                            <img src="https://cdn.fcglcdn.com/brainbees/images/m/delivecccry.png" alt="">

                        </div>
                        <div class="imh1">
                            <p>Lower Shipping Barrier</p>
                        </div>

                    </div>
                 </div>
                 <hr class="mt-[4%]">
                 <p class="text-[23px] font-[600] text-[black]"> Size  
                    <span class="text-[#FF7043] text-[17px] ms-[82%] text-[20px] font-[600] ">Size Help 
                   </span>
                
                   </p>

                   <div class="ss w-[90%] h-[50px]  flex mt-[4%]">
                    <div class="s1 rounded-[10px] h-[35px] pt-[2px] w-[110px] text-[black] text-center" style="border: 1px solid black;">9-12M</div>
                    <div class="s1 rounded-[10px] h-[35px] pt-[2px] w-[110px] text-[black] ms-[10px] text-center" style="border: 1px solid black; opacity: 0.6;">9-12M</div>
                    <div class="s1 rounded-[10px] h-[35px] pt-[2px] w-[110px] text-[black] ms-[10px] text-center" style="border: 1px solid black; opacity: 0.6;">12-18M</div>
                    <div class="s1 rounded-[10px] h-[35px] pt-[2px] w-[110px] text-[black] ms-[10px] text-center" style="border: 1px solid black; ">18-24M</div>
                    <div class="s1 rounded-[10px] h-[35px] pt-[2px] w-[110px] text-[#FF7043] ms-[10px] text-center" style="border: 1px solid #FF7043;">2-4Y</div>
                    <div class="s1 rounded-[10px] h-[35px] pt-[2px] w-[110px] text-[black] ms-[10px] text-center" style="border: 1px solid black;">4-6Y</div>
                   </div>

        </div>


    </div>
        `
    }).join("")
}




function patchData(res){
    fetch(`http://localhost:3000/single_product`,{
        method:"PATCH",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({...res[0],quantity:1})

    })
    .then((r)=>{
        return r.json();
    })
    .then((res)=>{
        console.log(res);
        
    })
}
