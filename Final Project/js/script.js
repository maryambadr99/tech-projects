// var degree= prompt("enter your degree")

// if (degree==null) console.log("enter your degree")

//     else if(100>degree && degree>=90) console.log("A")

//         else if(90>degree && degree>=80) console.log("B")

//         else if (80>degree && degree>=70) console.log("C")

//         else console.log("F")

// var namee= prompt("enter your name")
// switch (namee){
//     case "maryam":
//         console.log('welcome maryam')
//         break
//     case "ahmed":
//         console.log("welcome ahmed")
//         break
//     default: console.log('user not found')
// }


// for(var i=1; i<=10; i++){
//     if (i== 6) console.log("num is 5")
//         // else if (i==8) break
//     console.log(i) 
// }



// function loop(start, end, num1 , num2){
//     if (start==undefined || end==undefined || num1== undefined || num2==undefined){
//         alert("please enter your numbers")
//         return;
//     }

// for(var i = start; i <= end ; i++){
//     if (i=== num1) break;
//     if (i=== num2) continue;
//     console.log(i)
//  }
// }
// loop(5, 8, 10)

// var courseList = ["html" , "css" ,"JS" , "ts" , "Angular"]

// courseList.filter((ele)=>{
//     prompt("enter name");

//     console.log(courseList)

// })-=32
$(document).ready(function(){
  $(".carousel-one").owlCarousel(
{
  items : 5,
  loop : true,
  nav :true,
}
  );
});


$(document).ready(function(){
  $(".carousel-two").owlCarousel(
{
  items : 8,
  loop : true,
  autoplay: true,        
  autoplayTimeout: 2000,   
  autoplayHoverPause: true 
}
  );
});


let hoursEl = document.getElementById("hours"),
    minutesEl = document.getElementById("minutes"),
    secondsEl = document.getElementById("seconds");

let endTime = Date.now() + 8 * 60 * 60 * 1000; 

setInterval(() => {
  let t = endTime - Date.now();
  if (t <= 0) t = 0;

  let h = String(Math.floor(t / 3600000)).padStart(2, "0");
  let m = String(Math.floor((t % 3600000) / 60000)).padStart(2, "0");
  let s = String(Math.floor((t % 60000) / 1000)).padStart(2, "0");

  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
}, 1000);



function changeImage(element) {
    document.getElementById('mainImage').src = element.src;

    document.querySelectorAll('.thumb-img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
  }


  $(document).ready(function(){
  $(".carousel-three").owlCarousel(
{
  items : 3,
  loop : true,
}
  );
});


window.addEventListener('scroll', () => {
      document.querySelector('.head')
        .classList.toggle('my-shadow', window.scrollY > 0);
    });




//  function applyFilters() {
//     const selectedColors = Array.from(document.querySelectorAll(".filter-color:checked"));
//     const selectedRanges = Array.from(document.querySelectorAll(".filter-price:checked"));

//     document.querySelectorAll(".product-card").forEach(card => {
//       const color = card.getAttribute("data-color");
//       const price = parseInt(card.getAttribute("data-price"));

  
//       if (selectedColors.length > 0 && !selectedColors.includes(color)) {
//         visible = false;
//       }

   
//       if (selectedRanges.length > 0) {
//         let inRange = false;
//         selectedRanges.forEach(r => {
//           const [min, max] = r.split("-").map(Number);
//           if (price >= min && price <= max) inRange = true;
//         });
//        
//       }

     
//       if (minInput !== null && price < minInput) visible = false;
//       if (maxInput !== null && price > maxInput) visible = false;

    
//       card.style.display = visible ? "block" : "none";
//     });
//   }

  
//   document.querySelectorAll(".filter-color, .filter-price").forEach(cb => cb.addEventListener("change", applyFilters));
//   document.getElementById("applyPriceFilter").addEventListener("click", applyFilters);



document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;
  document.querySelectorAll('.text-danger').forEach(el => el.textContent = '');
  document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('is-invalid'));

  const name = document.getElementById('userName');
  const email = document.getElementById('userEmail');
  const subject = document.getElementById('userSubject');
  const message = document.getElementById('userMessage');

  if (!name.value.trim()) {
    showError(name, 'Name is required');
    isValid = false;
  }

  if (!email.value.trim() || !email.value.includes('@')) {
    showError(email, 'Valid email is required');
    isValid = false;
  }

  if (!subject.value.trim()) {
    showError(subject, 'Subject is required');
    isValid = false;
  }

  if (!message.value.trim()) {
    showError(message, 'Message is required');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});

function showError(input, message) {
  input.classList.add('is-invalid');
  input.nextElementSibling.textContent = message;
}
