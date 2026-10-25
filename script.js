(function () {
  var tabs = document.querySelectorAll('.tab');
  var views = document.querySelectorAll('.view');
  var app = document.querySelector('.app');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-view');
      tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });
      views.forEach(function (v) { v.classList.toggle('active', v.id === 'view-' + target); });
      app.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    // Reserved for offline support later.
  }
})();
