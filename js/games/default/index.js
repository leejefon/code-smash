
define([
    'games/default/backgrounds/index',
    'games/default/characters/index',
    'games/default/events/index'
], function (backgrounds, characters, events) {

    return {
        name: 'default',
        backgrounds: backgrounds,
        characters: characters,
        events: events
    };
});
