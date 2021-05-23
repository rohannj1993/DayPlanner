$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'))


    var now = moment();
    var time = now.hour();


    console.log(time)



    function hourUpdate() {

        var now = new Date().getHours();
        console.log(now)

        $(".time-block").each(function () {
            var rowHour = parseInt($(this).attr("id"))
            console.log(rowHour)

            if (now > rowHour) {
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (now === rowHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        }

        )
    } 
    hourUpdate()
})