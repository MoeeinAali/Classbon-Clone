import {Notification} from "../types/notification.interface"
import {create} from "zustand/react";
import {v4 as uuidv4} from 'uuid';

type NotificationState = {
    notifications: Notification[]
    showNotification: (notification: Omit<Notification, "id">) => void
    dismissNotification: (id: string) => void
}


export const useNotificationStore = create<NotificationState>(
    (setState, getState) => ({
        notifications: [],
        showNotification: (newNotification) => {
            const id: string = uuidv4();
            setState((state) => ({
                notifications: [...state.notifications, {...newNotification, id}]
            }));

            setTimeout(() => {
                getState().dismissNotification(id);
            }, newNotification.duration)


        },
        dismissNotification: (id) => {
            setState(state => ({
                notifications: state.notifications.filter((notification) => notification.id !== id)
            }))
        }
    })
)