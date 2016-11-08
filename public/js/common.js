$(document).ready(function () {
    $('#button12').attr('disabled', true);
    $('#header1').hide();
    $('#header2').hide();
    $('.hint2').hide();
    
    
    
    $('input.chb').on('change', function () {
      
        $('input.chb').not(this).prop('checked', false);
        
        
    });
    
//    function () {
//        if ($("#Ship1").is(':checked') || $("#Ship2").is(':checked') || $("#Ship3").is(':checked') || $("#Ship4").is(':checked') ) {
//            $('.button12').attr('disabled', false);
//        } else {
//            $('.button12').attr('disabled', true);
//        }
//    };

    $('input.chb').click(function () {
    
        if ($('input.chb').is(":checked")) {
            window.checkedValue = $(this).val();
            console.log(window.checkedValue);
            $('#button12').attr('disabled', false)
            $('.hint1').fadeOut();
            $('.hint2').fadeIn();
            
        }
        else
            {
                $('#button12').attr('disabled', true);
            }
    })

});



$(document).ready(function () {
    $("#button12").click(function () {
        console.clear();
        $('.hint2').fadeOut();
        event.preventDefault();
        console.log(window.checkedValue);
        //url on server http://spun.fkpkzs.ru/Level/Gorny
        $.ajax({
            data: {
                name: "some_name",
                value: window.checkedValue
            },
            type: "POST",
            url: "http://localhost:8081/scrape",

            //if post request is successful -> do function with logic
            success: function (data) {
                
                $('#header1').hide();
                $('#header2').hide();

                // checking the content of server response
                console.log("success " + data.time + " " + data.waterlevel + " " + data.shipValue.value);

                // Appending the conten on HTML in div with id="resposnse21" 
//                $("#response21")
//                    .empty()
//                    .append("Time: " + data.time + "<br>").hide().fadeIn()
//                    .append("Waterlevel: " + data.waterlevel + "<br>").hide().fadeIn()
//                    .append("Ship type: " + data.shipValue.value + "<br>").hide().fadeIn();
                window.waterlevel_time = data.time;
                window.waterlevel = data.waterlevel;
                window.shipValue = data.shipValue.value;

                //logic of sorting array of bridges
                
                //sample json array of bridges
                var obj = [
                    {
                        name: "Great_asdjkgaflkhgasljvhk",
                        height: 340
                        },
                    {
                        name: "Shit",
                        height: 270
                        },
                    {
                        name: "Hello",
                        height: 400
                        },
                    {
                        name: "b1",
                        height: 210
                        },
                    {
                        name: "b2",
                        height: 300
                        }
                    ]

                //initilizing new array for suitable
                var obj_g = [];

                console.log(window.shipValue);
                console.log(window.waterlevel);

                //parsing string data respond from server to get integers
                var shipandwater = parseInt(window.shipValue) + parseInt(window.waterlevel);
                console.log(shipandwater);

                //sorting
                for (var i = 0; i < obj.length; i++) {
                    console.log("inside for every obj[i].height: " + obj[i].height)
                    if (obj[i].height > shipandwater)

                    //new array of bridges that ship can pass under
                    {
                        console.log("Inside if op " + obj[i])
                        obj_g.push(obj[i]);
                    }

                }
                console.log("obj_g length:" + obj_g.length)

                console.log("obj_g: ")
                for (var i = 0; i < obj_g.length; i++) {
                    console.log(" " + obj_g[i].name + " " + obj_g[i].height + "\n")

                }


                // building 2 tables with all bridges and valid  bridges
                // http://jsfiddle.net/URU5G/1/ fiddle with example of table from json
                
                
               
                
                $("#table1").empty();

                $("#table2").empty();

                var tbl1 = $("<table>").attr("id", "all_bridges");
                $("#table1").append(tbl1).fadeIn(600);
                for (var i = 0; i < obj.length; i++) {
                    var tr = "<tr>";
                    var td1 = "<td>" + obj[i].name + "</td>";
                    var td2 = "<td>" + obj[i].height + "</td></tr>";

                    $("#all_bridges").append(tr + td1 + td2).fadeIn();
                     $('#header1').fadeIn(800);
                };
               
                 

                        
                var tbl2 = $("<table>").attr("id", "vaildBridges");
                $("#table2").append(tbl2);
                for (var i = 0; i < obj_g.length; i++) {
                    var tr = "<tr>";
                    var td1 = "<td>" + obj_g[i].name + "</td>";
                    var td2 = "<td>" + obj_g[i].height + "</td></tr>";


                    $("#vaildBridges").append(tr + td1 + td2).fadeIn();
                    $('#header2').fadeIn(800);
                };
                  

            },
            error: function (req, status, err) {
                console.log('Something went wrong', status, err);
                console.log(err)

            }
        });
    });
});


//                // Checking for only one box checked
//                function selectOnlyThis(id) {
//                    for (var i = 1; i <= 4; i++) {
//                        document.getElementById("Ship" + i).checked = false;
//                    }
//                    document.getElementById(id).checked = true;
//                }
//
//
//                // Returns the value of element by Id
//                function getValueOfChecked(id) {
//                    checkedValue = null;
//                    for (var i = 1; i <= 4; i++) {
//                        if (document.getElementById("Ship" + i).checked) {
//                            window.checkedValue = document.getElementById("Ship" + i).value;
//
//                            document.getElementById("p1").innerHTML = checkedValue;
//
//
//                        }
//                    }
//                }

//making above functions in jQuery approach, without onclick atribute
//        $(document).ready(function () {
//            $('input.chb').on('change', function () {
//                $('input.chb').not(this).prop('checked', false);
//            });
//
//            $('input.chb').click(function () {
//                if ($('input.chb').is(":checked")) {
//                    window.checkedValue = $(this).val();
//                    console.log(window.checkedValue);
//                    document.getElementById("p1").innerHTML = checkedValue;
//                }
//            })
//
//        });
//
//