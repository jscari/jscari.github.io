
Vue.component('team-score', {
  template: '#tscore-template',
  props: ['score']
});



var pronoComponent = Vue.component('game-prono', {
  template: '#prono-template',
  props: ['prono', 'game', 'updating'],
  data: function () {
    return {}
  },
  computed: {},
  filters: {},
  methods: {
    /** Team logo path */
    teamLogo: function(team) {
      return 'img/' + escape(team) + '.png';
    },
    /** Format date dd/mm/yyyy to french*/
    formatDate: function(date) {
      var d = date;
      d = d.replace('/01/', ' Janvier ');
      d = d.replace('/02/', ' Février ');
      d = d.replace('/03/', ' Mars ');
      d = d.replace('/04/', ' Avril ');
      d = d.replace('/05/', ' Mai ');
      d = d.replace('/06/', ' Juin ');
      d = d.replace('/07/', ' Juillet ');
      d = d.replace('/08/', ' Août ');
      d = d.replace('/09/', ' Septembre ');
      d = d.replace('/10/', ' Octobre ');
      d = d.replace('/11/', ' Novembre ');
      d = d.replace('/12/', ' Décembre ');
      return d;
    },
    /** Compute the points taken by the player*/
    pointsTaken: function(date, playerData) {
      return '';
    }
  }
});


// bootstrap the demo
var demo = new Vue({
  el: '#content',
  data: {
    games: null,
    loading: true,
    updating: false,
    playerNames: null,
    playerName: null,
    playerData: null
  },
  created: function () {
    DATA.loadData(function(errLoad){
      if(errLoad) {
        console.error(errLoad);
        return;
      }
      this.games = DATA.games;
      this.playerNames = DATA.playerNames;
      this.loading = false;
    }.bind(this));
  },
  methods: {
    loadPlayer: function(name) {
      this.updating = false;
      this.playerName = name;
      this.playerData = DATA.playerDatas[name] || {};
      if(!this.playerData.games) { this.playerData.games = {}; }
      if(!this.playerData.name) { this.playerData.name = name; }
      for(var g = 0; g < this.games.length; g++) {
        var gameId = this.games[g].id
        if (!this.playerData.games[gameId]) {
          this.playerData.games[gameId] = {
             score1: 0,
              score2: 0,
              bo1: false,
              bo2: false,
          }
        }
      }
      return true;
    },
    startUpdating: function() {
      this.updating = true;
    },
    save: function() {
      DATA.saveData(this.playerName, this.playerData, function(errSave) {
        if (errSave) { console.error(errSave); return; }
        this.updating = false;
      }.bind(this));
    }
  }
})