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
var ArrayOfPets = JSON.parse(jsonString);
let popupBg = document.querySelector('.b-popup'); // Фон попап окна
let popup = document.querySelector('.b-popup-content');
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getIndex(i){
    let Array = JSON.parse(jsonString);
    for (let j=0;j<Array.length;j++){
        
        if (JSON.stringify(i)===JSON.stringify(Array[j])) return j;
    }
}
function random(arr,number) {
    let newarray=[];
    usedpets.sort((a,b)=> a-b);
    console.log(usedpets);
    let ind=0;
    for (let i of usedpets){
        arr.splice(i-ind,1);
        ind++;
    }
    usedpets=[];
    for (let i=0;i<number;i++){
	let key = getRandomInt(0, arr.length - 1);
    newarray.push(arr[key]);
    console.log(arr[key]);
    usedpets.push(getIndex(arr[key]));
    arr.splice(key,1);
    }
    arr=JSON.parse(jsonString);
	return newarray;
}

function carousel1280(){
    let ArrayOfPets = JSON.parse(jsonString);
    let newpets=random(ArrayOfPets,3);
    console.log(newpets);
    console.log(ArrayOfPets);
    let img=document.getElementById('pet1img');
    img.setAttribute("src", newpets[0]["img"]);
    let name=document.getElementById('pet1text');
    name.textContent=newpets[0]["name"];
    img=document.getElementById('pet2img');
    img.setAttribute("src", newpets[1]["img"]);
    name=document.getElementById('pet2text');
    name.textContent=newpets[1]["name"];
    img=document.getElementById('pet3img');
    img.setAttribute("src", newpets[2]["img"]);
    name=document.getElementById('pet3text');
    name.textContent=newpets[2]["name"];   
}
function carousel320(){
    let ArrayOfPets = JSON.parse(jsonString);
    let newpets=random(ArrayOfPets,1);
    console.log(newpets);
    console.log(ArrayOfPets);
    let img=document.getElementById('pet4img');
    img.setAttribute("src", newpets[0]["img"]);
    let name=document.getElementById('pet4text');
    name.textContent=newpets[0]["name"];      
}
function popup1(){
    let obj=ArrayOfPets[usedpets[0]];
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
function popup2(){
    let obj=ArrayOfPets[usedpets[1]];
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
function popup3(){
    let obj=ArrayOfPets[usedpets[2]];
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
//console.log(random(ArrayOfPets,3));
console.log(usedpets);


arrowbtn1.onclick=carousel1280;
arrowbtn2.onclick=carousel1280;
arrowbtn3.onclick=carousel320;
arrowbtn4.onclick=carousel320;
lmbtn1.onclick=popup1;
lmbtn2.onclick=popup2;
lmbtn3.onclick=popup3;
lmbtn4.onclick=popup1;

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
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