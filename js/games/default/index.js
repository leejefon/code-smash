
define([
    'games/default/backgrounds/index',
    'games/default/characters/index',
    'games/default/events/index'
], function (backgrounds, characters, events) {

    return {
        backgrounds: backgrounds,
        characters: characters,
        events: events
    };
});
