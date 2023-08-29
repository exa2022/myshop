
// var randomNumber = (Math.random())*6;
// var rounded = Math.ceil(randomNumber);

// console.log(rounded);


// var firstN = prompt("Enter the first number: ");
// var secN = prompt("Enter the second number: ");


// function multiply(n1, n2)
// {
//     return n1*n2;
// }

// alert(multiply(firstN,secN));


// var array = [1,2,3,4];

// for(i = 0; i<4; i++)
// {
//     console.log(array[i]);
// }

// array.push(5);

// for(i = 0; i<5; i++)
// {
//     console.log(array[i]);
// }


// var array2 = [];

// var counter = 0;

// var breakTimeShift = counter + 3;

// function getPomodoroBreakTimes()
// {
//     while(counter!=99)
//     {
//         if(counter != breakTimeShift)
//         {
//             array2.push(5);
//         }
//         else
//         {
//             array2.push(15);
//             breakTimeShift += 4;
//         }
//         counter++;
//     }
// }
   

// getPomodoroBreakTimes();
// console.log(array2);


// var array = [13,23,12,45,22,48,66,100];

// // for(var i = 0; i<array.length; i++)
// // {
// //     if(array[i]%2==0)
// //     {
// //         console.log(array[i]);
// //     }
// // }



// var array = [2, 7, 8, 8, 6, 1, 6, 3];

// function isSpecialArray(arr) 
// {

//     var isSpecial = true;
    
//     var counter = 0;
    
//     for(var i = 0; i<arr.length; i++)
//     {
//         if(i%2===0)
//         {
//             if(arr[i] % 2 === 0)
//             {
//                 counter++;
//             }
//         }
//         else
//         {
//             if(arr[i] % 2 !==0 )
//             {
//                 counter++;
//             }
//         }
//     }
    
    
//     if(counter == arr.length)
//     {
//         console.log(isSpecial) ;
//     }
//     else
//     {
//         console.log(false);
//     }
    
// }

// isSpecialArray(array);






// var obj = document.getElementById("Button1");

// console.log(obj);




var button = document.getElementById("member-button").style.boxShadow = "0.5px 5px 15px black";


console.log(button);


// function hideNav()
// {
//     document.querySelector(".main-nav").style.display = "none";

// }

function showReview()
{
    document.querySelector(".review-con").style.opacity = "100%";
    document.querySelector("#product-image1").style.filter = "brightness(0.4)";

}


function hideReview()
{
    document.querySelector(".review-con").style.opacity = "0%";
    document.querySelector("#product-image1").style.filter = "brightness(1)";

}


function showReview2()
{
    document.querySelector(".review-con2").style.opacity = "100%";
    document.querySelector("#product-image2").style.filter = "brightness(0.4)";

}


function hideReview2()
{
    document.querySelector(".review-con2").style.opacity = "0%";
    document.querySelector("#product-image2").style.filter = "brightness(1)";

}


function showReview3()
{
    document.querySelector(".review-con3").style.opacity = "100%";
    document.querySelector("#product-image3").style.filter = "brightness(0.4)";

}


function hideReview3()
{
    document.querySelector(".review-con3").style.opacity = "0%";
    document.querySelector("#product-image3").style.filter = "brightness(1)";

}


function showReview4()
{
    document.querySelector(".review-con4").style.opacity = "100%";
    document.querySelector("#product-image4").style.filter = "brightness(0.4)";

}


function hideReview4()
{
    document.querySelector(".review-con4").style.opacity = "0%";
    document.querySelector("#product-image4").style.filter = "brightness(1)";

}

var product = document.querySelector("#product-image1")

product.addEventListener("mouseover", showReview);
product.addEventListener("mouseout", hideReview);


var product2 = document.querySelector("#product-image2")

product2.addEventListener("mouseover", showReview2);
product2.addEventListener("mouseout", hideReview2);


var product3 = document.querySelector("#product-image3")

product3.addEventListener("mouseover", showReview3);
product3.addEventListener("mouseout", hideReview3);


var product4 = document.querySelector("#product-image4")

product4.addEventListener("mouseover", showReview4);
product4.addEventListener("mouseout", hideReview4);


//Event Listener for Video Ending


var ended = document.querySelector("#intro video")

ended.addEventListener("ended", message);


function message()
{
    console.log("Hello, thanks for watching this video.");
}





var sun = document.getElementById("sun-icon");
var moon = document.getElementById("moon-icon");
var body = document.getElementsByTagName("body")[0]
var introText = document.querySelector("#intro p");
var suits = document.querySelector(".product-nav a");


function darkMode()
{
    sun.style.display="none";
    moon.style.display="block";
    body.classList.toggle("body-dark");
    introText.style.color="white";
    suits.style.color="white";

}

function lightMode()
{
    sun.style.display="block";
    moon.style.display="none";
    body.classList.toggle("body-dark");
    introText.style.color="black";
    suits.style.color="purple";
}





var num1 = "";
var num2 = "";
var equalSign = document.getElementById("equal");

//var result;

var isNumber1Ready = false;


function formNumber(n)
{
    if(!isNumber1Ready){
        num1 += n;
        document.getElementById("displayNum").textContent = num1;
    }
    else{
        num2 += n;
        document.getElementById("displayNum").textContent = num2;

    }
}

function sum(n1,n2)
{
    return n1+n2;
}

function subtract(n1,n2)
{
    return n1-n2;
}

function multiply(n1,n2)
{
    return n1*n2;
}


function divide(n1,n2)
{
    return n1/n2;
}


function cal(p1, p2, operator)
{
    p2 = Number(p2);
    result = operator(p1,p2);
    document.getElementById("displayNum").textContent = result;


}

function opSum()
{
    num1 = Number(num1);
    isNumber1Ready = true;
    equalSign.setAttribute("onclick", "cal(num1,num2,sum)");
}

function opSubtract()
{
    num1 = Number(num1);
    isNumber1Ready = true;
    equalSign.setAttribute("onclick", "cal(num1,num2,subtract)");
}


function opMultiply()
{
    num1 = Number(num1);
    isNumber1Ready = true;
    equalSign.setAttribute("onclick", "cal(num1,num2,multiply)");
}


function opDivide()
{
    num1 = Number(num1);
    isNumber1Ready = true;
    equalSign.setAttribute("onclick", "cal(num1,num2,divide)");
}



//Creating a Constructor

var user2 = {
    name: "Ekansh",
    lastName: "Agrawal",
    display: function(){return "Hello, " + user2.name},
}


function CreateUser(name)
{
    this.name = name;
    this.greeting = function(){return "Hello, " + this.name};
}


function userOutput()
{
    fullName = document.getElementById("fullName").value;
    console.log(fullName);
    var user1 = new CreateUser(fullName);
    var greeting = "Welcome, " + user1.name;
    document.getElementById("userText").textContent = greeting;

}




















