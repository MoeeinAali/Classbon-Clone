import {ReactNode} from "react";
import Image from "next/image";
import TopNavigationComponent from "@/ui/components/header/top-navigation.component";

export const HeaderComponent: () => ReactNode = () => {

    return (
        <header className={"border-b border-neutral-content/5 bg-neutral text-neutral-content"}>
            <div className={"container mx-auto flex items-center justify-between"}>
                <Image src={"/images/logo-light.svg"} alt={"کلاسبن"} height={36} width={100}/>
                <TopNavigationComponent/>
                <span className={"mr-auto"}>user authentication</span>
            </div>
        </header>
    )
}

export default HeaderComponent;