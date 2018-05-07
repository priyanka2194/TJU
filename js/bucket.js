$(document).ready(function() {


  $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
    });

          google.charts.load("current", {packages:["corechart"]});
          google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Task', 'Hours per Day'],
              ['Happy',     11],
              ['Positive',      2],
              ['Stressed',  2],
              ['Worried', 2],

            ]);

            var options = {
              title: 'My Mood Chart',
              pieHole: 0.2,
              backgroundColor: 'white',
              opacity: '0.3'
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
          }

    //slider info
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  var slider1 = document.getElementById("myRange1");
  var output1 = document.getElementById("demo1");
  var slider2 = document.getElementById("myRange2");
  var output2 = document.getElementById("demo2");
  var slider3 = document.getElementById("myRange3");
  var output3 = document.getElementById("demo3");
  output.innerHTML = slider.value;
  output1.innerHTML = slider1.value;
  output2.innerHTML = slider2.value;
  output3.innerHTML = slider3.value;

  slider.oninput = function() {
  output.innerHTML = this.value;
  }
  slider1.oninput = function() {
  output1.innerHTML = this.value;
  }
  slider2.oninput = function() {
  output2.innerHTML = this.value;
  }
  slider3.oninput = function() {
  output3.innerHTML = this.value;
  }


});
