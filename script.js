  

  	  
  	  
  	  // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      
  function drawChart() {
      
      
      var BigArray = []; // making an array of arrays
      
      for (var i=0;i<jsonFREDdata.observations.length; i++){ //making my for loop
      
      var FRED = jsonFREDdata.observations[i] // making a variable to replace the data.property
      	
     
      	
      	var SmallArray = []; // creating my small array
      	SmallArray.push(FRED.date); // getting the dates from my data
      	SmallArray.push( Number (FRED.value ) ); // getting the values from my data, but using the numbers function
      	
    
      	BigArray.push(SmallArray); //add my small array to my big array
      	
      	}
      	

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Feeling');
        data.addColumn('number', 'Degree of Feeling');
        data.addRows(BigArray);

        // Set chart options
        var options = {'title':'Intensifying Feelings About Winter',
                       'width':600,
                       'height':500,
                       'hAxis':{}, //end of hAxis
                       'vAxis':{} //end of vAxis
                       
                     }; //end of options
                       		
             options.hAxis.textStyle = myTextStyle;
             console.log(options.height);          	
                       	
                       	
                       

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }