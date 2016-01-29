
define(['jquery'], function ($) {

    var kirby = {
        setPlayer: function (playerId) {
            $('#' + playerId).addClass('kirby stand');
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
        }
    };

    var mario = {
        setPlayer: function (playerId) {
            $('#' + playerId).addClass('mario stand');
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
        }
    };

    return {
        list: ['kirby', 'mario'],
        kirby: kirby,
        mario: mario
    };
});