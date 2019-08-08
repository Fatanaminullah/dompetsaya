import {
    SELECT_MENU
} from './layout-action-type';

const initialState = {
    menuKey: [],
    openedMenuKey: [],
};

const handler = (currentState) => {
    const selectMenu = datas => ({ ...currentState, menuKey: [datas.menuKey], openedMenuKey: datas.openedMenuKey });
    return {
       selectMenu
    };
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SELECT_MENU:
            return handler(state).selectMenu(payload);
        default:
            return state;
    }
};