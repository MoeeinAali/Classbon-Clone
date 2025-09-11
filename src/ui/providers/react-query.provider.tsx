import {queryClient} from '@/lib/services/query/react-query.service';
import type {FC, PropsWithChildren} from 'react';
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const QueryProvider: FC<PropsWithChildren> = ({children}) => (

    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
);

export default QueryProvider;
