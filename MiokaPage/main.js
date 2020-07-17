//document.bgColor = "#FFFFEE;  //webの背景色を変更


var Active=document.getElementsByClassName("Active");
var NonActive=document.getElementsByClassName("NonActive");

//タブの色指定
const ActiveColor = "#000";
const ActiveBackColor = "#FFFFEE";
const NonActiveColor = "#fff";
const NonActiveBackColor = "#009966";


//タブの制御
//ホーム
NonActive[0].onclick = function() {
NonActive[0].style.color=ActiveColor;
NonActive[0].style.backgroundColor=ActiveBackColor;
NonActive[1].style.color=NonActiveColor;
NonActive[1].style.backgroundColor=NonActiveBackColor;
NonActive[2].style.color=NonActiveColor;
NonActive[2].style.backgroundColor=NonActiveBackColor;
Active[0].style.color=NonActiveColor;
Active[0].style.backgroundColor=NonActiveBackColor;
NonActive[5].style.display="block";
NonActive[6].style.display="none";
NonActive[7].style.display="none";
Active[1].style.display="none";
NonActive[3].style.color=NonActiveColor;
NonActive[3].style.backgroundColor=NonActiveBackColor;
NonActive[8].style.display="none";
NonActive[4].style.color=NonActiveColor;
NonActive[4].style.backgroundColor=NonActiveBackColor;
NonActive[9].style.display="none";
NonActive[10].style.display="none";

}

//メニュー
Active[0].onclick = function() {
NonActive[0].style.color=NonActiveColor;
NonActive[0].style.backgroundColor=NonActiveBackColor;
NonActive[1].style.color=NonActiveColor;
NonActive[1].style.backgroundColor=NonActiveBackColor;
NonActive[2].style.color=NonActiveColor;
NonActive[2].style.backgroundColor=NonActiveBackColor;
Active[0].style.color=ActiveColor;
Active[0].style.backgroundColor=ActiveBackColor;
NonActive[5].style.display="none";
NonActive[6].style.display="none";
NonActive[7].style.display="none";
Active[1].style.display="block";
NonActive[3].style.color=NonActiveColor;
NonActive[3].style.backgroundColor=NonActiveBackColor;
NonActive[8].style.display="none";
NonActive[4].style.color=NonActiveColor;
NonActive[4].style.backgroundColor=NonActiveBackColor;
NonActive[9].style.display="none";
NonActive[10].style.display="none";
}

//アクセス
NonActive[1].onclick = function() {
NonActive[0].style.color=NonActiveColor;
NonActive[0].style.backgroundColor=NonActiveBackColor;
NonActive[1].style.color=ActiveColor;
NonActive[1].style.backgroundColor=ActiveBackColor;
NonActive[2].style.color=NonActiveColor;
NonActive[2].style.backgroundColor=NonActiveBackColor;
Active[0].style.color=NonActiveColor;
Active[0].style.backgroundColor=NonActiveBackColor;
NonActive[5].style.display="none";
NonActive[6].style.display="block";
NonActive[7].style.display="none";
Active[1].style.display="none";
NonActive[3].style.color=NonActiveColor;
NonActive[3].style.backgroundColor=NonActiveBackColor;
NonActive[8].style.display="none";
NonActive[4].style.color=NonActiveColor;
NonActive[4].style.backgroundColor=NonActiveBackColor;
NonActive[9].style.display="none";

NonActive[10].style.display="block";

}
//営業時間
NonActive[2].onclick = function() {
NonActive[0].style.color=NonActiveColor;
NonActive[0].style.backgroundColor=NonActiveBackColor;
NonActive[1].style.color=NonActiveColor;
NonActive[1].style.backgroundColor=NonActiveBackColor;
NonActive[2].style.color=ActiveColor;
NonActive[2].style.backgroundColor=ActiveBackColor;
Active[0].style.color=NonActiveColor;
Active[0].style.backgroundColor=NonActiveBackColor;
NonActive[5].style.display="none";
NonActive[6].style.display="none";
NonActive[7].style.display="block";
Active[1].style.display="none";
NonActive[3].style.color=NonActiveColor;
NonActive[3].style.backgroundColor=NonActiveBackColor;
NonActive[8].style.display="none";
NonActive[4].style.color=NonActiveColor;
NonActive[4].style.backgroundColor=NonActiveBackColor;
NonActive[9].style.display="none";
NonActive[10].style.display="none";
}
//アルバイト募集
NonActive[3].onclick = function() {
NonActive[0].style.color=NonActiveColor;
NonActive[0].style.backgroundColor=NonActiveBackColor;
NonActive[1].style.color=NonActiveColor;
NonActive[1].style.backgroundColor=NonActiveBackColor;
NonActive[2].style.color=NonActiveColor;
NonActive[2].style.backgroundColor=NonActiveBackColor;
Active[0].style.color=NonActiveColor;
Active[0].style.backgroundColor=NonActiveBackColor;
NonActive[5].style.display="none";
NonActive[6].style.display="none";
NonActive[7].style.display="none";
Active[1].style.display="none";
NonActive[3].style.color=ActiveColor;
NonActive[3].style.backgroundColor=ActiveBackColor;
NonActive[8].style.display="block";
NonActive[4].style.color=NonActiveColor;
NonActive[4].style.backgroundColor=NonActiveBackColor;
NonActive[9].style.display="none";
NonActive[10].style.display="none";
}
//従業員専用ページ
NonActive[4].onclick = function() {
NonActive[0].style.color=NonActiveColor;
NonActive[0].style.backgroundColor=NonActiveBackColor;
NonActive[1].style.color=NonActiveColor;
NonActive[1].style.backgroundColor=NonActiveBackColor;
NonActive[2].style.color=NonActiveColor;
NonActive[2].style.backgroundColor=NonActiveBackColor;
Active[0].style.color=NonActiveColor;
Active[0].style.backgroundColor=NonActiveBackColor;
NonActive[5].style.display="none";
NonActive[6].style.display="none";
NonActive[7].style.display="none";
Active[1].style.display="none";
NonActive[3].style.color=NonActiveColor;
NonActive[3].style.backgroundColor=NonActiveBackColor;
NonActive[8].style.display="none";
NonActive[4].style.color=ActiveColor;
NonActive[4].style.backgroundColor=ActiveBackColor;
NonActive[9].style.display="block";
NonActive[10].style.display="none";

}
