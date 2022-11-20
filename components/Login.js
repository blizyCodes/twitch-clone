import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import React from "react";

const Login = ({ supabase }) => {
  return (
    <div className="pt-[80px]">
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
    </div>
  );
};

export default Login;
