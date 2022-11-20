import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import LoggedOn from "../components/LoggedOn";
import Login from "../components/Login";

const Account = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="pt-4 flex justify-center items-center">
      <Head>
        <title>Account | Twitch</title>
      </Head>

      {!session ? (
        <Login supabase={supabase} />
      ) : (
        <LoggedOn supabase={supabase} session={session} />
      )}
    </div>
  );
};

export default Account;
