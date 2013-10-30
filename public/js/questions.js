
function QuestionsCtrl($scope) {
  
  $scope.questions = [];
  $scope.currentQuestion = {question: "Put here your question", answers:[]}
  
  
  //voting
  $scope.vote = function(question,answer){
    answer.votes ++;
    dpd.questions.post(question.id, {answers: question.answers}, console.log);
    
  }
  
  
  //admin
  $scope.newQuestion = function(){   
    var question = {question: "new question!", answers:[]};
     dpd.questions.post(question, function(result, error){
       if (error){
	 console.log(error);
       }
     }
    );
  }
  $scope.saveQuestion = function(question){   
     dpd.questions.post(question.id, question, console.log);
  }
  $scope.deleteQuestion = function(question){
     dpd.questions.del(question.id);
  }
  $scope.deleteAnswer = function(question,answer){
    var index = question.answers.indexOf(answer);
    question.answers.splice(index,1);
  }
  $scope.newAnswer = function(question){
   
    question.answers.push({answer:"new answer", votes:0});
    
  }
  $scope.loaded = false;
  $scope.getQuestions = function(){    
    dpd.questions.get(function(questions){     
      $scope.questions = questions;
      $scope.loaded=true;   
      $scope.$apply(); //fire update (since this angular is not aware
    });
    
  }
    
  
  
  dpd.on("questions:changed", function(){
    $scope.getQuestions();   
   
  });
  $scope.getQuestions();
   
}


