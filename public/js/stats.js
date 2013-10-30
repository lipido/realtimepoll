var app = angular.module("stats", ["angles"]);
function StatsCtrl($scope) {
  
  $scope.questions = [];
  $scope.charts = [];
  
  $scope.getQuestions = function(){    
    dpd.questions.get(function(questions){     
      $scope.questions = questions; 
      $scope.updateCharts();
      $scope.$apply(); //fire update (since this angular is not aware
    });
    
  }
    
  $scope.updateCharts = function(){
    $scope.charts = [];
    for (i=0; i<$scope.questions.length; i++){
      var question = $scope.questions[i];
      var labels = [];
      var datasetdata = [];
      var max = -1; //to get the Y-max
      for (j=0; j<question.answers.length; j++){
	var answer = question.answers[j];	
	labels.push(answer.answer);	
	
	var votes = answer.votes;
	if (votes > max){
	  max = votes;
	}
	datasetdata.push(votes);
      }
      var options = new ChartOptions();
      //override scaleStepWidth from the prototype to adapt the chart
      options.scaleStepWidth = max/options.scaleSteps;
      
      $scope.charts.push({
	question: question, labels: labels,
	datasets: [{
	  strokeColor : "rgb(91,151,198)",	
	  fillColor : "rgb(120,164,198)", 
	  data:datasetdata}],
	options: options
	
      });
    }
    
  }
 
  
  //chart default options
  function ChartOptions(){
  }
  ChartOptions.prototype = {
			      
      //Boolean - If we show the scale above the chart data			
      scaleOverlay : false,	
      //Boolean - If we want to override with a hard coded scale
      scaleOverride : true,	
      //** Required if scaleOverride is true **
      //Number - The number of steps in a hard coded scale
      scaleSteps : 10,
      //Number - The value jump in the hard coded scale
      scaleStepWidth : 10,
      //Number - The scale starting value
      scaleStartValue : 0,
      //String - Colour of the scale line	
      scaleLineColor : "rgba(0,0,0,.1)",	
      //Number - Pixel width of the scale line	
      scaleLineWidth : 0,
      //Boolean - Whether to show labels on the scale	
      scaleShowLabels : true,	
      //Interpolated JS string - can access value
      scaleLabel : "<%=value%>",	
      //String - Scale label font declaration for the scale label
      scaleFontFamily : "'Arial'",	
      //Number - Scale label font size in pixels	
      scaleFontSize : 12,	
      //String - Scale label font weight style	
      scaleFontStyle : "normal",	
      //String - Scale label font colour	
      scaleFontColor : "#666",	
      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : false,	
      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(255,255,255)",	
      //Number - Width of the grid lines
      scaleGridLineWidth : 0,	
      //Boolean - If there is a stroke on each bar	
      barShowStroke : true,	
      //Number - Pixel width of the bar stroke	
      barStrokeWidth : 2,	
      //Number - Spacing between each of the X value sets
      barValueSpacing : 5,	
      //Number - Spacing between data sets within X values
      barDatasetSpacing : 1,	
      //Boolean - Whether to animate the chart
      animation : false,
      //Number - Number of animation steps
      animationSteps : 60,	
      //String - Animation easing effect
      animationEasing : "easeOutQuart",
      //Function - Fires when the animation is complete
      onAnimationComplete : null
	
  }
  
  dpd.on("questions:changed", function(){
    $scope.getQuestions();      
  });
  $scope.getQuestions();
 
}


