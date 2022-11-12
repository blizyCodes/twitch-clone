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

const Main = () => {
  const [recStreams, setRecStreams] = useState([]);
  const [categories, setcategories] = useState([]);
  const session = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const [recStreamsData, categories] = await Promise.all([
        selectRecMainStreams(),
        selectCategories(),
      ]);
      setRecStreams(recStreamsData);
      setcategories(categories);
    };
    fetchData();
  }, [session]);
  return (
    <div className="pl-4 pt-4">
      <SampleStream />
      <LiveStreams streams={recStreams} />
      <CategoriesIconBar />
      <Categories categories={categories} />
    </div>
  );
};

export default Main;
