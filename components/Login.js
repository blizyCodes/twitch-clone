import React from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";


const Login = ({ supabase }) => {
  return (
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
  );
};

export default Login;
