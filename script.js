;(function() {
  var header = document.querySelector('header#main-header');
  var logoContainer = document.querySelector('#logo');
  var logo = document.querySelector('#logo object');

  // resize logo svg on window resize
  window.addEventListener('resize', debounce(adjustLogoSize, 250));

  function adjustLogoSize() {
    // 20 = padding left + right
    logo.width = logo.height = Math.round(Math.min(document.body.clientWidth- 20, document.body.clientHeight));
  }

  logo.addEventListener('load', adjustLogoSize);

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
})();