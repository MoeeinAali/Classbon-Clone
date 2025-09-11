"use client"

import {QueryCache, QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (err) => {
            //     TODO: Notification pop up...
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
