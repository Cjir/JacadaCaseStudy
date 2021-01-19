(function() {
    var element = document.getElementById("flipWord");

    let resetAnimation = function() {
      element.classList.replace('flip', 'return');
    }

    setInterval(function() {
            element.classList.add('flip');
            element.classList.remove('return')
            setTimeout(resetAnimation, 5000);
    },16000)
})();