
//s8   for add serial Number,before the tite
// ata jahato q thake soro hobe ti upora 1 dhora let dilam 
// jata 1 bara bara ekhane jog joy oi sum style are moto lora
let titleCount =1;
let totalPrice =0;

//s1 ffirst card gula k dhorbo cllicable korar jonno
const cards =document.querySelectorAll('.card')
for(let index =0 ;index < cards.length;index++){
    const card =cards[index]
    card.addEventListener('click',function(){
 //s2  spep 1 for get the title
    const title = card.querySelector('h3').innerText
// s3   now add tthe price,. s11. split use for $ and price alada korar jonno than 1 num index nia nibno [1] dia price q num index a asa but ota j num ta return korbe ota string cz split korla string return kora ti ami prseflot use korbo ata a abar number a convert korar jonno,.
const price = parseFloat(card.querySelector('span').innerText.split(" ")[1])

// s4 for inject title and price in khali div
const titlecontainer = document.getElementById('title-container')
//s5 for make p in empty div to inject the title and price
const p = document.createElement('p')
//s6 title ta p ar vitora inject korlam .step 9.string concatination korbo titlegula te index num jog korta.
p.innerText =titleCount+". " + title;
//s10 initial count to 1 dhora asa but  1 2 3 avabe barar jonn0 titlecount ++ dita hoy
titleCount++;
//s7 j p ta mke korci ota oi div a child hisabe patate hobe
titlecontainer.appendChild(p)

// stp 12 calculate price jog jog kora kora ja total price a show korbe initial totalprice 0 dhorbo upora let dia jog hoya hoya okhane joma hobe ,
totalPrice += price
// s13 html a totalprice name a id asa span ar pasa chak koro oi id te totalprice ta set korbo.mon chale const dhora joy but const na dhora ekhane dirct liksa,then innertext kora total price ta dukabo ar diciml ar por 2 disit rakbo ti tofix2 dici
document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);



    })
}


// s1 ata hoto apply section ar jonno
const btn = document.getElementById('apply-btn')
btn.addEventListener('click',function(){
    // s2  gett the input value ti input k  tar id dia dhorbo cz value dia appy korta hobe.//s3 ekon ai input fild thake value nita hobe input fild ar value nile .value use korbo ar tag thake value nile .innertext use korbo jahato ekhane input fild ti .value use korbo ar input valie ta bar korar jonno
    const couponElement = document.getElementById('input-field').value
    // 3 jahato consitionn asa j200 ar upor holai apply lora jabe 20% discount ar jonno ti ekon condition apply korbo,s4 coponcode j asa ota use kora lagbre input a appy korar jonno.ti userr letter jai dik amara ata upprercase a tranform kora nibo ar SALL200 amon e thakte hobe kuno space thaka jbe ja mana code ja asa ta dia sudo appy kora jabe.split kora arry te alada kora abar jora lagaia dibo jata space na thake r string hoy.
    const couponCode = couponElement.split(' ').join("").toUpperCase();
    console.log(couponCode)
    if(totalPrice >= 200){
        // s5 ekon ami coupon card ar chowr sta mathch kora dita parbo
         if(couponCode==="SELL200"){
        // s6 jahato 200 sa koros korca ti discount pabe and discount pale ehone amra disocunt ar id ta dhora anbo
        const discountElement = document.getElementById('discountPrice')
        // disocunt ammonunt bar korcui
        const discountAmount = totalPrice * 0.2;
        discountElement.innerText = discountAmount.toFixed(2)
    //   discount bad dia total koto price hobe sta calcutlatie korchi.ti total ar id ta dhora kaj korbo
    const restTotal = document.getElementById('total')
restTotal.innerText=totalPrice-discountAmount.toFixed(2)
// upora ta aro akbar dhorcilm but input field ta search ar por jata khali hoya jay ti ata ekhane abar dhora emoplyy  kora dibo.jahato ata input fild ti .value empty string dia faka korlm ar tag hotla .innertext empty string daa faka kortam. 
const couponElement = document.getElementById('input-field').value=""
         }else{
            alert('invalid coupon code')
         }

    }else{
        alert('please vi at learst 200 khoroc korran discount pawar jonno')
    }

});
