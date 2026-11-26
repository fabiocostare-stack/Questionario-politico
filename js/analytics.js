(function () {
  var K = 'sp_no_analytics';
  try {
    var q = new URLSearchParams(location.search);
    if (q.get('notrack') === '1') {
      localStorage.setItem(K, '1');
      q.delete('notrack');
      var clean = location.pathname + (q.toString() ? '?' + q.toString() : '') + location.hash;
      history.replaceState(null, '', clean);
      alert('Esclusione attivata su questo browser: le tue visite su ' + location.host + ' non verranno più contate nelle statistiche.');
      return;
    }
    if (q.get('notrack') === '0') {
      localStorage.removeItem(K);
      q.delete('notrack');
      var clean0 = location.pathname + (q.toString() ? '?' + q.toString() : '') + location.hash;
      history.replaceState(null, '', clean0);
      alert('Esclusione disattivata su questo browser: le visite tornano a essere contate.');
    }
    if (localStorage.getItem(K) === '1') return;
  } catch (e) {}
  if (!/^https?:/.test(location.protocol) || /^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
  var s = document.createElement('script');
  s.type = 'module';
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', '{"token": "b952176d8a574cd6a9ab1e1a6d46c25d"}');
  document.head.appendChild(s);
})();
