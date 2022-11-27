import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import unknownUser from "../public/assets/user.jpg";
import Loading from "./Loading";

const LoggedOn = ({ supabase, session }) => {
  const user = useUser();
  const {
    loggedInUserAvatar,
    setLoggedInUserAvatar,
    loggedInUser,
    setloggedInUser,
  } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const [newUsername, setNewUsername] = useState(loggedInUser);
  const [selectedImage, setSelectedImage] = useState(null);

  const getProfile = async () => {
    try {
      setLoading(true);

      //get data from db
      const { data, error, status } = await supabase
        .from("profiles")
        .select("username, full_name, avatar_url")
        .eq("id", user.id)
        .single();

      //error handle
      if (error && status != 406) throw error;

      //set states accordingly
      if (data) {
        if (data.username) setloggedInUser(data.username);
        else setloggedInUser(data.full_name);
        setLoggedInUserAvatar(data.avatar_url);
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

      let avatarFinalUrl = loggedInUserAvatar;

      if (selectedImage) {
        //create filename/path info
        const file = selectedImage;
        const fileExtension = file.name.split(".").pop();
        const fileName = `${new Date().toISOString()}.${fileExtension}`;
        const filePath = `${user.id}/${fileName}`;

        //call supabase api - LIST all files in user's folder
        const { error: listError, data: files } = await supabase.storage
          .from("avatars")
          .list(user.id);

        if (files.length > 0) {
          //create an array of filepaths for all files found above
          const filesToDelete = files.map((file) => `${user.id}/${file.name}`);

          //call supabase api - DELETE all the above files
          const { error: deleteError } = await supabase.storage
            .from("avatars")
            .remove(filesToDelete);

          if (deleteError) throw deleteError;
        }

        //call supabase api - UPLOAD new selected image
        let { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, file, { upsert: true });

        //throw error if any of above errored
        if (listError || uploadError) throw listError || uploadError;

        //GET newly uploaded image's public URL
        const { data } = supabase.storage
          .from("avatars")
          .getPublicUrl(filePath);

        //replace the constant initialised earlier
        avatarFinalUrl = data.publicUrl;
      }
      //create updates object with everything to be send to DB
      const updates = {
        id: user.id,
        username: newUsername,
        updated_at: new Date().toISOString(),
        avatar_url: avatarFinalUrl,
      };

      //call supabase api - push updates while replacing current ones if existing
      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) throw error;

      //set username and avatarURL through the context setstates
      setloggedInUser(newUsername);
      setLoggedInUserAvatar(avatarFinalUrl);

      alert("Profile updated!");
    } catch (error) {
      console.log(error);
      alert("Error updating the profile data! Please try again later.");
    } finally {
      setLoading(false);
      setSelectedImage(null);
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
        <div className="pt-[55px]">
          {/* TOP PART  up to sign out*/}
          <div className="m-5 flex flex-col justify-center items-center">
            {" "}
            <h2 className="text-2xl font-bold">
              Welcome <span className="text-[#A855F7]">{loggedInUser}</span>
            </h2>
            <div className="py-4 m-auto">
              <Image
                src={loggedInUserAvatar ? loggedInUserAvatar : unknownUser}
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
          {/* MIDDLE PART - username update*/}
          <h2 className="underline font-bold text-center pt-12 m-4 border-t border-gray-700">
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
                  value={newUsername || loggedInUser || ""}
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                  }}
                />
              </div>
              {/* BOTTOM PART - avatar update*/}
              <div className="pt-10">
                <h2 className="underline font-bold text-center pt-12 m-4 border-t border-gray-700">
                  Upload Your avatar
                </h2>
                {selectedImage && (
                  <div>
                    <Image
                      alt="not fount"
                      width={100}
                      height={100}
                      src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                      Remove
                    </button>
                  </div>
                )}
                <br />

                <br />
                <input
                  type="file"
                  name="myImage"
                  className="bg-gray-600 p-2 rounded-xl"
                  accept=".png,.jpg"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>
            </div>

            <div className="col-span-2 pt-10">
              <div className="flex justify-end items-center pb-4">
                <button
                  className=" px-4 py-2 mx-1 rounded-lg font-bold bg-purple-500 disabled:bg-gray-500"
                  onClick={() => updateProfile()}
                  disabled={
                    (newUsername === loggedInUser && selectedImage === null) ||
                    (newUsername === "" && selectedImage === null)
                  }
                >
                  {loading ? "Loading ..." : "Update Profile"}
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
