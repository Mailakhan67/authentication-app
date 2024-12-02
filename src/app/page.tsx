import { SessionWrapper } from "../../components/SessionWrapper";
import LogInForm from "../../components/login/LogInForm";

export default async function Home() {
  return (
    <div>
      <SessionWrapper>
        <LogInForm />
      </SessionWrapper>
    </div>
  );
}
