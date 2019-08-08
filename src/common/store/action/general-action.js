import React from 'react';
import { push, go } from 'connected-react-router';
import menu from './../../appMenu.properties';
import { createBrowserHistory } from 'history';
import * as v from 'voca';
import { SELECT_MENU } from './../../layout/store/layout-action-type';






const baseUrl = process.env.PUBLIC_URL;

const dispatchMenu = (payload) => {
    return {
        type: SELECT_MENU,
        payload,
    };
};

export const navigate = (key, additionalLink = '', query = null) => {
    return (dispatch) => {
        const history = createBrowserHistory();
        if (menu[key]) {
            if (history.location.pathname !== menu[key].link || (!v.isEmpty(additionalLink) || query !== null)) {
                dispatch(dispatchMenu({
                    menuKey: key,
                    openedMenuKey: menu[key].open ? [menu[key].open] : [],
                }));
                if (!v.isEmpty(additionalLink)) {
                    dispatch(push(`${baseUrl}${menu[key].link}/${additionalLink}`));
                } else {
                    dispatch(push(`${baseUrl}${menu[key].link}`));
                }
            } else {
                dispatch(go(0));
            }
        }
    };
};