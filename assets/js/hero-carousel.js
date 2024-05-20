
function sloganFadeIn(sloganContainer) {

    let timeLine = anime.timeline({
        easing: 'easeOutQuint',
        autoplay: false
    });

    timeLine.add({
        targets: sloganContainer,
        translateY: {
            value: ['100%', '0%'],
            duration: 600
        },
        opacity: {
            value: [0, 1],
            duration: 400
        }
    });

    timeLine.play();
}

function sloganFadeOut(sloganContainer) {

    let timeLine = anime.timeline({
        easing: 'easeOutQuint',
        autoplay: false
    });

    timeLine.add({
        targets: sloganContainer,
        translateY: {
            value: '100%',
            duration: 900
        },
        opacity: {
            value: 0,
            duration: 900
        }
    });

    timeLine.play();
}