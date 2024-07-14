const buy2 = "https://pump.fun/9mXh58Dw2ji51bpXvr9QvFvMwpWf2RtTvQBni1uZpump";
const twitter = "https://x.com/hotcheetosol";
const telegram = "http://t.me/hotcheetosol";
var windowFeatures = "width=900,height=900,resizable=yes,scrollbars=yes,status=yes";

function gay() {
    const url = "https://www.pornhub.com/view_video.php?viewkey=64008d214285c";

    var windowFeatures = "width=900,height=900,resizable=yes,scrollbars=yes,status=yes";
    var newWindow = window.open(url, "_blank", windowFeatures);
    var image = document.querySelector('.gay1');
    var text = document.getElementById('displayText');
    var text1 = document.getElementById('jeet')
    
    if (image.style.display !== 'none') {
        image.style.display = 'none';
        text.style.display = 'block';
        text1.style.display = 'none';
    } else {
        image.style.display = 'block';
        text.style.display = 'none';    
    }

    if (newWindow) {
        if (newWindow.document.requestStorageAccess) {
            newWindow.document.requestStorageAccess().then(function () {
                console.log("Incognito mode enabled.");
            }).catch(function (err) {
                console.error("Error enabling incognito mode:", err);
            });
        } else {
            console.warn("Incognito mode request not supported.");
        }
    } else {
        console.error("Failed to open incognito window.");
        function openNewWindow() {
            window.open(url, "_blank", windowFeatures);
        }
    }
}


//links
function twitl() {
    window.open(twitter, "_blank", windowFeatures);
}

function buyl() {
    window.open(buy2, "_blank", windowFeatures);
}

function tgl() {
    window.open(telegram, "_blank", windowFeatures);
}

var twit = document.getElementById('twitter').addEventListener("click", twitl);
var buy = document.getElementById('buy1').addEventListener("click", buyl);
var tg = document.getElementById('telegram').addEventListener("click", tgl);

var CA = (buy2 .replace('https://pump.fun/', ''))

//ca copy
function copy(){
    navigator.clipboard.writeText(CA)
    alert('Copied CA: ' + CA)
}

//CA textvar
document.addEventListener('DOMContentLoaded', function(){
    const text = document.querySelector('.copytext');
    text.textContent = 'CA: ' + CA;
})

//spinny favicn
document.addEventListener('DOMContentLoaded', function() {
    const favicon = document.getElementById('favicon');
    const faviconURL = favicon.href;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    const size = 32; // You can adjust this size as needed
    let angle = 0;

    canvas.width = size;
    canvas.height = size;

    img.src = faviconURL;
    img.onload = function() {
        setInterval(() => {
            context.clearRect(0, 0, size, size);
            context.save();
            context.translate(size / 2, size / 2);
            context.rotate(angle * Math.PI / 180);
            context.drawImage(img, -size / 2, -size / 2, size, size);
            context.restore();

            angle = (angle + 2) % 360; // Adjust the speed of rotation here
            favicon.href = canvas.toDataURL('image/png');
        }, 100); // Adjust the interval here for smoother or faster animation
    };
});