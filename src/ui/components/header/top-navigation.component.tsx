'use client'

import {ReactNode} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const menuItems: NavigationMenuItem[] = [
    {
        title: "صفحه اصلی",
        href: "/"
    },
    {
        title: "دوره‌های ری‌امت و نکست",
        href: "/courses"
    },
    {
        title: "مطالب و مقالات",
        href: "/blog"
    },
]

export const TopNavigationComponent: () => ReactNode = () => {
    const pathname = usePathname();
    return (
        <>
            <ul className={"flex gap-x-8 mr-12"}>
                {
                    menuItems.map((menuItem) => {
                        const isActive = pathname === menuItem.href
                        return (
                            <li key={`navigation-${menuItem.href}`}>
                                <Link
                                    href={menuItem.href}
                                    className={`hover:text-primary transition-colors pb-2 ${isActive && 'border-b-2 border-primary/40 text-primary'}`}>
                                    {menuItem.title}
                                </Link>
                            </li>)
                    })
                }
            </ul>
        </>
    )
}

export default TopNavigationComponent;