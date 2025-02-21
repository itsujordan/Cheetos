const pastebinRawUrl = 'https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/8yAWUnbC';
var buy2 = "LOADING...";
var CA;
const twitter = "https://x.com/hotcheetosol";
const telegram = "https://t.me/hotjeetos";
var windowFeatures = "width=900,height=900,resizable=yes,scrollbars=yes,status=yes";

async function fetchTextFromPastebin() {
    try {
        const response = await fetch(pastebinRawUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text();
        // Update the HTML content with the fetched text
        const textContainer = document.getElementById('hiddenCA');
        textContainer.textContent = text;      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
 }
 
 fetchTextFromPastebin();

 setTimeout(variables, 2000);
setTimeout(setup, 4000);

function variables(){
    buy2 = document.getElementById('hiddenCA').textContent;
    CA = (buy2 .replace('https://pump.fun/', ''));
}

function setup(){
    const text = document.querySelector('.copytext');
    text.textContent = 'CA: ' + CA  ;
}


function copy(){
    navigator.clipboard.writeText(CA);
    alert('Copied CA: ' + CA);
}


function gay() {
    const url = "https://www.pornhub.com/view_video.php?viewkey=64008d214285c";

    var windowFeatures = "width=900,height=900,resizable=yes,scrollbars=yes,status=yes";
    var newWindow = window.open(url, "_blank", windowFeatures);
    var image = document.querySelector('.gay1');
    var text = document.getElementById('displayText');
    var text1 = document.getElementById('jeet');
    
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
    window.open('https://pump.fun/coin/' + buy2, "_blank", windowFeatures);
}

function tgl() {
    window.open(telegram, "_blank", windowFeatures);
}

//function socialvar() 
var twit = document.getElementById('twitter').addEventListener("click", twitl);
var buy = document.getElementById('buy1').addEventListener("click", buyl);
var tg = document.getElementById('telegram').addEventListener("click", tgl);


//spinny favicn
document.addEventListener('DOMContentLoaded', function() {
    const favicon = document.getElementById('favicon');
    const faviconURL = 'photos/favicon.jpg';
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
