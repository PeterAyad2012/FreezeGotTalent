var wx1 = document.getElementById('wx1');
var wx2 = document.getElementById('wx2');
var wx3 = document.getElementById('wx3');

var xb1 = document.getElementById('xb1');
var xb2 = document.getElementById('xb2');
var xb3 = document.getElementById('xb3');

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');

var audio = document.getElementById('audio');

function buttonClicked(buzzer, x, button) {
    if(x.classList.contains('backz')){
        x.classList.remove('backz');
        button.style.backgroundColor='white';
        buzzer.classList.remove('pressedB');
    }else{
        x.classList.add('backz');
        button.style.backgroundColor='red';
        buzzer.classList.add('pressedB');
        audio.pause();
        audio.currentTime=0;
        audio.play();
    }
}

b1.addEventListener('click', function(){buttonClicked(b1, wx1, xb1);});
b2.addEventListener('click', function(){buttonClicked(b2, wx2, xb2);});
b3.addEventListener('click', function(){buttonClicked(b3, wx3, xb3);});

xb1.addEventListener('click', function(){buttonClicked(b1, wx1, xb1);});
xb2.addEventListener('click', function(){buttonClicked(b2, wx2, xb2);});
xb3.addEventListener('click', function(){buttonClicked(b3, wx3, xb3);});

document.addEventListener('keypress', (event)=>{
    if(event.key=='s'||event.key=='a'){
        buttonClicked(b1, wx1, xb1);
    }else if(event.key=='g'||event.key=='h'){
        buttonClicked(b2, wx2, xb2);
    }else if(event.key=='k'||event.key=='l'){
        buttonClicked(b3, wx3, xb3);
    }
})