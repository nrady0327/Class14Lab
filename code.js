$(document).ready(function ()
{

    var scores={};
$("form").submit(gradebook);

$("button#calcButton").click(gradebook);
function gradebook()
{

    $("#firstText").text(scores);
    $("#lastText").text(scores);
    $("#pointsNumber").text(scores);
    $("#possiblePoints").text(scores);
    var percentage = $("#pointsNumber").data/$("#possiblePoints").data;
    //return the scores to the next set of items
    $("#firstNameObject").data(scores);
    $("#lastNameObject").data(scores);
    if(percentage<=100 &&percentage>=90)
    {
        $("#percentageObject").text(percentage);
        $("#gradeObject").text(`A`);
    }
    else if(percentage<=90 && percentage >=80)
    {
        $("#percentageObject").text(percentage);
        $("#gradeObject").text(`B`);
    }
    else if(percentage<=80 && percentage >=70)
    {
        $("#percentageObject").text(percentage);
        $("#gradeObject").text(`C`);
    }
    else if(percentage<=70 && percentage >=60)
    {
        $("#percentageObject").text(percentage);
        $("#gradeObject").text(`D`);
    }
    else if(percentage<=60 && percentage >=0)
    {
        $("#percentageObject").text(percentage);
        $("#gradeObject").text(`F`);
    }

}

});