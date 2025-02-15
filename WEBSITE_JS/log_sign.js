
const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;


document.querySelector("#Register").addEventListener("submit", (ee) => {
    ee.preventDefault();
    
    let isvalid = true;
    let e = document.getElementById("e1").value
    let p1 = document.getElementById("p1").value


    // if(username.length == 0 ){
    //       document.querySelector("#usernameText").innerText=" Enter username"
    //       isvalid=false
    //    }
    if (emailRegex.test(e) == false) {
        document.querySelector("#Email").innerText = "  email is unvalid"
        isvalid = false
    }
    if (passRegex.test(p1) == false) {
        document.querySelector("#Passwrd").innerText = " password is unvalid"
        isvalid = false
    }

    
    let obj = {
        email:  e,
         pass: p1
      }


    if (isvalid = true) {
       
    
    
    }

   

    fetch(`http://localhost:3000/Register_Data`, {
        method: "POST",
        Headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        

})











document.querySelector("#loginPage").addEventListener("submit", (el) => {
    el.preventDefault();

    let ee = document.getElementById("emm").value
    let pp = document.getElementById("pss").value

    fetch(`http://localhost:3000/Register_Data`)
        .then((r) => {
            return r.json();
        })
        .then((res) => {
        


         
                let ans = res.filter((el) => {
                    if (pp == el.p1 && ee == el.e) {
                        return el;
                    }
                })
                console.log(ans.length);
                

                if (ans.length > 0) {
                    // alert("SUCCESS......")
                    // Swal.fire({
                    //     title: "Log In Success...!",
                    //     text: "You clicked the button!",
                    //     icon: "success"
                    // });
                }
                else {
                    // alert("UNSUCCESS............")
                    // Swal.fire({
                    //     icon: "error",
                    //     title: "Log In Unsuccess...",
                    //     text: "Something went wrong!",
                    //     footer: '<a href="#">Why do I have this issue?</a>'
                    // });

                    Swal.fire({
                        title: "Log In Success...!",
                        icon: "success",
                        text: "You clicked the button!",
                         footer: '<a href="index.html" class="hover:underline text-[#FF7043]"> <i class="fa-solid fa-house"></i>  Go To Shopping...</a>'
                        
                    });

                }


            }

         


    )
        .catch((err) => {
            console.log(err);

        })



})

function view(arr) {

    return arr.map((el) => {
        return `<h1>${el.p1}</h1>
            <h1>${el.e}</h1>
             `
    })

}

