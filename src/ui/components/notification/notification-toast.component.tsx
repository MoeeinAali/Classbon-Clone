'use client';

import {ReactNode, useEffect, useState} from "react";
import {IconCheck, IconClose, IconError, IconInfo} from "../icons/icons";
import {NotificationToastProps} from "./notification.types";
import {NotificationType} from "@/lib/types/notification.interface";
import {useNotificationStore} from "@/lib/stores/notification.store";
import Progress from "@/ui/components/progress/progress.component";


const notificationTypes: Record<NotificationType, string> = {
    success: "bg-success",
    info: "bg-info",
    warning: "bg-warning",
    error: "bg-error",
};

const notificationIcons: Record<NotificationType, ReactNode> = {
    success: <IconCheck width={20} height={20} color="white"/>,
    info: <IconInfo width={20} height={20} color={"white"} fill={"white"} stroke={"transparent"}/>,
    warning: <IconInfo width={20} height={20} color={"white"} fill={"white"} stroke={"transparent"}/>,
    error: <IconError width={20} height={20} color="white"/>,
};

export const NotificationToast: React.FC<NotificationToastProps> = ({
                                                                        notification: {
                                                                            id,
                                                                            message,
                                                                            type,
                                                                            duration = 5000
                                                                        },
                                                                    }) => {
    const dismissNotification = useNotificationStore(
        (state) => state.dismissNotification
    );
    const [progressValue, setProgressValue] = useState<number>(100);

    useEffect(() => {
        const start = Date.now();

        const tick = () => {
            const elapsed = Date.now() - start;
            const percentage = Math.max(100 - (elapsed / duration) * 100, 0);
            setProgressValue(percentage);

            if (elapsed < duration) {
                requestAnimationFrame(tick);
            }
        };

        const frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [duration]);

    return (
        <div className="notification show-notification">
            <div className={`notification-icon ${notificationTypes[type]}`}>
                {notificationIcons[type]}
            </div>
            <div className="text-sm font-semibold">{message}</div>
            <button
                className="mr-auto hover:text-white mt-2"
                onClick={() => dismissNotification(id)}
            >
                <IconClose width={20} height={20}/>
            </button>
            <Progress
                className="!absolute bottom-1 left-2 right-2 !w-auto"
                size="tiny"
                variant={type}
                value={progressValue}
            />
        </div>
    );
};