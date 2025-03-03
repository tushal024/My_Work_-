
fetch(`http://localhost:3000/product`)
.then((r)=>{
    return r.json();
})
.then((res)=>{
    console.log(res);
    document.getElementById("box").innerHTML=view(res)
    
})
.catch((err)=>{
    console.log(err);
    
})



function view(arr){
    return arr.map((el)=>{
        return` 
              <div id="b11"  class="flex flex-col w-[24%]">
            <div id="im">
            <a href="single_product.html?id=${el.id}">
                <img src="${el.img}" alt=""> </a>
            </div>
            <div id="tex">
                <p class="mb-[10px]">  ${el.dis}</p>
               <img src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png" alt="" class="inline-block"> 
               <span>$ ${el.price}</span> <span>(17% off)</span>
                <p class="mt-[10px]"> Get it by   <span class="font-[500]"> Sunday, Oct 6</span></p>
            </div>
        </div>           
 `
    }).join("")
}



{/* <a href=" single_product.html?id=${el.id}"   style="border: 1px solid black;"> */}

{/* <div id="im" class="w-[100%] flex items-center justify-center">

<img src="${el.img}" alt="">

</div>
<div id="tex">
<p class="mb-[10px]"> ${el.dis}</p>

<img src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png" alt="" class="inline-block"> <span>$ ${el.price} </span> <span>(17% off)</span>
<p class="mt-[10px]"> Get it by   <span class="font-[500]"> Sunday, Oct 6</span></p>
</div>
</div> </a> */}