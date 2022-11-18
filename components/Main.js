import React, { useEffect, useState } from "react";
import LiveStreams from "./LiveStreams";
import { useSession } from "@supabase/auth-helpers-react";
import {
  selectCategories,
  selectRecMainStreams,
} from "../utils/channelsModels";
import SampleStream from "./SampleStream";
import CategoriesIconBar from "./CategoriesIconBar";
import Categories from "./Categories";
import Loading from "./Loading";

const Main = () => {
  const [recStreams, setRecStreams] = useState([]);
  const [categories, setcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();

  const fetchData = async () => {
    try {
      setLoading(true);

      const [recStreamsData, categories] = await Promise.all([
        selectRecMainStreams(),
        selectCategories(),
      ]);
      setRecStreams(recStreamsData);
      setcategories(categories);
    } catch (error) {
      alert("Error loading stream data");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [session]);

  return (
    <div className="absolute left-[70px] right-[70px] xl:left-[260px]">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <SampleStream />
          <LiveStreams streams={recStreams} />
          <CategoriesIconBar />
          <Categories categories={categories} />
        </div>
      )}
    </div>
  );
};

export default Main;
