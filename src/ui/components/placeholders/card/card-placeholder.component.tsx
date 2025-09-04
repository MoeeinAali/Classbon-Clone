"use client";
import React from "react";
import { CardPlaceholderProps } from "./card-placeholder.types";
import { IconCover } from "../../icons/icons";

export const CardPlaceholder: React.FC<CardPlaceholderProps> = ({
    count = 1,
    className,
}) => {
    const counts = Array.from({ length: count }, (_, index) => index + 1);
    return (
        <div className={`flex flex-wrap justify-center xl:justify-start gap-6 mt-10 ${className}`}>
            {counts.map((item) => (
                <div
                    key={`cardplaceholder${item}`}
                    role="status"
                    className="w-80 flex-1 rounded animate-pulse"
                >
                    <div className="flex items-center justify-center h-48 mb-4 bg-base-25 rounded">
                        <IconCover stroke="currentColor" strokeWidth={1} viewBox="-3 0 24 21" fill="transparent" />
                    </div>
                    <div className="h-2.5 bg-base-25 rounded-full  w-48 mb-4"></div>
                    <div className="h-2 bg-base-50 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-base-25 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-base-25 rounded-full"></div>
                    <div className="flex items-center mt-4 space-x-3">
                        <div>
                            <div className="h-2.5 bg-base-25 rounded-full w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-base-25 rounded-full"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};