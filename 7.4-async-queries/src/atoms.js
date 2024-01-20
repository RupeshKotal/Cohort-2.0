import { atom, selector } from "recoil";
import axios  from 'axios'

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "netowrk",
        get: async ()=>{

            const value = await axios.get("https://sum-server.100xdevs.com/notifications")
            return value.data;

        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})