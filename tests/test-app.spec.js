var app = require('../app.js'),
    def = require('../lib/def'),
    keys = require('../lib/keys');

var _ranNum = (function(max) {
  max = max || 12987;
  return Math.floor( Math.random()*max );
});

describe('newGame', function() {
    it('newGame positive', function() {
        var gameId,
            playerId = _ranNum();

        gameId = app.createGame(playerId);
        
        expect(gameId).toEqual(playerId);
    });
});

describe('deleteGame', function() {
    it('deleteGame positive', function() {
        var gameId,
            playerId = _ranNum(),
            result;

        gameId = app.createGame(playerId);
        result = app.deleteGame(gameId, playerId);
        
        expect(result).toEqual(gameId);
    });
    
    it('deleteGame negative', function() {
        var gameId,
            playerId = _ranNum(),
            result;

        gameId = app.createGame(playerId);
        result = app.deleteGame(gameId+1, playerId);
        
        expect(result).toEqual(def.ERROR_PARAM);
    });

    it('deleteGame boundary', function() {
        var gameId,
            playerId = _ranNum(),
            result;

        gameId = app.createGame(playerId);
        result = app.deleteGame(gameId, playerId, gameId+2, playerId);
        
        expect(result).toEqual(gameId);
    });
});

describe('masterReset', function() {
    it('masterReset positive', function() {
        var gameId,
            playerId = _ranNum(),
            result;

        gameId = app.createGame(playerId);

        app.masterReset(keys.MASTER);

        result = app.deleteGame(gameId, playerId);
        expect(result).toEqual(def.ERROR_PARAM);
    });

    it('masterReset negative', function() {
        var gameId,
            playerId = _ranNum(),
            result;

        gameId = app.createGame(playerId);
        
        app.masterReset('iAmATeaPot');

        result = app.deleteGame(gameId, playerId);
        expect(result).toEqual(gameId);
    });
});

describe('masterSize', function() {
    it('masterSize positive', function() {
        var games = _ranNum(10),
            result;

        for(var i = games; i > 0; i -= 1)
            app.createGame(_ranNum());

        result = app.masterSize(keys.MASTER);
        expect(result).toEqual(games);
    });
});