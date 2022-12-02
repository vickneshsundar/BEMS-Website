let i = 0
let images = ["https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600"]
function image() {
    document.getElementById("image").src = images[i]
    if (i < images.length - 1) {
        i++
    }
    else { i = 0 }
    setTimeout("image()", 1000)
}
window.onload = image
let viki = document.getElementById("Enquiry")
function myFunction() {
    viki.style.display = "block"
}
let sona = document.getElementById("X")
function myName() {
    viki.style.display = "none"
}
let karthi = document.getElementById("quick")
function helo() {
    karthi.style.display = "block"
}
let sundar = document.getElementById("cancel")
function cancel() {
    karthi.style.display = "none"
}
let a1 = document.getElementsByClassName("btn1")
let f;
for (f = 0; f < a1.length; f++) {
    a1[f].addEventListener("click", function () {
        this.classList.toggle("active")
        let x = this.nextElementSibling
        if (x.style.display === "block") {
            x.style.display = "none"
        }
        else {
            x.style.display = "block"
        }
    })
}

function search() {
    const input = document.getElementById("filter").value.toUpperCase()
    const cart = document.getElementsByClassName("item")
    for (let i = 0; i < cart.length; i++) {
        var title = cart[i].querySelector(".class-title")
        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cart[i].style.display = ""
        }
        else {
            cart[i].style.display = "none"
        }
    }

}

// function handleSelect(){
//     const butt=document.getElementById("cart")
//     const select=document.getElementsByClassName("select")
//     const n=document.getElementsByClassName("include")
//     for(var action of butt){
//         action.addEventListener("click",(adding)=>{
//             var parent=adding.target.parentNode;
//             var clone=parent.cloneNode(true)
//             clone.lastElementChild.innerText="Book-Now"
//             select.appendChild(clone)

//         })
//     }
// }

const butt = document.getElementById("cart")
const select = document.getElementsByClassName("select")
const n = document.getElementsByClassName("include")
for (var action of butt) {
    action.addEventListener("click", (adding) => {
        var parent = adding.target.parentNode;
        //cloneNode -->
        var clone = parent.cloneNode(true)
        clone.lastElementChild.innerText = "Book-Now"
        select.appendChild(clone)
        
        
    })
}