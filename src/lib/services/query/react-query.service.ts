"use client"

import {MutationCache, QueryCache, QueryClient} from "@tanstack/react-query";
import {showNotifications} from "@/lib/stores/notification.store";
import {Problem} from "@/lib/types/http-errors.interface";
import {Notification} from "@/lib/types/notification.interface";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            handleError(error as unknown as Problem)
        },
    }),
    mutationCache: new MutationCache({
        onError: (error) => {
            handleError(error as unknown as Problem);
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


const handleError = (problem: Problem) => {
    const notifications: Omit<Notification, "id">[] = [];
    if (problem?.errors) {
        Object.entries(problem.errors).forEach(([_, values]) =>
            values.forEach((errorMessage) =>
                notifications.push({
                    message: errorMessage,
                    type: "error",
                })
            )
        );
    } else if (problem?.detail) {
        notifications.push({
            message: problem.detail,
            type: "error",
        });
    }

    showNotifications(notifications);
};