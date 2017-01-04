var app = angular.module('tableApp',[]);

app.controller('bodyTable', function ($scope) {
    //$scope.days=["ראשון" , "שני" , "שלישי" , "רביעי" , "חמישי" , "שישי", "שבת"];
    $scope.days=[{name:"ראשון" , counter:0},
                 {name:"שני" , counter:0},
                 {name:"שלישי" , counter:0},
                 {name:"רביעי" , counter:0},
                 {name:"חמישי" , counter:0},
                 {name:"שישי" , counter:0},
                 {name:"שבת" , counter:0} 
                ];
    $scope.pepole=["ביבי" , "בוזי" , "שלי יחיימוביץ", "בלה בלה", "בוב מארלי"];
    $scope.statuses=[{name:"ביבי" , day:"ראשון"},
                   {name:"ביבי" , day:"שלישי"},
                   {name:"בוזי" , day:"ראשון"},
                   {name:"בוזי" , day:"שני"},
                   {name:"שלי יחיימוביץ" , day:"ראשון"},
                   {name:"שלי יחיימוביץ" , day:"ראשון"},
                   {name:"שלי יחיימוביץי" , day:"חמישי"},
                   {name:"בלה בלה" , day:"רביעי"},
                   {name:"בלה בלה" , day:"ראשון"}];


    $scope.tableCr= function() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '80%';
    tbl.style.height = '200px';
    tbl.style.float= 'right';
    tbl.style.margin= '70px -270px 0 0';

    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < $scope.pepole.length+2; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < $scope.days.length+1; j++) {
                var td = document.createElement('td');
                td.style.width="40px";
                td.style.height="20px";
                td.appendChild(document.createTextNode('\u0020'));
                tr.appendChild(td);
                if(j ==$scope.days.length  ){
                    td.setAttribute('class', 'no-border-right');
                }
                else if(i==0 && j!=$scope.days.length){
                    td.setAttribute('class', 'bold');
                }

            }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
    // set days:
    var row=0;
    var column=0;
    var i=0;
    for(  var j=$scope.days.length-1 ; j>=0 ; j--, i++)
    {
        $('table').find('tr:eq(0)').find('td:eq('+j+')').html($scope.days[i].name);
    }

    //set pepole:
    i=0;
    var len=$scope.days.length;   
    $('table').find('tr:eq('+1+')').find('td:eq('+len+')').html("איזכורי שואה");
    for(var j=2; j<$scope.pepole.length+3; j++, i++)
    {
        $('table').find('tr:eq('+j+')').find('td:eq('+len+')').html($scope.pepole[i]);
    }


    //set statuses:
    var row=0;
    var column=0;
    for(i=0 , j=0; i<$scope.statuses.length , j<$scope.days.length; j++, i++)
    {   

        //check the man who said this
        for(var z=0; z<$scope.pepole.length ; z++)
            {if($scope.statuses[i].name == $scope.pepole[z])
                row=z+2;
            }


        //check the day which the status written

        for(var z=0; z<$scope.days.length ; z++)
            {if($scope.statuses[i].day == $scope.days[z].name)
                {
                $scope.days[z].counter++;
                column=z+1;
                }
            }

    var s=len-column
    $('table').find('tr:eq('+row+')').find('td:eq('+s+')').append("<p class='color2'>&#9660</p>");

    }


    var query="<select class='selecting'><option value='week'>-השבוע-</option><option value='month'>-החודש-</option><option value='year'>-השנה-</option></select>"
    $('table').find('tr:eq(0)').find('td:eq('+len+')').append(query);
    //set counter in 1 row:

    for(var j=$scope.days.length-1, i=0 ; j>=0 , i<$scope.days.length ; j--, i++)
    {
        for(var g=0; g < $scope.days[i].counter; g++)
        $('table').find('tr:eq(1)').find('td:eq('+j+')').append("<p class='color1'>&#9660</p>");
    }

   }

    $scope.tableCr();

});

