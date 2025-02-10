let movies= [
    {
        name: "falcon and the winter soldier",
        des:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sint quia. Alias ducimus possimus obcaecati neque, fugiat, eius provident deserunt porro nisi non totam, laboriosam autem vel voluptatibus iure veniam?e",
        image:"D:\JILL\Jill Programs\VS Code\HTML\Disney_Hotstar\hotstar-main\images\slider 2.PNG",
    },
    {
        name: "Loki",
        des:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sint quia. Alias ducimus possimus obcaecati neque, fugiat, eius provident deserunt porro nisi non totam, laboriosam autem vel voluptatibus iure veniam?e",
        image:"D:\JILL\Jill Programs\VS Code\HTML\Disney_Hotstar\hotstar-main\images\slider 1.PNG",
    },
    {
        name: "wanda vision",
        des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sint quia. Alias ducimus possimus obcaecati neque, fugiat, eius provident deserunt porro nisi non totam, laboriosam autem vel voluptatibus iure veniam?e",
        image:"D:\JILL\Jill Programs\VS Code\HTML\Disney_Hotstar\hotstar-main\images\slide 3.PNG",
    },
    {
        name: "raya and the last dragon",
        des:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sint quia. Alias ducimus possimus obcaecati neque, fugiat, eius provident deserunt porro nisi non totam, laboriosam autem vel voluptatibus iure veniam?e",
        image:"D:\JILL\Jill Programs\VS Code\HTML\Disney_Hotstar\hotstar-main\images\slide 4.PNG",
    },
    {
        name: "luca",
        des:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sint quia. Alias ducimus possimus obcaecati neque, fugiat, eius provident deserunt porro nisi non totam, laboriosam autem vel voluptatibus iure veniam?e",
        image:"D:\JILL\Jill Programs\VS Code\HTML\Disney_Hotstar\hotstar-main\images\slide 5.PNG",
    },
];
const carousel=document.querySelector('.carousel');
let slider=[];
let slideIndex=0;
const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    let slide= document.createElement('div');
    var imgElement= document.createElement('div');
    let content= document.createElement('div');
    let h1= document.createElement('div');
    let p= document.createElement('div');
    
    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.appendChild(document.createTextNode(movies[slideIndex].des))
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up Images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements calssnams
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie=title";
    p.className="movie-des";

    slider.push(slide);

    if(slide.length)
    {
        slider[0].style.marginLeft = `clac(-${100 * (slider.length = 2)}%- ${
            30 * (slider.length-2)
        }px)`;
    }
}

for(let i=0;i<=3;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);

const videoCard= [document.querySelectorAll('.video-card')];

videoCard.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video =item.children[1];
        video.play()
    });
    item.addEventListener('mouseleave',()=>{
    let video=item.children[1];
    video.pause();
    });
});

//card sliders
let cardContainers=[...document.querySelectorAll('.card-cotainer')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxtBtns')];

cardContainers.forEach((item,i)=>{
    let containerDimentions=item.getBoundingClientRect();
    let containerWidth=containerDimentions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth -200;
    });
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft-= containerWidth +200;
    });
});