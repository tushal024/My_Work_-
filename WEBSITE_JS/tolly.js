let tolly;
fetch(`http://localhost:3000/single_product`)
    .then((r) => {
        return r.json();
    })
    .then((ress) => {
        
        console.log(ress);
        // document.getElementById("tb").innerHTML = view(res)
        // console.log();
        tolly = ress.length;
    document.getElementById("toll").innerHTML=tolly        
        // console.log(res.length);

    })
    .catch((er) => {
        console.log(er);

    })

