const bgImage = [
  {
    img: "bg1.png",
    bgColor: "#3f787c",
  },
  {
    img: "bg2.png",
    bgColor: "#4e657e",
  },
  {
    img: "bg3.png",
    bgColor:"#963a20",
  },
  {
    img: "bg4.png",
    bgColor: "#102b4d",
  },
  {
    img: "bg5.png",
    bgColor: "#1d1c35",
  },
];
const backGroundColor = document.querySelector("body");
const backGround = document.createElement("img");


function printBackground(){
  const date = new Date();
  if(date.getHours() >= 5 && date.getHours() <= 7){
    backGroundColor.style.backgroundColor = `${bgImage[2].bgColor}`
    backGround.src = `image/${bgImage[2].img}`;
  }else if (date.getHours() >= 8 && date.getHours() <= 15){
    backGroundColor.style.backgroundColor = `${bgImage[0].bgColor}`
    backGround.src = `image/${bgImage[0].img}`;
  }else if(date.getHours() == 16){
    backGroundColor.style.backgroundColor = `${bgImage[1].bgColor}`
    backGround.src = `image/${bgImage[1].img}`;
  }else if(date.getHours() >= 17 && date.getHours() <= 19){
    backGroundColor.style.backgroundColor = `${bgImage[2].bgColor}`
    backGround.src = `image/${bgImage[2].img}`;
  }else if(date.getHours() >= 20 && date.getHours() <= 21){
    backGroundColor.style.backgroundColor = `${bgImage[3].bgColor}`
    backGround.src = `image/${bgImage[3].img}`;
  }else{
    backGroundColor.style.backgroundColor = `${bgImage[4].bgColor}`
    backGround.src = `image/${bgImage[4].img}`;
  }
  backGround.alt = "배경 이미지";
  backGround.id = "bgImage";
  document.body.appendChild(backGround);
}

printBackground();