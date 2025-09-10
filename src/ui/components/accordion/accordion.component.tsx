"use client";

import {useState, FC} from "react";
import {AccordionProps} from "./accordion.types";
import {IconChevronDown, IconChevronUp} from "../icons/icons";

export const Accordion: FC<AccordionProps> = ({
                                                  data,
                                              }) => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion rounded-t-xl overflow-hidden">
            {data.map((item, index) => (
                <div key={`accordion-${item.id}`}>
                    <h2 className="accordion title">
                        <button
                            onClick={() => toggleAccordion(index)}
                            type="button"
                            className={`${
                                index === activeIndex ? "text-white" : "text-base-content"
                            }`}
                        >
                            <span>{item.title}</span>
                            <IconChevronDown
                                className={`transition-all duration-300 ${activeIndex === index && `rotate-180`}`}
                                width={18}/>
                        </button>
                    </h2>
                    {
                        <div className={`accordion content ${activeIndex === index && "active"}`}>
                            {item.content}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};