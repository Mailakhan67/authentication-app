import { SessionWrapper } from "../../components/SessionWrapper";
import LogInForm from "../../components/login/LogInForm";
 import { auth } from "../../lib/auth";

export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
         <SessionWrapper>
        <LogInForm />
      </SessionWrapper>
    </div>
  );
}
