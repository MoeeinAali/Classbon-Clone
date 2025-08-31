import {ReactNode} from "react";
import Image from "next/image";
import TopNavigation from "@/app/_components/top-navigaation/top-navigation.component";

export const Header: () => ReactNode = () => {

    return (
        <header className="border-b border-base-300 border-opacity-5 px-4 lg:px-12">
            <div className="container flex items-center justify-between">
                <Image
                    src="/images/logo-light.svg"
                    width={100}
                    height={36}
                    alt="کلاسبن"
                />
                <TopNavigation/>
                <div className="mr-auto">User Authentication</div>
            </div>
        </header>
    )
}

export default Header;