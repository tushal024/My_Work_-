let arr = ["https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_rock_flat50_desktop1725618710866.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_prim2_flat40_desktop1727616252364.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_nonapps_base_dc_hp_30september241727430942277.webp",
]

let x = 0
// console.log(arr.length);
do {
    document.getElementById("im").innerHTML = `<img src="${arr[2]}"  width="100%" height=100%> `
    //  document.getElementById("im").style=`width=100%`
    // arr[0]
} while (false)
setInterval(() => {
    x--
    if (x == -1) {
        x = arr.length - 1
    }
    if (x == 3) {
        x = 0
    }
    document.getElementById("im").innerHTML = `<img src="${arr[x]}" width="100%" height=100%>`
    console.log(x);
}, 3000)
function next() {

    x--
    if (x == -1) {
        x = arr.length - 1
    }

    if (x == 3) {
        x = 0
    }
    document.getElementById("im").innerHTML = `<img src="${arr[x]}" width="100%" height=100%>`
    console.log(x);
}
function prev() {
    x++
    if (x == -1) {

        x = 0
        //   document.getElementById("im").innerHTML=`<img src="${arr[1]}">`
    }

    if (x == arr.length) {
        x = 0
    }
    document.getElementById("im").innerHTML = `<img src="${arr[x]}" width="100%" height=100%> `
    console.log(x);

}



setTimeout(() => {
    // alert("welcome my website.............");

    // document.getElementById("stime").style.display="block"

    // Swal.fire({
    //     imageUrl: "https://cdn.cdnparenting.com/brainbees/community/memoryimages/1727946880932-1727946881_1.webp",

    //     imageHeight: 400,
    //     imageWdth:400,
    //     imageAlt: "A tall image"
    //   });




    //   Swal.fire({
    //     title: "Offer!",
    //     text: "Navratri Contest",
    //     imageUrl: "https://cdn.cdnparenting.com/brainbees/community/memoryimages/1727946880932-1727946881_1.webp",

    //     imageWidth: 500,
    //     imageHeight: 300,



    //     // imageAlt: "Custom image"
    //   });



    Swal.fire({


        imageUrl: "https://cdn.cdnparenting.com/brainbees/community/memoryimages/1727946880932-1727946881_1.webp",
        imageWidth: 500,
        imageHeight: 300,
        showCloseButton: true,
        showCancelButton: true,

        cancelButtonText: `
  <i class="fa fa-thumbs-down"></i>
`,
        cancelButtonAriaLabel: "Thumbs down",

        confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,

        html: `
  <h3 style="font-weight: bold; margin-bottom: 5px;">Navratri Contest</h3>
  <p>Celebrate this Navratri and Share Festive Pics of your Li'l One in Beautiful Dresses</p>
`,
        imageAlt: "A tall image"
    });


}, 4000)
