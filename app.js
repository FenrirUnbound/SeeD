var _app = {},
    def = require('./lib/def'),
    helper = require('./lib/helper');

exports['createGame'] = (function createNewGame(playerId) {
    var gameId = playerId;

    if(! helper.isDefined(_app[gameId])) {
        _app[gameId] = {};
    }

    return gameId;
});

exports['deleteGame'] = (function destroyGame(gameId, playerId) {
    if(helper.isDefined(_app[gameId])) {
        delete _app[gameId];
        return gameId;
    }
    
    return def.ERROR_GEN;
});