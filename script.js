const jam = document.getElementById('jam'),
    menit = document.getElementById('menit'),
    detik =document.getElementById('detik');

// Set target waktu 2 jam dari sekarang
let targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 2);

function showTime() {
    let now = new Date();
    let timeDifference = targetTime - now; // Selisih waktu dalam milidetik

    if (timeDifference > 0) {
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        jam.innerHTML = addZero(hours);
        menit.innerHTML = addZero(minutes);
        detik.innerHTML = addZero(seconds);
    } else {
        jam.innerHTML = '00';
        menit.innerHTML = '00';
        detik.innerHTML = '00';
    }
    
    setTimeout(showTime, 1000);
}

// add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showTime();
