const sentence = "hello there from lighthouse labs";
for(let i=0; i<=sentence.length; i++){
  let newSentence = sentence + "\n"
  if(i<newSentence.length){
    setTimeout(() => {
    process.stdout.write(newSentence[i]);
  }, i*50);
}
}


