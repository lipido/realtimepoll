if (!me || me.admin === false){    
    if (this.question !== previous.question){
        cancel('question', 401);
    }
    if (Object.keys(previous.answers).length != Object.keys(this.answers).length){
        cancel('answer-add', 401);
    }
    for (i = 0; i< Object.keys(previous.answers).length; i++){
        if (previous.answers[i].answer != this.answers[i].answer){
            cancel('answer-change', 401);
        }
    }    
}
emit("questions:changed");