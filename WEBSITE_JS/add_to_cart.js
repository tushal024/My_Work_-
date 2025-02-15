



let total = 0;
let tolly;
fetch(`http://localhost:3000/single_product`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {

        console.log(res);
        document.getElementById("tb").innerHTML = view(res)

        total += res[0].price
        console.log(res[0].price);
        console.log(total);
        // console.log();
        tolly = res.length;
        document.getElementById("toll").innerHTML = tolly
        // console.log(res.length);

    })
    .catch((er) => {
        console.log(er);

    })





// let k;
let m = 0;
function view(arr) {
    let to = 0;
    return arr.map((el, index) => {


        to += el.price * el.quantity
        document.getElementById("total").innerHTML = ` $${to.toFixed(2)}/-`
        // console.log(to);

        return `
                
            <tr>
            <td class="tdd"  style="   border: 1px solid gray; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
            <img src="${el.img}" alt="">
            </td>
            <td style="border: 1px solid gray; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
            <p class="mb-[10px]"> ${el.dis}</p>
            </td>
            <td id="pree" style="  font-weight: bold; border: 1px solid gray; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
          $${(el.price * el.quantity).toFixed(2)}/-
            </td>
            
            <td  class="aq" style="border: 1px solid gray; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px; font-weight: bold;">
            <div class="ff">
            <button class="ddd" onclick="click1(${el.id},${el.quantity},'dd')">       -     </button>
            <input type="text"  value="${el.quantity}" disabled  id="vc" name=""  placeholder="dasd">
            <button class="ddd"  onclick="click1(${el.id},${el.quantity},'dd1')">+</button>
            </div>
            <td style="border: 1px solid gray; padding-left: 10px; padding-right: 10px ;   padding-top: 5px ; padding-bottom: 5px;">
            <button class="dl   w-[100px] h-[30px] text-[16px] 
            text-[white] rounded-[10px] mb-[3%] bg-[#FF7043]" onclick=" dd(${el.id})">DELATE</button> 
            </td>
            
            </td>
            <td>
             
            </td>
            </tr>       
        `

    }).join("");

}

function click1(id, quantity, click, price) {

    let a = quantity;
    if (click == 'dd1') {
        a = a + 1;
        document.getElementById("pree").innerHTML = price * a;
    }
    else if (click == 'dd') {
        a = a - 1
        if (a <= 0) {
            document.getElementById("vc").setAttribute("disabled")
        }
    }

    fetch(`http://localhost:3000/single_product/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ quantity: a })
    })
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res);
            document.getElementById("tb").innerHTML = view(res)


        })
        .catch((er) => {
            console.log(er);

        })














    console.log(id);
}
function dd(id) {
    fetch(`http://localhost:3000/single_product/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            return res.json();
        })
}


document.getElementById("payt").addEventListener("click",()=>{
    Swal.fire({
        title: "Payment Success....!",
        text: "You clicked the button!",
        icon: "success",

        html: `
            <a href="index.html" autofocus   style=" color: #FF7043;"  class="hover:underline" >  <i class="fa-solid fa-house"></i>   Go to Shopping...  </a>
       `
      });
})