var webmem = 'http://webmem-147501.appspot.com//api/v1/prono/';
// set 767eabed-472e-893e-088f-14d52afafd14
var DATA = {
  games:[],
  playerNames: [],
  playerDatas: {}
};

var POST = function(url, data, cb) {
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.onload = function() {
    cb(null, request.responseText);
  };
  request.send(data);
}

DATA.loadData = function(cb) {
  DATA.games = [
  {
    id: 'toulon-grenoble-1',
    date: '29/10/2016',
    team1: 'Toulon',
    team2: 'Grenoble',
    score1: 42,
    score2: 12,
    bo1: true,
    bo2: false,
  },
  {
    id: 'lyonou-toulon-1',
    date: '6/11/2016',
    team1: 'Lyon OU',
    team2: 'Toulon',
    score1: null,
    score2: null,
    bo1: null,
    bo2: null, 
  },
  {
    id: 'toulon-sf-1',
    date: '13/11/2016',
    team1: 'Toulon',
    team2: 'Stade Français',
    score1: null,
    score2: null,
    bo1: null,
    bo2: null, 
  },
  {
    id: 'castres-toulon-1',
    date: '19/11/2016',
    team1: 'Castres',
    team2: 'Toulon',
    score1: null,
    score2: null,
    bo1: null,
    bo2: null, 
  },
  {
    id: 'toulon-bordeaux-bègles-1',
    date: '4/12/2016',
    team1: 'Toulon',
    team2: 'Bordeaux-Bègles',
    score1: null,
    score2: null,
    bo1: null,
    bo2: null, 
  }
  ];
  DATA.games.reverse();

  DATA.playerNames = ['Aurélien', 'Bastien', 'Cyrille', 'Jean-Sébastien', 'Mathias', 'Mickael', 'Riad', 'Thomas'];

  DATA.playerDatas = {};
  /*
  eval/playerDatas
  var r = {};
  r['Bastien'] = getString('Bastien') || '{}';
  r['Cyrille'] = getString('Cyrille') || '{}';
  r['Jean-Sébastien'] = getString('Jean-Sébastien') || '{}';
  r['Mathias'] = getString('Mathias') || '{}';
  r['Mickael'] = getString('Mickael') || '{}';
  r['Riad'] = getString('Riad') || '{}';
  r['Thomas'] = getString('Thomas') || '{}';
  r = JSON.stringify(r);
  returns(r);
  */
  POST(webmem + 'eval/playerDatas', null, function(err, data) {
    try {
      DATA.playerDatas = JSON.parse(data);
      for(var playerName in DATA.playerDatas) {
        DATA.playerDatas[playerName] = JSON.parse(DATA.playerDatas[playerName]);
      }
      cb();
    } catch(e) {
      console.error(e);
    }
  });
};

DATA.saveData = function(playerName, data, cb) {
  /*
  eval/savePlayerData?playerName=xxx
  if (query.playerName && body) {
    setString(query.playerName, body);
  }
  */
  POST(webmem + 'eval/savePlayerData?playerName=' + encodeURIComponent(playerName), JSON.stringify(data), cb);
};