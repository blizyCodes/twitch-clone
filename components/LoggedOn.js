import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import Loading from "./Loading";
import { UserContext } from "../contexts/UserContext";

const LoggedOn = ({ supabase, session }) => {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [newUsername, setNewUsername] = useState(username);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const { setLoggedInUser } = useContext(UserContext);

  const getProfile = async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("profiles")
        .select("username, full_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (error && status != 406) throw error;

      if (data) {
        if (data.username) setUsername(data.username);
        else setUsername(data.full_name);
        setAvatarUrl(data.avatar_url);
        setLoggedInUser(data.username);
      }
    } catch (error) {
      alert("Error loading user's account data");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      setLoading(true);
      const updates = {
        id: user.id,
        username: newUsername,
        updated_at: new Date().toISOString(),
      };
      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      setUsername(newUsername);
      setLoggedInUser(newUsername);
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, [session]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="pt-[56.25%]">
          <div className="m-5 flex flex-col justify-center items-center">
            {" "}
            <h2 className="text-2xl font-bold">
              Welcome, <span className="text-[#A855F7]">{username}</span>
            </h2>
            <div className="py-4 m-auto">
              <Image
                src={avatarUrl}
                className="rounded-full"
                alt="user avatar"
                width="100"
                height="100"
              />
            </div>
            <button
              className="px-4 py-2 mx-1 rounded-lg font-bold bg-red-500"
              onClick={() => supabase.auth.signOut()}
            >
              Sign out
            </button>
          </div>
          <h2 className="underline font-bold text-center pt-12 m-4">
            Update Username
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  className="bg-gray-900 p-2 rounded-xl"
                  type="text"
                  value={user.email}
                  disabled
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="username">Username:</label>

                <input
                  id="username"
                  className="bg-gray-600 p-2 rounded-xl"
                  type="text"
                  value={newUsername || ""}
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-end items-center">
                {" "}
                <button
                  className=" px-4 py-2 mx-1 rounded-lg font-bold bg-purple-500"
                  onClick={() => updateProfile()}
                  disabled={loading}
                >
                  {loading ? "Loading ..." : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedOn;
