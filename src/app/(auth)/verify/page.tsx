import VerificationForm from "@/app/(auth)/verify/_component/verification-form.component";
import {Suspense} from "react";

export default async function VerifyPage() {
    return <Suspense fallback={null}>
        <VerificationForm/>
    </Suspense>
}
