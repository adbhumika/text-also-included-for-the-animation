const bodyElement=document.querySelector('body');
const imageurls=[
     "text.png",
     "image.png"
];
bodyElement.addEventListener("mousemove",(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanElement=document.createElement("span");
    spanElement.style.position="absolute";
    spanElement.style.left=xPos + "px";
    spanElement.style.top=yPos + "px";

    const size=Math.random()*100;
    spanElement.style.width=size + "px";
    spanElement.style.height=size + "px";
    
    const randomIndex=Math.floor(Math.random()*imageurls.length);
    const randomimageurls=imageurls[randomIndex];
    spanElement.style.backgroundImage=`url("${randomimageurls}")`;

    bodyElement.appendChild(spanElement);
      setTimeout(()=>{
        spanElement.remove();
    },6000);
});
bodyElement.addEventListener("click", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const divElement = document.createElement("div");
    divElement.innerText = "cool";
    divElement.innerText="happy";
    divElement.style.position = "absolute";
    divElement.style.left = xPos + "px";
    divElement.style.top = yPos + "px";

    divElement.style.fontSize = "40px";
    divElement.style.fontWeight = "bold";

    const randomIndex = Math.floor(Math.random() * imageurls.length);
    const randomImageUrl = imageurls[randomIndex];
    divElement.style.backgroundImage = `url("${randomImageUrl}")`;
    divElement.style.backgroundSize = "cover";
    divElement.style.color = "transparent";
    divElement.style.backgroundClip = "text";
    divElement.style.WebkitBackgroundClip = "text";

    bodyElement.appendChild(divElement);
    setTimeout(() => {
        divElement.remove();
    }, 6000);
});

  

