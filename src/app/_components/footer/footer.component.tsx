import {ReactNode} from "react";

export const FooterComponent: () => ReactNode = () => {

    return (
        <footer className={"border-b bg-neutral text-neutral-content border-neutral-content/5 px-4 lg:px-12"}>
            فوتر
        </footer>
    )
}

export default FooterComponent;