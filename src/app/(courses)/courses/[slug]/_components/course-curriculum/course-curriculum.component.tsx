"use client";

import React, {useState} from "react";
import {CourseCurriculumProps} from "./course-curriculum.types";
import {Badge} from "@/ui/components/badge/badge.component";
import {IconChevronDown} from "@/ui/components/icons/icons";

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({data}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion overflow-hidden">
            {data?.map((chapter, index) => (
                <div className="rounded-xl" key={`chapter-${chapter.id}`}>
                    <h2 className="accordion title">
                        <button
                            onClick={() => toggleAccordion(index)}
                            type="button"
                            className={`${index === activeIndex ? "active" : "in-active"}`}
                        >
                            <span
                                className="h-6 w-6 rounded-full flex items-center justify-center font-bold text-sm ml-2 bg-base-content/10">
                                {index + 1}
                            </span>
                            <span className="ml-auto">{chapter.title}</span>
                            <div className="flex gap-2 ml-3">
                                <Badge variant="info">
                                    {chapter.numOfLectures} مبحث{" "}
                                </Badge>
                                <Badge variant="accent">
                                    {chapter.duration}{" "}
                                </Badge>
                            </div>
                            <IconChevronDown
                                className={`${activeIndex === index ? `active` : `in-active`}`}
                                width={18}/>
                        </button>
                    </h2>
                    <div className={`accordion content ${activeIndex === index ? `active` : 'in-active'}`}>
                        <ol
                            className={`relative`}
                        >
                            {chapter.lectures.map((lecture) => (
                                <li
                                    className="py-5 border-b border-base-content/10 border-dashed last-of-type:border-0"
                                    key={`lecture-${lecture.title}`}
                                >
                                    <h3 className="text-base font-semibold text-gray-400 flex items-center justify-between">
                                        {lecture.title}
                                        <div className="flex items-center gap-2">
                                            <Badge
                                                variant="info"
                                                className="!w-20 mt-1"
                                            >
                                                {lecture.duration}
                                            </Badge>
                                        </div>
                                    </h3>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseCurriculum