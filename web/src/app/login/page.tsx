import { Button } from "@/components/atoms/button";
import { Suspense } from "react";
import { LoginPageClient } from "./login-page-client";
import { LoginButtonContent, LoginPageContent } from "./login-page-content";

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginPageFallback />}>
      <LoginPageClient />
    </Suspense>
  );
}

function LoginPageFallback() {
  return (
    <LoginPageContent
      loginButton={
        <Button type="button" className="mt-7 h-12 w-full text-base" disabled>
          <LoginButtonContent />
        </Button>
      }
    />
  );
}
