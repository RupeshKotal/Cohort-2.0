import { atom, selector, useRecoilValue } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 100
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 14
})


export const messageAtom = atom({
    key: "messageAtom",
    default: 20
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 99
})

export const totalNotification= selector({
    key:"totalNotification",
    get: ({get}) =>{
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const messageCount = get(messageAtom)
        const notificationCount = get(notificationAtom)

        return networkCount + jobsCount + messageCount + notificationCount;
    }
})