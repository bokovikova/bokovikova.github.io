var compl = [
'умная',
'лучшая',
'красивая',
'умная',
'заботливая',
'привлекательная',
'сексуальная',
'добрая',
'нежная',
'милая',
'очаровательная',
'обворожительная',
'неповторимая',
'неописуемая',
'незабываемая',
'неотразимая',
'шикарная',
'ослепительная',
'страстная',
'недоступная',
'божественная',
'завораживающая',
'ангельская',
'лучезарная',
'сексапильная',
'яркая',
'пушистая',
'обалденная',
'сногсшибательная',
'стройная',
'обольстительная',
'кокетливая',
'утончённая',
'грациозная',
'весёлая',
'энергичная',
'креативная',
'стильная',
'коммуникабельная',
'тактичная',
'любвиобильная',
'романтичная',
'разносторонняя',
'сказочная',
'симпатичная',
'пылкая',
'ласковая',
'сладенькая',
'умопомрачительная',
'желанная',
'непредсказуемая',
'загадочная',
'цветущая',
'безупречная',
'гармоничная',
'отзывчивая',
'совершенная',
'лучшая',
'скромная',
'изысканная',
'отпадная',
'искренная',
'дружелюбная',
'понимающая',
'экстравагантная',
'мечтательная',
'ароматная',
'искромётная',
'чистолюбивая',
'манящая',
'восторженная',
'бескорыстная',
'непосредственная',
'соблазнительная',
'одурманивающая',
'жизнерадостная',
'прелестная',
'улыбчивая',
'застенчивая',
'зажигательная',
'возбуждающая',
'чистосердечная',
'игривая',
'обаятельная',
'непредсказуемая',
'целеустремлённая',
'дивная',
'женственная',
'блаженная',
'бесподобная',
'лучезарная',
'ненаглядная',
'необходимая',
'изумительная',
'сказочная',
'трогательная',
'миниатюрная',
'любимая'];

var you = ['Ты', 'Зайка, ты', 'Солнышко, ты', 'Любимая, ты', 'Дорогая, ты', 'Малыш, ты', 'Марина, ты'];

$(function(){
	
	$('#countdown').countup({
        start: new Date(2014, 5, 9) //year, month, day, hour, min, sec
    });
    
    var index = Math.floor(Math.random() * (compl.length));
    var indexYou = Math.floor(Math.random() * (you.length));
    $( ".complement" ).replaceWith( "<div class='complement'>" + compl[index] + "!</div>" );
    $( ".you" ).replaceWith( "<div class='you'>" + you[indexYou] + "</div>" );
    
    setInterval(function()
               {
        index = Math.floor(Math.random() * (compl.length));
        indexYou = Math.floor(Math.random() * (you.length));
        $(".message").fadeIn(2000).delay(9000).fadeOut(2000, 
            function(){
            $( ".you" ).replaceWith( "<div class='you'>" + you[indexYou] + "</div>" );
            $( ".complement" ).replaceWith( "<div class='complement'>" + compl[index] + "!</div>" );
        });
    },0);
	
});

function changeImg() {
    var img = document.getElementById("poet");
    if (img.src.indexOf("/img/stich1.png") > -1) {
        img.src = "/img/stich2.png";
    } else {
        img.src = "/img/stich1.png";
    }
}