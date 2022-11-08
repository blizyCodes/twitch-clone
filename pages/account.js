import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  console.log(session);
  return (
    <div className="pt-4 flex justify-center items-center">
      {!session ? (
        <Auth
          providers={["google", "github"]}
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: { colors: { brand: "#A855F7", brandAccent: "#482469" } },
            },
          }}
          theme="dark"
        />
      ) : (
        <p>Account page will go here.</p>
      )}
    </div>
  );
};

export default Home;
