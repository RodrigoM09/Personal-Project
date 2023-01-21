let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', function(e) {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

    const target = document.querySelector('.scroll');

    let index = 0, length = target.length;
    for (index; index < length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
        }else{
            let posX = window.pageYOffset * target[index].dataset.ratex;
            let posY = window.pageYOffset * target[index].dataset.ratey;

            target[index].style.transform = 'translate3d(' + posX + 'px,' + posY + 'px, 0px)';
        }
    }
});

