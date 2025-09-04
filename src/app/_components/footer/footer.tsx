import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-base-100 text-base-content">
            <footer className="container flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-5 px-0 lg:px-12 xl:px-40 pt-10 pb-5">
                <div className="flex flex-1 flex-col justify-end md:flex-row gap-5 md:gap-6 whitespace-nowrap">
                    <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
                        <Link href="/docs/install/" className="link link-hover hover:text-primary-focus">
                            آموزش ری‌اکت و نکست
                        </Link>
                        <Link href="/docs/customize/" className="link link-hover hover:text-primary-focus">
                            سنیور ری‌اکت
                        </Link>
                        <Link href="/docs/customize/" className="link link-hover hover:text-primary-focus">
                            مشاوره برنامه‌نویسی
                        </Link>
                    </div>

                    <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
                        <Link href="/docs/themes/" className="link link-hover hover:text-primary-focus">
                            کلاسبن در لینکدین
                        </Link>
                        <Link href="/docs/themes/" className="link link-hover hover:text-primary-focus">
                            کلاسبن در تلگرام
                        </Link>
                        <Link href="/docs/themes/" className="link link-hover hover:text-primary-focus">
                            کلاسبن در یوتیوب
                        </Link>
                    </div>

                    <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
                        <Link href="/docs/themes/" className="link link-hover hover:text-primary-focus">
                            مطالب و مقالات
                        </Link>
                        <Link href="/docs/themes/" className="link link-hover hover:text-primary-focus">
                            پرسش های متداول
                        </Link>
                        <Link href="/docs/themes/" className="link link-hover hover:text-primary-focus">
                            شرایط استفاده و حریم خصوصی
                        </Link>
                    </div>
                </div>

                <Link href="/">
                    <div className="text-center flex flex-col items-center">
                        <Image
                            src="/images/logo-en-light.svg"
                            width={180}
                            height={36}
                            alt="کلاسبن"
                        />

                        <p className="opacity-50 mt-2">
                            پلتفرم آموزش برنامه‌نویسی
                            <br /> یادگیری مداوم - پیشرفت مستمر
                        </p>
                    </div>
                </Link>
            </footer>

            <div className="bg-base-200 text-left" lang="en" dir="ltr">
                <div className="container py-5 flex flex-col justify-center items-center">
                    <div className="flex gap-2">
                        <span className="text-base-content/50 ">Developed by:</span>
                        <span className="text-lg font-bold tracking-wide">
                            <Link href="https://github.com/moeeinaali" target="_blank">Moeein Aali</Link>
                        </span>
                    </div>
                    <span className="text-sm text-base-content/60 font-semibold">
                        Copyright © 2025 | All rights reserved
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;