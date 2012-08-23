var app = require('../app.js'),
    def = require('../lib/def');

var _ranNum = (function() {
  return Math.floor(Math.random());
});

describe('newGame', function() {
    it('positive', function() {
        var gameId,
            playerId = _ranNum();

        gameId = app.createGame(playerId);
        
        expect(gameId).toEqual(playerId);
    });
});

describe('deleteGame', function() {
    it('positive', function() {
        var gameId,
            playerId = _ranNum(),
            result;

        gameId = app.createGame(playerId);
        result = app.deleteGame(gameId, playerId);
        
        expect(result).toEqual(gameId);
    });
    
    it('negative', function() {
        var gameId,
            playerId = _ranNum(),
            result;

        gameId = app.createGame(playerId);
        result = app.deleteGame(gameId+1, playerId);
        
        expect(result).toEqual(def.ERROR_GEN);
    });
});