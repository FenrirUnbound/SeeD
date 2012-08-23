var _app = {},
    def = require('./lib/def'),
    helper = require('./lib/helper'),
    keys = require('./lib/keys');

/*************************
 *
 *      Public Functions
 *
 *************************/

var createGame = (function createNewGame(playerId) {
    var gameId = playerId;

    if(! helper.isDefined(_app[gameId])) {
        _app[gameId] = {};
        _addPlayer(gameId, playerId);

        return gameId;
    }

    return def.OK;
});

var deleteGame = (function destroyGame(gameId, playerId) {
    if(_paramCheck(gameId, playerId) !== def.OK)
        return def.ERROR_PARAM;

    if(helper.isDefined(_app[gameId])) {
        delete _app[gameId];

        return gameId;
    }
    
    return def.ERROR_GEN;
});

var joinGame = (function joinExistingGame(gameId, playerId) {
    if(_paramCheck(gameId, playerId) !== def.OK)
        return def.ERROR_PARAM;

    _addPlayer(gameId, playerId);
});

var masterReset = (function ragnarok(passphrase) {
    if(passphrase === keys.MASTER)
        _app = {}

    return def.OK;
});

var masterSize = (function totalRunningGames(passphrase) {
    if(passphrase === keys.MASTER)
        return Object.keys(_app).length;
    else
        return def.OK;
});

/*************************
 *
 *      Helper Functions
 *
 *************************/

var _addPlayer = (function addPlayerToGame(gameId, playerId) {
    _app[gameId][playerId] = {};
});

var _paramCheck = (function checkParameters(gameId, playerId) {
    if(helper.isDefined(_app[gameId])) {
        if(helper.isDefined(_app[gameId][playerId]))
            return def.OK;
    }

    return def.ERROR_PARAM;
});


/******************************
 *
 *      NodeJS Module Exports
 *
 ******************************/

exports.createGame = createGame;
exports.deleteGame = deleteGame;
exports.joinGame = joinGame;
exports.masterReset = masterReset;
exports.masterSize = masterSize;