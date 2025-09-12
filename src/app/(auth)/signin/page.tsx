import Link from "next/link";

export default async function SignInPage() {
    return <div>
        <Link href={"/verify"}>Go to Verification Page</Link>
    </div>;
}
