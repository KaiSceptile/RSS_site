var headernav = document.getElementById("headernav");

// Get the offset position of the navbar
var sticky = headernav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    headernav.classList.add("sticky")
  } else {
    headernav.classList.remove("sticky");
  }
}
const jsonString=`[
  {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": [ "none" ],
      "diseases": [ "none" ],
      "parasites": [ "none" ]
  },
  {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": [ "parvovirus" ],
      "diseases": [ "none" ],
      "parasites": [ "none" ]
  },
  {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": [ "adenovirus", " distemper" ],
      "diseases": [ "right back leg mobility reduced" ],
      "parasites": [ "none" ]
  },
  {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": [ "parainfluenza" ],
      "diseases": [ "none" ],
      "parasites": [ "none" ]
  },
  {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": [ "panleukopenia" ],
      "diseases": [ "none" ],
      "parasites": [ "none" ]
  },
  {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": [ "calicivirus", " viral rhinotracheitis" ],
      "diseases": [ "kidney stones" ],
      "parasites": [ "none" ]
  },
  {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": [ "rabies" ],
      "diseases": [ "none" ],
      "parasites": [ "none" ]
  },
  {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": [ "bordetella bronchiseptica", " leptospirosis" ],
      "diseases": [ "deafness", " blindness" ],
      "parasites": [ "lice", " fleas" ]
  }
]`;
var usedpets=[4,0,2];
const indexes=[0,1,2,3,4,5,6,7];
var ArrayOfPets = JSON.parse(jsonString);
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getIndex(i){
    let Array = JSON.parse(jsonString);
    for (let j=0;j<Array.length;j++){
        
        if (JSON.stringify(i)===JSON.stringify(Array[j])) return j;
    }
}
function random8(unused){
   let result=[];
   let t=[];
   for (let i=0;i<=7;i++){
     let check=true;
    if (unused!=[]) for (let j of unused){
      if (j==i) check=false;
                                        }
    if (check) t.push(i);
   }
   for (let i=t.length - 1;i>=0;i--){
    let key = getRandomInt(0, t.length - 1);
    result.push(t[key]);
    t.splice(key,1);
   }
   return result;
}
function random() {
    let resultarr=[];
    let unused=[];
    for (let c=1;c<=2;c++){
    unused=[];
    for (let i=1;i<=3;i++){
      let arr=random8(unused);
      unused.push(arr.pop());
      unused.push(arr.pop());
      resultarr=resultarr.concat(arr);
      resultarr=resultarr.concat(unused);
    }
  }
  return resultarr;
}
//1280
function pets1280(curpage){
  let img=document.getElementById('pet1img');
  img.setAttribute("src", ArrayOfPets[Pets[8*(curpage-1)]]["img"]);
  let name=document.getElementById('pet1p');
  name.textContent=ArrayOfPets[Pets[8*(curpage-1)]]["name"];
  img=document.getElementById('pet2img');
  img.setAttribute("src", ArrayOfPets[Pets[1+8*(curpage-1)]]["img"]);
  name=document.getElementById('pet2p');
  name.textContent=ArrayOfPets[Pets[1+8*(curpage-1)]]["name"];
  img=document.getElementById('pet3img');
  img.setAttribute("src", ArrayOfPets[Pets[2+8*(curpage-1)]]["img"]);
  name=document.getElementById('pet3p');
  name.textContent=ArrayOfPets[Pets[2+8*(curpage-1)]]["name"];
  img=document.getElementById('pet4img');
  img.setAttribute("src", ArrayOfPets[Pets[3+8*(curpage-1)]]["img"]);
  name=document.getElementById('pet4p');
  name.textContent=ArrayOfPets[Pets[3+8*(curpage-1)]]["name"];
  img=document.getElementById('pet5img');
  img.setAttribute("src", ArrayOfPets[Pets[4+8*(curpage-1)]]["img"]);
  name=document.getElementById('pet5p');
  name.textContent=ArrayOfPets[Pets[4+8*(curpage-1)]]["name"];
  img=document.getElementById('pet6img');
  img.setAttribute("src", ArrayOfPets[Pets[5+8*(curpage-1)]]["img"]);
  name=document.getElementById('pet6p');
  name.textContent=ArrayOfPets[Pets[5+8*(curpage-1)]]["name"];
  img=document.getElementById('pet7img');
  img.setAttribute("src", ArrayOfPets[Pets[6+8*(curpage-1)]]["img"]);
  name=document.getElementById('pet7p');
  name.textContent=ArrayOfPets[Pets[6+8*(curpage-1)]]["name"];
  img=document.getElementById('pet8img');
  img.setAttribute("src", ArrayOfPets[Pets[7+8*(curpage-1)]]["img"]);
  name=document.getElementById('pet8p');
  name.textContent=ArrayOfPets[Pets[7+8*(curpage-1)]]["name"];
}
function rightpage1280(){
  curpage++;
  if (curpage>6){
    curpage=6;
  } else {
  let page=document.getElementById('numpages');
  page.textContent=curpage;
  pets1280(curpage);
  }
}
function leftpage1280(){
  curpage--;
  if (curpage<1){
    curpage=1;
  } else {
  let page=document.getElementById('numpages');
  page.textContent=curpage;
  pets1280(curpage);
  }
}
function startpage1280(){
  curpage=1;
  let page=document.getElementById('numpages');
  page.textContent=curpage;
  pets1280(curpage);
}
function endpage1280(){
  curpage=6;
  let page=document.getElementById('numpages');
  page.textContent=curpage;
  pets1280(curpage);
}
//768
function pets768(curpage){
  let img=document.getElementById('pet1img1');
    img.setAttribute("src", ArrayOfPets[Pets[6*(curpage-1)]]["img"]);
    let name=document.getElementById('pet1p1');
    name.textContent=ArrayOfPets[Pets[6*(curpage-1)]]["name"];
    img=document.getElementById('pet2img1');
    img.setAttribute("src", ArrayOfPets[Pets[1+6*(curpage-1)]]["img"]);
    name=document.getElementById('pet2p1');
    name.textContent=ArrayOfPets[Pets[1+6*(curpage-1)]]["name"];
    img=document.getElementById('pet3img1');
    img.setAttribute("src", ArrayOfPets[Pets[2+6*(curpage-1)]]["img"]);
    name=document.getElementById('pet3p1');
    name.textContent=ArrayOfPets[Pets[2+6*(curpage-1)]]["name"];
    img=document.getElementById('pet4img1');
    img.setAttribute("src", ArrayOfPets[Pets[3+6*(curpage-1)]]["img"]);
    name=document.getElementById('pet4p1');
    name.textContent=ArrayOfPets[Pets[3+6*(curpage-1)]]["name"];
    img=document.getElementById('pet5img1');
    img.setAttribute("src", ArrayOfPets[Pets[4+6*(curpage-1)]]["img"]);
    name=document.getElementById('pet5p1');
    name.textContent=ArrayOfPets[Pets[4+6*(curpage-1)]]["name"];
    img=document.getElementById('pet6img1');
    img.setAttribute("src", ArrayOfPets[Pets[5+6*(curpage-1)]]["img"]);
    name=document.getElementById('pet6p1');
}
function rightpage768(){
  curpage++;
  if (curpage>8){
    curpage=8;
  } else {
  let page=document.getElementById('numpages1');
  page.textContent=curpage;
  pets768(curpage);
  }
}
function leftpage768(){
  curpage--;
  if (curpage<1){
    curpage=1;
  } else {
    let page=document.getElementById('numpages1');
    page.textContent=curpage;
    pets768(curpage);
  }
}
function startpage768(){
  curpage=1;
  let page=document.getElementById('numpages1');
  page.textContent=curpage;
  pets768(curpage);
}
function endpage768(){
  curpage=8;
  let page=document.getElementById('numpages1');
  page.textContent=curpage;
  pets768(curpage);
}
//320
function pets320(curpage){
  let img=document.getElementById('pet1img2');
  img.setAttribute("src", ArrayOfPets[Pets[3*(curpage-1)]]["img"]);
  let name=document.getElementById('pet1p2');
  name.textContent=ArrayOfPets[Pets[3*(curpage-1)]]["name"];
  img=document.getElementById('pet2img2');
  img.setAttribute("src", ArrayOfPets[Pets[1+3*(curpage-1)]]["img"]);
  name=document.getElementById('pet2p2');
  name.textContent=ArrayOfPets[Pets[1+3*(curpage-1)]]["name"];
  img=document.getElementById('pet3img2');
  img.setAttribute("src", ArrayOfPets[Pets[2+3*(curpage-1)]]["img"]);
  name=document.getElementById('pet3p2');
  name.textContent=ArrayOfPets[Pets[2+3*(curpage-1)]]["name"];
}
function rightpage320(){
  curpage++;
  if (curpage>16){
    curpage=16;
  } else {
  let page=document.getElementById('numpages2');
  page.textContent=curpage;
  pets320(curpage);
    
  }
}
function leftpage320(){
  curpage--;
  if (curpage<1){
    curpage=1;
  } else {
    let page=document.getElementById('numpages2');
    page.textContent=curpage;
    pets320(curpage);
  }
}
function startpage320(){
  curpage=1;
  let page=document.getElementById('numpages2');
  page.textContent=curpage;
  pets320(curpage);
}
function endpage320(){
  curpage=16;
  let page=document.getElementById('numpages2');
  page.textContent=curpage;
  pets320(curpage);
}
function petinf(obj){
  let img=document.getElementById('popupimg');
  img.setAttribute("src", obj["img"]);
  let name=document.getElementById('cardhead');
  name.textContent=obj["name"];
  let spec=document.getElementById('cardspec');
  spec.textContent=obj["type"]+' '+obj["breed"];
  let about=document.getElementById('cardabout');
  about.textContent=obj["description"];
  let age=document.getElementById('age');
  age.textContent="Age: "+obj["age"];
  let inoc=document.getElementById('inoc');
  inoc.textContent="Inoculations: "+obj["inoculations"];
  let dis=document.getElementById('disease');
  dis.textContent="Diseases: "+obj["diseases"];
  let par=document.getElementById('parasit');
  par.textContent="Parasites: "+obj["parasites"];
}
function popup1280_1(){
  let obj=ArrayOfPets[Pets[8*(curpage-1)]];
  petinf(obj);
}
function popup1280_2(){
  let obj=ArrayOfPets[Pets[1+8*(curpage-1)]];
  petinf(obj);
}
function popup1280_3(){
  let obj=ArrayOfPets[Pets[2+8*(curpage-1)]];
  petinf(obj);
}
function popup1280_4(){
  let obj=ArrayOfPets[Pets[3+8*(curpage-1)]];
  petinf(obj);
}
function popup1280_5(){
  let obj=ArrayOfPets[Pets[4+8*(curpage-1)]];
  petinf(obj);
}
function popup1280_6(){
  let obj=ArrayOfPets[Pets[5+8*(curpage-1)]];
  petinf(obj);
}
function popup1280_7(){
  let obj=ArrayOfPets[Pets[6+8*(curpage-1)]];
  petinf(obj);
}
function popup1280_8(){
  let obj=ArrayOfPets[Pets[7+8*(curpage-1)]];
  petinf(obj);
}
function popup768_1(){
  let obj=ArrayOfPets[Pets[6*(curpage-1)]];
  petinf(obj);
}
function popup768_2(){
  let obj=ArrayOfPets[Pets[1+6*(curpage-1)]];
  petinf(obj);
}
function popup768_3(){
  let obj=ArrayOfPets[Pets[2+6*(curpage-1)]];
  petinf(obj);
}
function popup768_4(){
  let obj=ArrayOfPets[Pets[3+6*(curpage-1)]];
  petinf(obj);
}
function popup768_5(){
  let obj=ArrayOfPets[Pets[4+6*(curpage-1)]];
  petinf(obj);
}
function popup768_6(){
  let obj=ArrayOfPets[Pets[5+6*(curpage-1)]];
  petinf(obj);
}
function popup320_1(){
  let obj=ArrayOfPets[Pets[3*(curpage-1)]];
  petinf(obj);
}
function popup320_2(){
  let obj=ArrayOfPets[Pets[1+3*(curpage-1)]];
  petinf(obj);
}
function popup320_3(){
  let obj=ArrayOfPets[Pets[2+3*(curpage-1)]];
  petinf(obj);
}

let Pets=random();
let curpage=1;
pets768(1);
pets320(1);
pets1280(1);
    
bright1280.onclick=rightpage1280;
bend1280.onclick=endpage1280;
bleft1280.onclick=leftpage1280;
bstart1280.onclick=startpage1280;
bright768.onclick=rightpage768;
bend768.onclick=endpage768;
bleft768.onclick=leftpage768;
bstart768.onclick=startpage768;
bright320.onclick=rightpage320;
bend320.onclick=endpage320;
bleft320.onclick=leftpage320;
bstart320.onclick=startpage320;
let popupBg = document.querySelector('.b-popup'); // Фон попап окна
let popup = document.querySelector('.b-popup-content');
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
lmbtn1.onclick=popup1280_1;
lmbtn2.onclick=popup1280_2;
lmbtn3.onclick=popup1280_3;
lmbtn4.onclick=popup1280_4;
lmbtn5.onclick=popup1280_5;
lmbtn6.onclick=popup1280_6;
lmbtn7.onclick=popup1280_7;
lmbtn8.onclick=popup1280_8;
lmbtn11.onclick=popup768_1;
lmbtn21.onclick=popup768_2;
lmbtn31.onclick=popup768_3;
lmbtn41.onclick=popup768_4;
lmbtn51.onclick=popup768_5;
lmbtn61.onclick=popup768_6;
lmbtn12.onclick=popup320_1;
lmbtn22.onclick=popup320_2;
lmbtn32.onclick=popup320_3;
window.onscroll = function() {myFunction()};

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll = function() {myFunction()};
}

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault();
      disableScrolling();
      //popup1(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  enableScrolling();
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      enableScrolling();
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
});
// Get the navbar
