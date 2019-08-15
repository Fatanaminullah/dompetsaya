import { AtiMessage } from "ati-react-web";

export const success = (message,duration) => {
    AtiMessage({type:'success', message, duration});
};
export const warning = (message,duration) => {
    AtiMessage({type:'warning', message, duration});
};
export const error = (message,duration) => {
    AtiMessage({type:'error', message, duration});
};
export const info = (message,duration) => {
    AtiMessage({type:'info', message, duration});
};