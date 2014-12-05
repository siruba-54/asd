var milkcocoa = new MilkCocoa("https://io-ki3b5dnl0.mlkcca.com");
var chatDataStore = milkcocoa.dataStore("chat");
var textArea, board,textName;
window.onload = function(){
  textArea = document.getElementById("msg");
  board = document.getElementById("board");
  textName = document.gefElementById("textName");
}

function clickEvent(){
  var text = textArea.value;
  sendText(text,textName.value);
}

function sendText(text,nm){
  chatDataStore.push({uname : nm,content : text},function(data){
    console.log("送信完了!");
    textArea.value = "";
  });
}

chatDataStore.on("push",function(data){
  addText(data.value);
});

function addText(text){
  var msgDom = document.createElement("li");
  msgDom.innerHTML = text.uname+":"+text.content;
  board.insertBefore(msgDom, board.firstChild);
}
