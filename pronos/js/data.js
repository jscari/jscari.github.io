var webmem = 'http://pronos.webmem.io/';
// webmem = 'http://pronos.webmem.lo:8080/';
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
    id: 'bordeaux-begles-toulon-2',
    date: '29/04/2017',
    team1: 'Bordeaux-Bègles',
    team2: 'Toulon',
    score1: null,
    score2: null,
    bo1: null,
    bo2: null, 
  },
  {
    id: 'toulon-pau-2',
    date: '06/05/2017',
    team1: 'Toulon',
    team2: 'Pau',
    score1: null,
    score2: null,
    bo1: null,
    bo2: null, 
  },
  // terminés  
  {
    id: 'toulon-castres-2',
    date: '15/04/2017',
    team1: 'Toulon',
    team2: 'Castres',
    score1: 23,
    score2: 14,
    bo1: null,
    bo2: null, 
  },
  {
    id: 'toulon-toulouse-2',
    date: '09/04/2017',
    team1: 'Toulon',
    team2: 'Toulouse',
    score1: 33,
    score2: 23,
    bo1: null,
    bo2: null, 
  },
  {
    id: 'sf-toulon-2',
    date: '26/03/2017',
    team1: 'Stade Français',
    team2: 'Toulon',
    score1: 17,
    score2: 11,
    bo1: null,
    bo2: null, 
  },{
    id: 'grenoble-toulon-2',
    date: '19/03/2017',
    team1: 'Grenoble',
    team2: 'Toulon',
    score1: 23,
    score2: 23,
    bo1: false,
    bo2: false, 
  },
  {
    id: 'toulon-bayonne-2',
    date: '11/03/2017',
    team1: 'Toulon',
    team2: 'Bayonne',
    score1: 82,
    score2: 14,
    bo1: true,
    bo2: false, 
  },
  {
    id: 'brive-toulon-2',
    date: '04/03/2017',
    team1: 'Brive',
    team2: 'Toulon',
    score1: 15,
    score2: 5,
    bo1: null,
    bo2: null, 
  },
  {
    id: 'toulon-lyon-ou-2',
    date: '18/02/2017',
    team1: 'Toulon',
    team2: 'Lyon OU',
    score1: 31,
    score2: 17,
    bo1: false,
    bo2: false, 
  },
  {
    id: 'toulon-la-rochelle-2',
    date: '28/01/2017',
    team1: 'Toulon',
    team2: 'La Rochelle',
    score1: 20,
    score2: 23,
    bo1: false,
    bo2: false, 
  },
  {
    id: 'clermont-toulon-2',
    date: '08/01/2017',
    team1: 'Clermont',
    team2: 'Toulon',
    score1: 30,
    score2: 6,
    bo1: true,
    bo2: false, 
  }, 
  {
    id: 'toulon-racing92-2',
    date: '01/01/2017',
    team1: 'Toulon',
    team2: 'Racing 92',
    score1: 17,
    score2: 11,
    bo1: false,
    bo2: false, 
  },
  {
    id: 'montpellier-toulon-2',
    date: '23/12/2016',
    team1: 'Montpellier',
    team2: 'Toulon',
    score1: 33,
    score2: 29,
    bo1: false,
    bo2: false, 
  },
  {
    id: 'toulon-bordeaux-begles-1',
    date: '4/12/2016',
    team1: 'Toulon',
    team2: 'Bordeaux-Bègles',
    score1: 37,
    score2: 10,
    bo1: true,
    bo2: false, 
  },
  {
    id: 'castres-toulon-1',
    date: '19/11/2016',
    team1: 'Castres',
    team2: 'Toulon',
    score1: 34,
    score2: 17,
    bo1: true,
    bo2: false, 
  },
  {
    id: 'toulon-sf-1',
    date: '13/11/2016',
    team1: 'Toulon',
    team2: 'Stade Français',
    score1: 31,
    score2: 12,
    bo1: false,
    bo2: false, 
  },
  {
    id: 'lyonou-toulon-1',
    date: '6/11/2016',
    team1: 'Lyon OU',
    team2: 'Toulon',
    score1: 27,
    score2: 13,
    bo1: false,
    bo2: false, 
  },
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
    id: 'toulon-la-rochelle-1',
    date: '08/10/2016',
    team1: 'Toulon',
    team2: 'La Rochelle',
    score1: 17,
    score2: 17,
    bo1: false,
    bo2: false,
  },
  {
    id: 'toulon-montpellier-1',
    date: '02/10/2016',
    team1: 'Toulon',
    team2: 'Montpellier',
    score1: 28,
    score2: 6,
    bo1: true,
    bo2: false,
  }
  ];

  DATA.playerNames = ['Aurélien', 'Bastien', 'Cyrille', 'Jean-Sébastien', 'Mathias', 'Mickael', 'Riad', 'Thomas'];

  DATA.playerDatas = {};
  /*
  const players = ['Aurélien', 'Bastien', 'Cyrille', 'Jean-Sébastien', 'Mathias', 'Mickael', 'Riad','Thomas'];
  get(players, (err, res) => {
    Object.keys(res).map((k) => {
       res[k] = (res[k] ) || '{}';
    });
    send(null, res);
  });
  */
  POST(webmem + 'run/playerDatas', null, function(err, data) {
      try {
        DATA.playerDatas = JSON.parse(data);
        console.log('couou')
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
  if (query.playerName && body) {
    set(query.playerName, body);
  }
  if (query.playerName && body) {
    set(query.playerName, body, returns);
  }  
  */
  POST(webmem + 'run/savePlayerData?playerName=' + encodeURIComponent(playerName), JSON.stringify(data), cb);
};