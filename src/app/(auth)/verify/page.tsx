import Link from "next/link";

export default async function VerifyPage() {
    return <div>
        <Link href={"/signin"}>Go to SignIn Page</Link>
    </div>;
}
