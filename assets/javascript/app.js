$(document).ready(function () {

    var countValue = 93;
    $("#count-down").click(function () {
        var countStopper = setInterval(function () {
            countValue--;
            if (countValue <= 0) {
                clearInterval(countStopper);
                console.log(countStopper);
                alert("Please play again!");
            }

            if (countValue >= 92) {
                $("#counter").html("<h3>Get ready...</h3");
            }
            else if (countValue == 91) {
                $("#counter").html("<h3>GO!</h3");
            }
            else {
                $("#counter").html("<h3>Time Remaining: " + countValue + "</h3>");
            }
        }, 1000);
    });

    var rightAnswers = 0;
    var wrongAnswers = 0;

    $("#results-button").click(function () {

        if (document.querySelector('input[type=radio][name=question1][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        if (document.querySelector('input[type=radio][name=question2][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        if (document.querySelector('input[type=radio][name=question3][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        if (document.querySelector('input[type=radio][name=question4][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        if (document.querySelector('input[type=radio][name=question5][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        if (document.querySelector('input[type=radio][name=question6][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        if (document.querySelector('input[type=radio][name=question7][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        if (document.querySelector('input[type=radio][name=question8][class=right-answer]').checked == true) {
            rightAnswers = rightAnswers + 1;
            console.log(rightAnswers);

        }
        alert("You got " + rightAnswers + "/8 correct!");
        countValue = 1;
    });
});

