
var NowActive=document.getElementsByClassName("Active");
var Pushing=document.getElementsByClassName("NonActive");



//タブ数だけfor分でループすれば複数タブ作ってもOK?
Pushing[0].onclick = function() {
  /*for (let step=0;step<2;step++) {
    NowActive[step].classList.remove("Active");
    Pushing[step].classList.remove("NonActive");
    NowActive[step].classList.add("NonActive");
    Pushing[step].classList.add("Active");
  }*/

  Pushing[0].style.color="#000";
  Pushing[0].style.backgroundColor="#fff";
  NowActive[0].style.color="#fff";
  NowActive[0].style.backgroundColor="#888";
  Pushing[1].style.display="block";
  NowActive[1].style.display="none";

  for (let step=0;step<2;step++) {
    NowActive[step].classList.replace("Active","NonActive");
    Pushing[step].classList.replace("NonActive","Active");
  }

}
