var boolDoRefresh;
  var size = 40;
  var lineLength = 300;
  var numLines = 12;
  var lineList = [];
  var x = [];
  //var circleCoords = [];
  //var circleList = [];
  //var foo = 0;
 
  function setup(){
    createCanvas(728, 480);
    background(255,255,255);
    boolDoRefresh = true;
    for (var i = 0; i &lt; numLines; i ++){
      append(x, int(random(150, width - 150))); //starting x
      append(x, int(random(150, height - 150))); //starting y
      append(x, int(random(0, 361))); //angle of line
      append(lineList, x);
      x = [];
    }
  }
 
  function draw(){
    if (boolDoRefresh == true){
      for (var j = 0; j &lt; lineList.length; j++){ //drawing where the circles should be
        var a1 = lineList[j][0];
        var b1 = lineList[j][1];
        var angle2 = lineList[j][2];
        var a2 = a1+lineLength*cos(angle2);
        var b2 = b1+lineLength*sin(angle2);
        for (var k = 0; k &lt;lineList.length; k++){ 
          var a3 = lineList[k][0];
          var b3 = lineList[k][1]; 
          var angle3 = lineList[k][2]; 
          var a4 = a3+lineLength*cos(angle3); 
          var b4 = b3+lineLength*sin(angle3); 
          //This long formula was taken from http://www-cs.ccny.cuny.edu/~wolberg/capstone/intersection/Intersection%20point%20of%20two%20lines.html 
          //Paul Bourke's paper 
          if (((b4-b3)*(a2-a1)-(a4-a3)*(b2-b1))!=0){ 
            var ta = ((a4-a3)*(b1-b3)-(b4-b3)*(a1-a3))/((b4-b3)*(a2-a1)-(a4-a3)*(b2-b1)); 
            var tb = ((a2-a1)*(b1-b3)-(b2-b1)*(a1-a3))/((b4-b3)*(a2-a1)-(a4-a3)*(b2-b1)); } 
          else { 
            ta = -1; tb = -1;
          } 
          if (ta &gt;= 0 &amp;&amp; ta &lt;= 1 &amp;&amp; tb &gt;= 0 &amp;&amp; tb &lt;= 1){
            fill(204,229, 255);
            strokeWeight(0);
            ellipse((a1+ta*(a2-a1)),(b1+ta*(b2-b1)), 20);
          }
          else{
            continue;
          }
        }
 
	fill(255,255,255);
	strokeWeight(0.1);
	for (var i = 0; i &lt; numLines; i++){
          var x1 = lineList[i][0];
          var y1 = lineList[i][1];
          var angle = lineList[i][2];
          //below formula from https://stackoverflow.com/questions/48525583/get-a-points-position-from-an-angle-and-the-length-of-the-line
          line(x1, y1, x1+lineLength*cos(angle), y1+lineLength*sin(angle));
          //append(lineList[i], x1+lineLength*cos(angle));
          //append(lineList[i], y1+lineLength*sin(angle));
	}
        //print(a2,b2);
        //print(lineList);
        //print(ta, tb);
      }
    }
    boolDoRefresh = false;
  }
 
  function mousePressed(){
    boolDoRefresh = true;
    x = [];
    lineList = [];
    setup();
  }
