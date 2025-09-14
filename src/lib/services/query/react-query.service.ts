"use client"

import {QueryCache, QueryClient} from "@tanstack/react-query";
import {showNotifications} from "@/lib/stores/notification.store";
import {Problem} from "@/lib/types/http-errors.interface";
import {Notification} from "@/lib/types/notification.interface";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            const problem = error as unknown as Problem;
            const notifications: Omit<Notification, 'id'>[] = []

            if (problem?.errors) {
                Object.entries(problem.errors).forEach(([_, error]) => {
                    error.forEach((errorMessage) => {
                        notifications.push({
                            type: "error",
                            message: errorMessage,
                        })
                    })
                })
            } else if (problem?.detail) {
                notifications.push({
                    type: "error",
                    message: problem.detail,
                })
            }

            showNotifications(notifications);
        }
    }),

    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            throwOnError: false,
            staleTime: 5 * 60 * 60 * 1000, // 5hr
            gcTime: 6 * 60 * 60 * 1000, // 6 hr
        }
    }
})

