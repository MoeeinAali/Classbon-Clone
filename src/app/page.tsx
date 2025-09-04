import { HomeHeroSection } from "@/app/_components/home-hero-section/home-hero-section.component";
import CourseCardList from "@/app/_components/course-card-list/course-card-list";
import { homeFeatures } from "@/lib/data/home-features";
import Feature from "./_components/feature/feature";
import Button from "@/ui/components/button/button.component";
import { IconArrowLeftFill } from "@/ui/components/icons/icons";
import { BlogPostSummary } from "@/lib/types/blog-post-summary.type";
import BlogPostCardList from "./_components/blog-post-card-list/blog-post-card-list";
import { API_URL } from "@/lib/configs/global";
import { Suspense } from "react";
import { CardPlaceholder } from "@/ui/components/placeholders/card/card-placeholder";
import { TestimonialList } from "./_components/testimonial/testimonial-list";
import { testimonials } from "@/lib/data/testimonial";





export default async function HomePage() {

    return (
        <>
            <HomeHeroSection />
            <section className="bg-base-75">
                <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5">
                    {
                        homeFeatures.map((feature) => (
                            <Feature key={feature.title} feature={feature} />
                        ))
                    }
                </div>
            </section>

            <section className="container pt-20">
                <div className="text-center xl:text-right">
                    <h2 className="text-2xl font-extrabold">
                        تازه ترین دوره های آموزشی
                    </h2>
                    <p className="mt-3 text-lg">
                        برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
                    </p>
                </div>
                <Suspense fallback={<CardPlaceholder count={4} />}>
                    <CourseCardList />
                </Suspense>
            </section>

            <section className="px-2 my-40">
                <div className="relative pt-0 text-center">
                    <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>

                    <h2
                        lang="en"
                        className="gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
                    >
                        ReactJs & Next.js
                    </h2>
                    <p className="text-base-content/70  relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
                        ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و
                        یکه‌تاز دنیای وب! پیشرفته‌ترین مباحث رو اینجا می تونی
                        پیدا کنی. پس همین الان یادگیری رو شروع کن ما هم از
                        ابتدای مسیر با آموزش‌های تخصصی و کاملاً کاربردی کنارت
                        هستیم.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
                        <Button
                            variant="primary"
                            size="large"
                            className="mt-7"
                            isIconAnimated={true}
                        >
                            دوره‌های ری اکت و نکست‌ جی‌اس
                            <IconArrowLeftFill fill="currentColor" />
                        </Button>
                        <Button
                            variant="neutral"
                            size="large"
                            className="mt-7"
                            isIconAnimated={true}
                        >
                            مقالات ری اکت و نکست‌ جی‌اس
                        </Button>
                    </div>
                </div>
            </section>

            <section className="container py-20">
                <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
                    <div className="text-center xl:text-right">
                        <h2 className="text-2xl font-extrabold">
                            تازه‌ترین مقاله‌های آموزشی
                        </h2>
                        <p className="mt-3 text-lg">
                            به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در
                            اختیارت می‌ذاریم؛ چون پیشرفتت برامون مهمه!
                        </p>
                    </div>
                    <Button
                        variant="neutral"
                        className="font-semibold"
                        isIconAnimated={true}
                    >
                        همه مقاله‌ها
                        <IconArrowLeftFill fill="currentColor" />
                    </Button>
                </div>

                <Suspense fallback={<CardPlaceholder count={4} />}>
                    <BlogPostCardList />
                </Suspense>
            </section>
            <section className="">
                <div className="relative">
                    <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl"></div>
                    <h2 className="gradient z-0 mx-auto text-4xl font-extrabold block w-fit">
                        تجربه هم‌میسرهای کلاسبن
                    </h2>
                    <p className=" mb-24 text-lg text-center mt-2">
                        تو اینجا تنها نیستی. ببین هم‌مسیرهات نظرشون در مورد دوره‌های کلاسبن
                        چیه
                    </p>
                    <TestimonialList testimonials={testimonials} />
                </div>
            </section>
        </>
    );
}
