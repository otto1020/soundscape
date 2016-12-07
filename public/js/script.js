window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

var server_base_url = '/';
var surveyVar = {	title: 'survey',
    name: 'survey',
    pages: [
        {
            name: 'survey',
            title: 'survey',
            elements: [
                {
                    name: "question",
                    type: 'radio',
                    label: "How does this sound make you feel?",
                    options: [
                        {
                            value: 'a) Sad',
                            key: 'a'
                        },
                        {
                            value: 'b) Nervous',
                            key: 'b'
                        },
                        {
                            value: 'c) No Answer',
                            key: 'c'
                        },
                        {
                            value: 'd) Relaxed',
                            key: 'd'
                        },
                        {
                            value: 'e) Happy',
                            key: 'e'
                        }
                    ]
                }
            ],
            options: [
                {
                    type: 'nextPage',
                    caption: 'Submit'
                }
            ]
        },
        {
            name: "thanks",
            elements: [
                {
                    type: 'handlebars',
                    source: 'thanks for your help.</p>'
                }
            ]
        }
    ]};

var surveyVar1 = {	title: 'survey',
    name: 'survey',
    pages: [
        {
            name: 'survey',
            title: 'survey',
            elements: [
                {
                    name: "question",
                    type: 'radio',
                    label: "How do these sounds make you feel?",
                    options: [
                        {
                            value: 'a) Sad',
                            key: 'a'
                        },
                        {
                            value: 'b) Nervous',
                            key: 'b'
                        },
                        {
                            value: 'c) No Answer',
                            key: 'c'
                        },
                        {
                            value: 'd) Relaxed',
                            key: 'd'
                        },
                        {
                            value: 'e) Happy',
                            key: 'e'
                        }
                    ]
                }
            ],
            options: [
                {
                    type: 'nextPage',
                    caption: 'Submit'
                }
            ]
        },
        {
            name: "thanks",
            elements: [
                {
                    type: 'handlebars',
                    source: 'thanks for your help.</p>'
                }
            ]
        }
    ]};
console.log(window.mobilecheck());
var birdPlayer = document.getElementById("bird-soundPlayer"), effectPlayer = document.getElementById("effect-soundPlayer");
var audioPlayer = document.getElementById("soundPlayer");

var rightAnswerList = [], tryingTime = 0, firstUserInputing =0, birdIndex = 0, letterConfirm1=0, surveyTimer;

var currentUser = {'answer0': [],'answer1': [],'answer2': [],'answer3': [],'answer4': [],'answer5': [],'answer6': [],'answer7': [],'answer8': []}, currentUserId = '', surveyNumber = 0;
var audioLoopTimeOut; // Audio Player Looping Flag in mobile


var $siri = document.getElementById('wave-container');
var sound_wave = new SiriWave9({
    width: $siri.offsetWidth,
    height: 100,
    speed: 0.3,
    amplitude: 1,
    container: $siri,
    autostart: false
});


// $(document).ready(function() {
    init();
// });

function init(){

    $('#value-input-container').hide();

    $('#preliminary-survey .form-div2').hide();
    $('#preliminary-survey .form-div4').hide();
    $('#preliminary-survey .form-div6').hide();

}

$('#preliminary-survey .form-div1 input').click(function () {
    if($("#preliminary-survey .form-div1 input:radio[name='question1']:checked").val() == 1)
        $('#preliminary-survey .form-div2').show();
    else
        $('#preliminary-survey .form-div2').hide();
});

$('#preliminary-survey .form-div3 input').click(function () {
    if($("#preliminary-survey .form-div3 input:radio[name='question3']:checked").val() == 1)
        $('#preliminary-survey .form-div4').show();
    else
        $('#preliminary-survey .form-div4').hide();
});


$('#preliminary-survey .form-div5 input').click(function () {
    if($("#preliminary-survey .form-div5 input:radio[name='question5']:checked").val() == 1)
        $('#preliminary-survey .form-div6').show();
    else
        $('#preliminary-survey .form-div6').hide();
});



$('#preliminary-survey input.submitSurvey').on('click', function (e) {

    e.preventDefault();

    $('.validation-error').hide();

    var formArray = $('#preliminary-survey-form').serializeArray(), postData = {};
    $.each(formArray, function(i, v){
        postData[v.name] = v.value;
    });

    console.log(JSON.stringify(postData));


    audioPlayer.pause();
    audioPlayer.src = "sounds/button_fx.mp3";
    audioPlayer.load();
    audioPlayer.play();

    //TODO: uncomment

    $.ajax({
        type: 'POST',
        data: JSON.stringify(postData),
        contentType: 'application/json',
        url: server_base_url + 'save',
        success: function(data) {
            console.log(data);

            if(data.response == 'success') {

                currentUser = merge_options(currentUser, postData);

    //TODO: uncomment

                currentUserId = data.id;
                currentUser.id = currentUserId;

                Cookies.set('_id', data.id);
                Cookies.set('registered', 1);

                $('#preliminary-survey').hide();

                setTimeout(function () {
                    initializeForSequence1();
                },300);
            }else{

                var errorContent = "";
                errorContent += "<h4>" + data.response + "</h4><div>";

                $.each(data.error, function(i, v){
                    errorContent += "<h5>" + v.message + "</h5>";
                });

                errorContent += "</div>";
                $('.validation-error').html(errorContent);
                $('.validation-error').show();
                console.log(data.error);
            }

        }
    });

});

function loopAudio(time, interval){
    removeLoopAudioPlayer();
    audioPlayer.pause();
    audioPlayer.currentTime = time;
    audioPlayer.play();
    audioLoopTimeOut = setTimeout(function () {
        loopAudio(time, interval)
    },interval * 1000)
}

function removeLoopAudioPlayer(){
    clearTimeout(audioLoopTimeOut);
}


function initializeForSequence1() {
    firstUserInputing = 1;
    // var $survey = $('#survey');

    audioPlayer.pause();
    audioPlayer.src = "sounds/merge seq.1.1.mp3";
    audioPlayer.load();

    setTimeout(function () {
        audioPlayer.play();
    },100);

    setTimeout(function () {
        // birdPlayer.loop = true;
        // birdPlayer.volume = 0.3;
        // birdPlayer.src='sounds/allbirdsfinal.mp3';
        // birdPlayer.play();
        sound_wave.start();


        // setTimeout(function () {
        //
        //     $survey.survey({
        //         survey: surveyVar1,
        //         beforeChange: beforeChangeSubmit
        //     });
        //
        // }, 13000);

        setTimeout(function () {
                loopAudio(35, 50)

        }, 73000);


    }, 26000);


    setTimeout(function () {

        $('#value-input-container').fadeIn("slow");

        setTimeout(function () {
            $('.rule-box').fadeIn("slow");
        }, 3500);


    }, 32000);
}

/*
 $('.card').on('click', function (e) {
 e.preventDefault();
 $(this).toggleClass('flipped');
 });*/



$('#value-input').keydown(function (event) {
    if (event.keyCode == 13) {
        var input_value = $(this).val();

        if(firstUserInputing){
            $(".try-again-msg").css('display', 'none');

            if(input_value != ''){
                if((input_value.toLowerCase() == 'birds') || (input_value.toLowerCase() == 'bird')){

                    // effectPlayer.pause();
                    // effectPlayer.src = "sounds/correct.mp3";
                    // effectPlayer.load();
                    // effectPlayer.play();
                    audioPlayer.pause();
                    audioPlayer.src = "sounds/correct.mp3";
                    audioPlayer.load();
                    audioPlayer.play();

                    removeLoopAudioPlayer();


                    sound_wave.stop();  // Stop wave
                    $siri.style.display = 'none';


                    setTimeout(function(){
                        $(".try-again-msg").css('display', 'none');
                        initializeForSequence2();
                    },1000);

                    $(".try-again-msg").css('color', '#000000');
                    $(".try-again-msg").html("That’s right!");
                    $(".try-again-msg").fadeIn("slow");
                }else{

                    effectPlayer.pause();
                    effectPlayer.src = "sounds/error.mp3";
                    effectPlayer.load();
                    effectPlayer.play();

                    setTimeout(function() {
                        var audioPlayerCurrentTime = audioPlayer.currentTime;
                        audioPlayer.currentTime = audioPlayerCurrentTime;
                        audioPlayer.play();
                    },1000);


                    $(".try-again-msg").fadeIn("slow");
                }

                currentUser['answer0'].push(input_value);
            }
        }else{
            tryingTime++;
            if(input_value != '')
                currentUser['answer'+ (birdIndex+1)].push(input_value);

            if($.inArray(input_value, rightAnswerList) > -1){
                birdPlayer.pause();
                rightAnswerList=[];

                $('#survey').hide();
                $('#survey').html('');
                clearTimeout(surveyTimer);

                celebrate();
            }else{
                wrongAnswer();
            }
        }
        console.log(input_value);
        $(this).val('');

        //$survey.remove();
    }
});

function celebrate(){

    audioPlayer.pause();
    removeLoopAudioPlayer();

    effectPlayer.src = "sounds/correct.mp3";
    effectPlayer.load();
    effectPlayer.play();

    $('#success-message .celebrate-message').html('Good job! You got a match!');

    if(tryingTime == 1)
        $('.try-number-message').html('<p class="try-number-message">It took you 1 try to guess the right answer.</p>');
    else
        $('.try-number-message').html('<p class="try-number-message">It took you '+ tryingTime +' tries to guess the right answer.</p>');
    $('#success-message .try-number-message').show();

$("#value-input").prop('disabled', true);

    $.ajax({
        type: 'POST',
        data: JSON.stringify(currentUser),
        contentType: 'application/json',
        url: server_base_url + 'update',
        success: function(data) {
            console.log(data);
        }
    });

    if(birdIndex == 7){

        $('#success-message').modal();
        setTimeout(function () {
            $('#success-message').modal('hide');
            setTimeout(function () {
                $('#success-message .celebrate-message').html('Good job! You have matched all bird sounds!');
                $('#success-message .try-number-message').hide();
                $('#success-message').modal();

                playNarrator('final narration merge.mp3');

                setTimeout(function () {
                    loopAudio(10, 22);
                }, 32000);

                // setTimeout(function () {
                //     birdPlayer.src = "sounds/allbirds final.mp3";
                //     birdPlayer.load();
                //     birdPlayer.play();
                // }, 1500);

                setTimeout(function () {
                    $('#success-message').modal('hide');

                    setTimeout(function () {
                        $('#letter-confirm').modal({backdrop: 'static', keyboard: false});
                    }, 10000);
                }, 3000);
            },500);
        },5000);

    }else{
        $('#success-message').modal();
        setTimeout(function () {
            $('#success-message').modal('hide');
            if(birdIndex == 3){
                $('.cards-container-0').hide();
                $('.cards-container-1').show();
                playNarrator('Narrator Sound 9.mp3');
                setTimeout(function() {
                    playNarrator('Narrator Sound 8.mp3');
                    setTimeout(function() {
                        $('#try-confirm-message').modal({backdrop: 'static', keyboard: false});
                    }, 1000);
                }, 7000);
            }else{
                playNarrator('Narrator Sound 8.mp3');
                setTimeout(function() {
                    $('#try-confirm-message').modal({backdrop: 'static', keyboard: false});
                }, 1000);
            }

        },5000);
    }
}



function wrongAnswer(){
    effectPlayer.src = "sounds/error.mp3";
    effectPlayer.load();
    effectPlayer.play();
}

function playNarrator(link){

    audioPlayer.src = "sounds/" + link;
    audioPlayer.currentTime = 0;
    //Loads the audio song
    audioPlayer.load();
    //Plays the audio song
    setTimeout(function () {
        audioPlayer.play();
    }, 100);
}


$('.open-letter').on('click', function(e){
    e.preventDefault();

letterConfirm1 = 1;

    $('#letter-confirm').modal('hide');
    if(birdIndex == 7){
        effectPlayer.src = "sounds/letter fx.mp3";
        effectPlayer.load();
        effectPlayer.play();
        setTimeout(function () {

            $('.letter-container img').attr('src', 'images/Letter 2.png');
            $('.first-page').hide();
            $('.next-sequence').hide();
            $('.second-page').css('background-color', '#FBCCBA');
            $('.second-page').show();

            $('.letter-container').show();

            playNarrator('Letter 2 narration.mp3');
            setTimeout(function () {
                $('.button-end-container').show();
            },12000);
            setTimeout(function(){
                $('.acknowledgement-container').animate({right: "10px"},1000);
            },12000);

        },500);
    }else{



        effectPlayer.src = "sounds/letter fx.mp3";
        effectPlayer.load();
        effectPlayer.play();

        setTimeout(function () {
            // $('.second-page').css('background-color', '#FBCCBA');


            effectPlayer.src = "sounds/Letter 1 narration.mp3";
            effectPlayer.load();
            effectPlayer.play();

            $('.letter-container').show();
            setTimeout(function () {
                $('.letter-container').hide();
                $('#help-confirm').modal({backdrop: 'static', keyboard: false});
            },18000);
        },1000);
    }


});

$("#letter-confirm").on("hidden.bs.modal", function () {
    if(letterConfirm1 == 0) {
        setTimeout(function () {
            $('#letter-confirm').modal({backdrop: 'static', keyboard: false});
        }, 1500);
    }
});

$('.next-sequence3').on('click', function(e){
    e.preventDefault();
    birdPlayer.pause();
    $('#help-confirm').modal('hide');
    initializeForSequence3();
});


function initializeForSequence2() {
    firstUserInputing = 0;
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    audioPlayer.src = "sounds/seq1.2.mp3";
    audioPlayer.load();
    setTimeout(function () {
        audioPlayer.play();
    },100);

                setTimeout(function () {

                    setTimeout(function(){
                        $('.first-page').hide();
                        $('.next-sequence').hide();
                        $('.second-page').css('background-color', '#CBBCAA');
                        $('.second-page').show();
                    },100);

                    audioPlayer.pause();
                    audioPlayer.src = "sounds/ghostown.mp3";
                    audioPlayer.currentTime = 0;
                    audioPlayer.load();
                    setTimeout(function () {
                        audioPlayer.play();
                    },100);

                    setTimeout(function(){
                        $('#letter-confirm').modal({backdrop: 'static', keyboard: false});
                    }, 8000)
                },15000);
}



function initializeForSequence3() {

    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    $('.card').flip();

    $('.rule-box').hide();

    $('.instruction-box').hide();



    $('#survey').hide();

    $('.second-page').hide();

    $('.first-page').show();

    $('.cards-container-0').show();

    nextBird(0);                        //TODO: change to 0
}

$('.next-bird').on('click', function(e){
    e.preventDefault();
    birdIndex++;
    tryingTime = 0;
    audioPlayer.pause();
    nextBird(birdIndex);

});

$('.backtohomepage').on('click', function(e){
    e.preventDefault();


    effectPlayer.pause();
    effectPlayer.src = "sounds/button_fx.mp3";
    effectPlayer.load();
    effectPlayer.play();

    setTimeout(function(){
        window.location.href = "index.html";
    },500);

});

$('.backtomatching').on('click', function(e){
    e.preventDefault();

    rightAnswerList = []; tryingTime = 0; firstUserInputing =0; birdIndex = 0; letterConfirm1=0;
    $('.button-end-container').hide();
    $('.cards-container-1').hide();
    $('.acknowledgement-container').css('right', '-330px');

    birdPlayer.pause();

    effectPlayer.pause();
    effectPlayer.src = "sounds/button_fx.mp3";
    effectPlayer.load();
    effectPlayer.play();

    currentUser = {'answer0': [],'answer1': [],'answer2': [],'answer3': [],'answer4': [],'answer5': [],'answer6': [],'answer7': [],'answer8': []};
    currentUser.id = currentUserId;

    initializeForSequence3();
});

function nextBird(id){

    // $('#survey').html('<div class="survey-form"></div>');
    // $('#survey').show();

    surveyNumber = id + 1;

    setTimeout(function() {
        switch (id) {
            case 0:
                playNarrator('narration_sound_6.mp3');

                setTimeout(function () {
                    playNarrator('merge bird 1.mp3');

                    setTimeout(function () {

                        // TODO: top left - top center
                        /*$('.rule-box').html('<p>Which one of the birds is making this sound? Make sure to use the rhyme on the back of the cards as clues. Click on the cards to flip them around.</p>');
                        $('.rule-box').css('top', '0');
                        $('.rule-box').css('left', '0');*/
                        $('.first-page').show();
                        $('.instruction-box').show();
                    },8000);

                    setTimeout(function () {

                        $("#value-input").prop('disabled', false);

                        rightAnswerList = ['Hoopoe', 'hoopoe', 'the hoopoe'];
                        tryingTime = 0;

                        // surveyTimer = setTimeout(function () {
                        //     $('.survey-form').survey({
                        //         survey: surveyVar,
                        //         beforeChange: beforeChangeSubmit
                        //     });
                        // }, 27000);

                    }, 3000);

                    setTimeout(function () {
                        loopAudio(25, 15);
                    }, 40000);

                }, 10500);

                break;
            case 1:

                playNarrator('merge bird 2.mp3');

                setTimeout(function () {
                    $("#value-input").prop('disabled', false);

                    rightAnswerList = ['Wren', 'wren', 'the wren', 'The wren'];
                    tryingTime = 0;

                    // surveyTimer = setTimeout(function () {
                    //     $('.survey-form').survey({
                    //         survey: surveyVar,
                    //         beforeChange: beforeChangeSubmit
                    //     });
                    // }, 15500);

                }, 3500);

                setTimeout(function () {
                    loopAudio(15, 10);
                }, 25000);

                break;
            case 2:

                playNarrator('merge bird 3.mp3');

                setTimeout(function () {

                    $("#value-input").prop('disabled', false);

                    rightAnswerList = ['Jay', 'jay', 'the jay', 'The jay'];
                    tryingTime = 0;

                    // surveyTimer = setTimeout(function () {
                    //     $('.survey-form').survey({
                    //         survey: surveyVar,
                    //         beforeChange: beforeChangeSubmit
                    //     });
                    // }, 15500);


                }, 3500);

                setTimeout(function () {
                    loopAudio(15, 15);
                }, 30000);

                break;
            case 3:
                playNarrator('merge bird 4.mp3');

                setTimeout(function () {

                    $("#value-input").prop('disabled', false);

                    rightAnswerList = ['blackbird', 'Blackbird', 'the Blackbird', 'the blackbird'];
                    tryingTime = 0;

                    // surveyTimer = setTimeout(function () {
                    //     $('.survey-form').survey({
                    //         survey: surveyVar,
                    //         beforeChange: beforeChangeSubmit
                    //     });
                    // }, 15500);

                }, 3500);

                setTimeout(function () {
                    loopAudio(15, 13);
                }, 28000);

                break;
            case 4:
                playNarrator('merge bird 5.mp3');

                setTimeout(function () {

                    $("#value-input").prop('disabled', false);

                    rightAnswerList = ['cuckoo', 'Cuckoo', 'the Cuckoo', 'the cuckoo'];
                    tryingTime = 0;

                    // surveyTimer = setTimeout(function () {
                    //     $('.survey-form').survey({
                    //         survey: surveyVar,
                    //         beforeChange: beforeChangeSubmit
                    //     });
                    // }, 15500);

                }, 3500);


                setTimeout(function () {
                    loopAudio(17, 11);
                }, 28000);

                break;
            case 5:

                playNarrator('merge bird 6.mp3');

                setTimeout(function () {

                    $("#value-input").prop('disabled', false);

                    rightAnswerList = ['tawny owl', 'Tawny owl', 'the Tawny owl', 'the tawny owl'];
                    tryingTime = 0;

                    // surveyTimer = setTimeout(function () {
                    //     $('.survey-form').survey({
                    //         survey: surveyVar,
                    //         beforeChange: beforeChangeSubmit
                    //     });
                    // }, 15500);

                }, 3500);

                setTimeout(function () {
                    loopAudio(15, 13);
                }, 28000);


                break;
            case 6:

                playNarrator('merge bird 7.mp3');

                setTimeout(function () {

                    $("#value-input").prop('disabled', false);

                    rightAnswerList = ['chukar partridge', 'Chukar partridge', 'Chukar Partridge', 'the chukar partridge', 'the Chukar partridge', 'the Chukar Partridge'];
                    tryingTime = 0;

                    // surveyTimer = setTimeout(function () {
                    //     $('.survey-form').survey({
                    //         survey: surveyVar,
                    //         beforeChange: beforeChangeSubmit
                    //     });
                    // }, 15500);

                }, 3500);

                setTimeout(function () {
                    loopAudio(15, 20);
                }, 40000);

                break;

            case 7:
birdIndex = 7;
                playNarrator('merge bird 8.mp3');

                setTimeout(function () {

                    $("#value-input").prop('disabled', false);

                    rightAnswerList = ['greenfinch', 'Greenfinch', 'the Greenfinch', 'the greenfinch'];
                    tryingTime = 0;

                    // surveyTimer = setTimeout(function () {
                    //     $('.survey-form').survey({
                    //         survey: surveyVar,
                    //         beforeChange: beforeChangeSubmit
                    //     });
                    // }, 15500);

                }, 3500);

                setTimeout(function () {
                    loopAudio(15, 12);
                }, 27000);

                break;
            default:
                nextBird(0);
                break;
        }

    },500);

}


$('.card').on('click',function(){
    effectPlayer.src = "sounds/flip.mp3";
    effectPlayer.load();
    effectPlayer.play();
});

function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

$('.survey-forms button.btn-primary').on('click', function(){
    console.log('TEST');
});

$("#survey-form-container").submit(function(event){
    event.preventDefault();
});

function beforeChangeSubmit(from, to, next){

    var target = this;

    if(from === void 0){
        next();
    }else{
        var survey = $.survey(target);
        var data = survey.pageData();
        console.log(data.question);

        survey.updateData(data);

        var postJson = {};
        postJson['survey'+surveyNumber] = data.question;
        postJson['id'] = currentUser.id;

        $.ajax({
            type: 'POST',
            data: JSON.stringify(postJson),
            contentType: 'application/json',
            url: server_base_url + 'update',
            success: function(data) {
                console.log(data);
            }
        });

        next();
    }

}
