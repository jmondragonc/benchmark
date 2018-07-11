var wrk = require('wrk');
 
var conns = 1;
var results = [];
 
function benchmark() {
  if (conns === 10) {
    return console.log(results);
  }
  conns++;
  wrk({
    threads: 1,
    connections: conns,
    duration: '10s',
    printLatency: true,
    headers: { cookie: 'JSESSIONID=abcd' },
    url: 'http://localhost:8080/api/notes'
  }, function(err, out) {
     results.push(out);

     console.log(out)
     benchmark();
  });
}
benchmark();