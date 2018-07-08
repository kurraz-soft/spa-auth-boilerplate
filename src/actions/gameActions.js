export const ActionTypes = {
    INIT: 'game_init',
};

export function init() {
    return {
        type: ActionTypes.INIT,
    };
}