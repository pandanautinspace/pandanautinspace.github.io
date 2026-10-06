// "It's always morning somewhere." Finds a city where it is currently morning.
(function () {
  var el = document.querySelector('[data-morning]');
  if (!el || !window.Intl) return;
  var cities = [
    ['Auckland','Pacific/Auckland'],['Sydney','Australia/Sydney'],['Tokyo','Asia/Tokyo'],
    ['Seoul','Asia/Seoul'],['Shanghai','Asia/Shanghai'],['Bangkok','Asia/Bangkok'],
    ['Mumbai','Asia/Kolkata'],['Dubai','Asia/Dubai'],['Moscow','Europe/Moscow'],
    ['Nairobi','Africa/Nairobi'],['Paris','Europe/Paris'],['Lagos','Africa/Lagos'],
    ['London','Europe/London'],['Reykjavík','Atlantic/Reykjavik'],['São Paulo','America/Sao_Paulo'],
    ['Cambridge, MA','America/New_York'],['Chicago','America/Chicago'],['Denver','America/Denver'],
    ['San Francisco','America/Los_Angeles'],['Anchorage','America/Anchorage'],['Honolulu','Pacific/Honolulu']
  ];
  function hour(tz) {
    return +new Intl.DateTimeFormat('en-US', { hour: 'numeric', hourCycle: 'h23', timeZone: tz }).format(new Date());
  }
  function time(tz) {
    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: tz }).format(new Date()).toLowerCase();
  }
  var h = new Date().getHours();
  if (h >= 5 && h < 12) { el.innerHTML = '<span class="sun">●</span> It actually is morning where you are. Nice.'; return; }
  var options = cities.filter(function (c) { var x = hour(c[1]); return x >= 7 && x < 11; });
  if (!options.length) options = cities.filter(function (c) { var x = hour(c[1]); return x >= 5 && x < 12; });
  if (!options.length) return;
  var c = options[Math.floor(Math.random() * options.length)];
  el.innerHTML = '<span class="sun">●</span> It’s ' + time(c[1]) + ' in ' + c[0] + '. Always morning somewhere.';
})();
