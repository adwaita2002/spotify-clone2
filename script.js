console.log("welcome to spotify")

let songindex=0;
let audioElement= new Audio('song/1.mp3');
// audioElement.play();
// console.log(audioElement);
let masterplay=document.getElementById('masterplay');
// comsole.log(masterplay);
let myprogressber=document.getElementById('myprogressber');
let adi=document.getElementById('adi');
console.log(adi);
let songitems=Array.from(document.getElementsByClassName('songitem'));
// console.log(songitems);

let songitemplay=document.getElementsByClassName('songItemPlay');





let songs=[
    {songName:"Zehal-Dilko-Kise",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"Khbsurat-Tum-Mera...",filepath:"song/2.mp3",coverpath:"cover/2.jpg"},
    {songName:"Pheli-Barish-Ho",filepath:"song/3.mp3",coverpath:"cover/3.jpg"},
    {songName:"Parosoori-Tum-Ho",filepath:"song/4.mp3",coverpath:"cover/4.jpg"},
    {songName:"Barsat-Main-Vigne-Accha",filepath:"song/5.mp3",coverpath:"cover/5.jpg"},
    {songName:"Tere-Baste-Main-Chand",filepath:"song/6.mp3",coverpath:"cover/6.jpg"},
    {songName:"salam-e-ishq",filepath:"song/7.mp3",coverpath:"cover/7.jpg"},
]

// console.log(songs)

//   songitems.forEach((element,i)=>{
//     console.log(element,i);
//     element.getElementsByTagName("img")[0].src=songs[i].coverpath;
//     element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    
//   })
// const makeMakeing = () =>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
// })
// }

const makeChange = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}

   masterplay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime <=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
       
        adi.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        makeChange();
        adi.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressber.value=progress;

});

myprogressber.addEventListener('change',()=>{
    audioElement.currentTime=myprogressber.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        


})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        console.log(songindex);
        // console.log(e.target);
        // e.target.classList.remove('fa-circle-play');
        // e.target.classList.add('fa-circle-pause');
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        adi.style.opacity=1;

    })
})

// const makeChange = () =>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
// })

// const makeMaking = () =>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.add('fa-circle-pause');
//         element.classList.remove('fa-circle-play');
// })
// }

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=6){
        songindex=0;
    }
    else{
       songindex += 1;
    }

    //makeChange();
    
    

    audioElement.src=`song/${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        songitemplay.classList.remove('fa-circle-play');
        songitemplay.classList.add('fa-circle-pause');
        
        adi.style.opacity=1;

        //makeMaking(songindex+1);

        

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -= 1;
    }

    audioElement.src=`song/${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        // songitems.classList.add('fa-circle-pause');
        // songitems.classList.remove('fa-circle-play');
        
        adi.style.opacity=1;


})