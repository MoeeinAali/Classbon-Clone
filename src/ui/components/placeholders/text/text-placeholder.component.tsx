import React from "react";
import {TextPlaceholderProps} from "@/ui/components/placeholders/text/text-placeholder.types";

export const TextPlaceholder: React.FC<TextPlaceholderProps> = ({count = 1}) => {
    return (
        <div className="space-y-2">
            {Array.from({length: count}).map((_, i) => (
                <div key={i} role="status" aria-live="polite" className="space-y-2.5 animate-pulse max-w-full">
                    <div className="flex items-center w-full gap-x-2">
                        <div className="h-2.5 bg-white/10 rounded-full w-32"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-24"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-full"/>
                    </div>
                    <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-30px)]">
                        <div className="h-2.5 bg-white/10 rounded-full w-full"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-full"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-24"/>
                    </div>
                    <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-90px)]">
                        <div className="h-2.5 bg-white/20 rounded-full w-full"/>
                        <div className="h-2.5 bg-white/10 rounded-full w-80"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-full"/>
                    </div>
                    <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-110px)]">
                        <div className="h-2.5 bg-white/10 rounded-full w-full"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-full"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-24"/>
                    </div>
                    <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-50px)]">
                        <div className="h-2.5 bg-white/20 rounded-full w-32"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-24"/>
                        <div className="h-2.5 bg-white/10 rounded-full w-full"/>
                    </div>
                    <div className="flex items-center w-full gap-x-2 max-w-[calc(100%-30px)]">
                        <div className="h-2.5 bg-white/20 rounded-full w-full"/>
                        <div className="h-2.5 bg-white/10 rounded-full w-80"/>
                        <div className="h-2.5 bg-white/20 rounded-full w-full"/>
                    </div>
                </div>
            ))}
        </div>
    );
};
