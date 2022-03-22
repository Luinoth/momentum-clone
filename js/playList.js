const playlist = [
{
  link: "https://www.youtube.com/embed/UkjFV-66E2c" ,
  //닌텐도 로우파이 플레이리스트
},
{
  link: "https://www.youtube.com/embed/aHjPBWJKJyM",
  //서울여자 마지막트랙 한시간버전
},
{
  link: "https://www.youtube.com/embed/Jm5v-dZnYCs" ,
  //노마드코더 플레이리스트
},
{
  link: "https://www.youtube.com/embed/iRnOsaaSPpo",
  //동물의 숲 플레이리스트
},
{
  link: "https://www.youtube.com/embed/f4ubpOqBBBI",
  //ff14 플레이리스트
}
];

const todays = document.querySelector("#playlist iframe");

const todaysPlaylist = playlist[Math.floor(Math.random() * playlist.length)];

todays.src = todaysPlaylist.link;