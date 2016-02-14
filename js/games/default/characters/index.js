
define(['jquery'], function ($) {

    var kirby = {
        setPlayer: function (playerId) {
            // TODO: if playerId is 1, position left, playerId 2 position right
            $('#' + playerId)
                .addClass('kirby stand')
                .after($('<div />').addClass('kirby_win').hide());
            // TODO: set hp
        },
        attack: function (playerId, opponentId) {
            $("#" + playerId).removeClass("stand");
            $("#" + playerId).addClass("punch");
            $("#" + opponentId).removeClass("stand");
            $("#" + opponentId).addClass("hurt");

            setTimeout(function() {
                $("#" + playerId).addClass("stand");
                $("#" + playerId).removeClass("punch");
                $("#" + opponentId).addClass("stand");
                $("#" + opponentId).removeClass("hurt");
            }, 900);
        },
        win: function () {
            $('#gameoverLay').show();
            $('.kirby_win').show();
        },
        lose: function () {
            $('#gameoverLay').show();
            $('#gameover').show();
        }
    };

    var mario = {
        setPlayer: function (playerId) {
            // TODO: if playerId is 1, position left, playerId 2 position right
            $('#' + playerId)
                .addClass('mario stand')
                .after($('<div />').addClass('mario_win').hide());

            // TODO: set hp
        },
        attack: function (playerId, opponentId) {
            $("#" + playerId).removeClass("stand");
            $("#" + playerId).addClass("punch");
            $("#" + opponentId).removeClass("stand");
            $("#" + opponentId).addClass("hurt");

            setTimeout(function() {
                $("#" + playerId).addClass("stand");
                $("#" + playerId).removeClass("punch");
                $("#" + opponentId).addClass("stand");
                $("#" + opponentId).removeClass("hurt");
            }, 900);
        },
        win: function () {
            $('#gameoverLay').show();
            $('.mario_win').show();
        },
        lose: function () {
            $('#gameoverLay').show();
            $('#gameover').show();
        }
    };

    return {
        list: ['kirby', 'mario'],
        kirby: kirby,
        mario: mario
    };
});
