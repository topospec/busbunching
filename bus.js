
      //Make an SVG Container
      var svg = d3.select("body")
          .append("svg")
          .attr("width", 500)
          .attr("height", 500)
          .style("border-color", "black")
          .style("border-style", "solid")
          .style("border-width", "1px");
       
      // Draw the Rectangle
        var rectangle1 = svg.append("rect")
          .attr("x", 50)
          .attr("y", 50)
          .attr("width", 50)
          .attr("height", 50); 

        var rectangle2 = svg.append("rect")
          .attr("x", 400)
          .attr("y", 400)
          .attr("width", 50)
          .attr("height", 50)
          .attr('fill', 'red');

    
        //carril exterior
        var carril1 = svg.append("rect")
          .attr("x", 25)
          .attr("y", 25)
          .attr("width", 450)
          .attr("height", 5)
          .attr('fill', 'grey');

        var carril2 = svg.append("rect")
          .attr("x", 470)
          .attr("y", 25)
          .attr("width", 5)
          .attr("height", 450)
          .attr('fill', 'grey');

        var carril3 = svg.append("rect")
          .attr("x", 25)
          .attr("y", 470)
          .attr("width", 450)
          .attr("height", 5)
          .attr('fill', 'grey');
        
        var carril4 = svg.append("rect")
          .attr("x", 25)
          .attr("y", 25)
          .attr("width", 5)
          .attr("height", 450)
          .attr('fill', 'grey');

        //carril interior
        var carril5 = svg.append("rect")
          .attr("x", 120)
          .attr("y", 120)
          .attr("width", 260)
          .attr("height", 5)
          .attr('fill', 'grey');

        var carril6 = svg.append("rect")
          .attr("x", 380)
          .attr("y", 120)
          .attr("width", 5)
          .attr("height", 260)
          .attr('fill', 'grey');

        var carril7 = svg.append("rect")
          .attr("x", 120)
          .attr("y", 375)
          .attr("width", 260)
          .attr("height", 5)
          .attr('fill', 'grey');
        
        var carril8 = svg.append("rect")
          .attr("x", 120)
          .attr("y", 120)
          .attr("width", 5)
          .attr("height", 260)
          .attr('fill', 'grey');



        var a1 = 1000;
        var a2 = 1000;
        var a3 = 1000;
        var a4 = 1000;
        var b1 = 1000;
        var b2 = 1000;
        var b3 = 1000;
        var b4 = 1000;

/*
        function go() {
            rectangle1
              .transition()
              .attr("x", 400) // New Position
              .duration(du1) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 400) // second x
                            .duration(du2); // second time
                            //.on("end",function() { // on end of transition...
                              //  back();
                            //})
              })

            rectangle2
              .transition()
              .attr("x", 50) // New Position
              .duration(du3) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 50) // second x
                            .duration(du4) // second time
                            .on("end",function() { // on end of transition...
                                back();
                            })
              })

        function back() {
            rectangle1
              .transition()
              .attr("x", 50) // New Position
              .duration(du3) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 50) // second x
                            .duration(du4); // second time
                            //.on("end",function() { // on end of transition...
                                //go();
                            //})
              })
            rectangle2
              .transition()
              .attr("x", 400) // New Position
              .duration(du1) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 400) // second x
                            .duration(du2) // second time
                            .on("end",function() { // on end of transition...
                                go();
                            })
              })
            }
            }*/
        
        function goboth() {
            go1();
            go2();
        }

        function backboth() {
            back1();
            back2();
        }

        function go1() {
            rectangle1
              .transition()
              .attr("x", 400) // New Position
              .duration(a1) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 400) // second x
                            .duration(a2) // second time
                            .on("end",function() { // on end of transition...
                                back1();
              })})}

        function back1() {
            rectangle1
              .transition()
              .attr("x", 50) // New Position
              .duration(a3) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 50) // second x
                            .duration(a4) // second time
                            .on("end",function() { // on end of transition...
                                go1();
              })})}

        function go2() {
            rectangle2
              .transition()
              .attr("x", 50) // New Position
              .duration(b3) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 50) // second x
                            .duration(b4) // second time
                            .on("end",function() { // on end of transition...
                                back2();
                            })})}

        function back2() {
            rectangle2
              .transition()
              .attr("x", 400) // New Position
              .duration(b1) // Set Duration of 2500ms (2.5 seconds)
              .on("end",function() { // on end of transition...
				    d3.select(this)
				    	.transition() // second transition
							.attr("y", 400) // second x
                            .duration(b2) // second time
                            .on("end",function() { // on end of transition...
                                go2();
                            })})}

        //Agrego a A
        function aa1() {
            a1 = a1+100;
        }
        function aa2() {
            a2 = a2+100;
        }
        function aa3() {
            a3 = a3+100;
        }
        function aa4() {
            a4 = a4+100;
        }
        //Quito a A
        function qa1() {
            a1 = a1-100;
        }
        function qa2() {
            a2 = a2-100;
        } 
        function qa3() {
            a3 = a3-100;
        } 
        function qa4() {
            a4 = a4-100;
        }

        //Agrego a B
        function ab1() {
            b1 = b1+100;
        }
        function ab2() {
            b2 = b2+100;
        }
        function ab3() {
            b3 = b3+100;
        }
        function ab4() {
            b4 = b4+100;
        }
        //Quito a B
        function qb1() {
            b1 = b1-100;
        }
        function qb2() {
            b2 = b2-100;
        } 
        function qb3() {
            b3 = b3-100;
        } 
        function qb4() {
            b4 = b4-100;
        }


/////

    //return svgContainer.node();
    
      