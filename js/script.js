function readingTime(context, label) {
  const worMinute = 150;
  const the_text = document.querySelector(context).textContent;
  const noOfWords = the_text.split(/\s/g).length;
  const minutes = noOfWords / worMinute;
  const readTime = Math.ceil(minutes);
  
  var minuteWord;
  
  if(readTime <= 1){
    var minuteWord = "minuto";
  }else{
    var minuteWord = "minutos";
  }
  
  document.querySelector(label).innerHTML = `Sua leitura levará aproximadamente ${readTime} ${minuteWord}`;
  
}


readingTime(".post", "#rt");