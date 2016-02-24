/**
 * Default Game
 *
 * @author  :: Travis Wu
 * @created :: 2016/01/25
 */

define([
    'games/default/backgrounds/index',
    'games/default/characters/index'
], function (backgrounds, characters) {

    return {
        name: 'default',
        backgrounds: backgrounds,
        characters: characters
    };
});
