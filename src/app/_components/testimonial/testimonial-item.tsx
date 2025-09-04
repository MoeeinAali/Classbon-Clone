import { TestimonialProps } from "./testimonial.types";
import Avatar from "@/ui/components/avatar/avatar.component";

const TestimonialItem: React.FC<TestimonialProps> = ({
    testimonial: { image, name, skills, description },
}) => {
    return (
        <div className="border-base-content/5 border p-4 rounded-2xl text-sm hover:border-base-content/30 hover:bg-base-content/5 blur-[1px] hover:blur-none">
            <div className="flex items-center gap-2">
                <Avatar src={image} alt="name" size="tiny" className="pointer-events-none rounded-full grayscale" />
                <div className="flex flex-col items-start font-semibold">
                    <div className="text-info/80">{name}</div>
                    <div className="text-base-content/60">{skills}</div>
                </div>
            </div>
            <p className="mt-3 leading-6 ">{description}</p>
        </div>
    );
};

export default TestimonialItem;