/**
 * Characters
 *
 * @author  :: Travis Wu
 * @created :: 2016/01/25
 */

define(['jquery'], function ($) {

    var hitcount1 = 1;
    var hitcount2 = 1;

    var kirby = {
        setPlayer: function (playerId) {
            // TODO: if playerId is 1, position left, playerId 2 position right
            $('#' + playerId)
                .addClass('kirby stand')
                .after($('<div />').addClass('kirby_win').hide());
        },
        attack: function (playerId, opponentId) {
            $("#" + playerId).removeClass("stand");
            $("#" + playerId).addClass("punch");
            $("#" + opponentId).removeClass("stand");
            $("#" + opponentId).addClass("hurt");
            hitcount1++;

            setTimeout(function() {
                $("#" + playerId).addClass("stand");
                $("#" + playerId).removeClass("punch");
                $("#" + opponentId).addClass("stand");
                $("#" + opponentId).removeClass("hurt");
            }, 900);

              var punch = new Audio("js/games/default/characters/kirby/sound/attack.wav");
              punch.play();
              var dazed = new Audio("js/games/default/characters/mario/sound/hurt.wav");
              dazed.play();

              var hpvar1 = "js/games/default/hp/hp" + hitcount1 + ".png";
              $("#hp1").css({ 'background-image': 'url(' + hpvar1 + ')' });
        },
        win: function () {
            $('#gameoverLay').show();
            $('#gameoverActions').show();
            $('.kirby_win').show();
        },
        lose: function () {
            $('#gameoverLay').show();
            $('#gameoverActions').show();
            $('#gameover').show();
        }
    };

    var mario = {
        setPlayer: function (playerId) {
            // TODO: if playerId is 1, position left, playerId 2 position right
            $('#' + playerId)
                .addClass('mario stand')
                .after($('<div />').addClass('mario_win').hide());
        },
        attack: function (playerId, opponentId) {
            $("#" + playerId).removeClass("stand");
            $("#" + playerId).addClass("punch");
            $("#" + opponentId).removeClass("stand");
            $("#" + opponentId).addClass("hurt");
            hitcount2++;

            setTimeout(function() {
                $("#" + playerId).addClass("stand");
                $("#" + playerId).removeClass("punch");
                $("#" + opponentId).addClass("stand");
                $("#" + opponentId).removeClass("hurt");
            }, 900);

              var punch = new Audio("js/games/default/characters/mario/sound/attack.wav");
              punch.play();
              var dazed = new Audio("js/games/default/characters/kirby/sound/hurt.wav");
              dazed.play();

              var hpvar2 = "js/games/default/hp/hp" + hitcount2 + ".png";
              $("#hp2").css({ 'background-image': 'url(' + hpvar2 + ')' });
        },
        win: function () {
            $('#gameoverLay').show();
            $('#gameoverActions').show();
            $('.mario_win').show();
        },
        lose: function () {
            $('#gameoverLay').show();
            $('#gameoverActions').show();
            $('#gameover').show();
        }
    };

    return {
        list: ['kirby', 'mario'],
        kirby: kirby,
        mario: mario
    };
});
