import { START_GET_MENUS, FINISH_GET_MENUS, LOGOUT, CHANGE_OPENED_MENU, GET_MENUS,
    TOOGLE_COLLAPSE, TOOGLE_DRAWER, NOTIF_DRAWER } from './layout-action-type';
import { navigate } from '../../../common/store/action/general-action';
import CONSTANTS from './../../utils/Constants';


export const selectMenu = e => (dispatch) => {
    dispatch(navigate(e.key));
};
