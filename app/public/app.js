var submission = {};

$("#modal").hide();

$("#submit").on("click",function(){
    
    submission = {
        sleepy: $("#sleepy input[type=radio]:checked").val(),
        adventurous: $("#adventurous input[type=radio]:checked").val(),
        thoughtful: $("#thoughtful input[type=radio]:checked").val(),
        goaloriented: $("#goaloriented input[type=radio]:checked").val(),
        ambitious: $("#ambitious input[type=radio]:checked").val(),
        curious: $("#curious input[type=radio]:checked").val(),
        selfpossessed: $("#selfpossessed input[type=radio]:checked").val(),
        social: $("#social input[type=radio]:checked").val(),
        frivolous: $("#frivolous input[type=radio]:checked").val(),
        generous: $("#generous input[type=radio]:checked").val()
    };
    console.log(submission);

    $.post("/api/submission", submission, function(data){
        $("#modal").css("background-image", "url('" + data.img + "')");
        $("#needReveal").text(data.need);
        $("#modal").show();
        $("#surveyQuestions").hide();
    });
});

