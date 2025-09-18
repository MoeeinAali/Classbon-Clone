import Image from "next/image";
import TopNavigation from "@/app/_components/top-navigaation/top-navigation.component";
import Link from "next/link";
import {auth} from "@/auth";

export const Header = async () => {
    const session = await auth();
    return (
        <header className="border-b border-base-300 border-opacity-5">
            <div className="flex items-center justify-between container">
                <Link href="/">
                    <Image
                        src="/images/logo-light.svg"
                        width={100}
                        height={36}
                        alt="کلاسبن"
                    />
                </Link>
                <TopNavigation/>
                <div className="mr-auto">{session?.user.mobile}</div>
            </div>
        </header>
    )
}

export default Header;