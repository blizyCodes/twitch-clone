import { useSession } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import {
  selectCarouselStreams,
  selectCategories,
  selectRecMainStreams,
} from "../utils/channelsModels";
import Carousel from "./Carousel";
import Categories from "./Categories";
import CategoriesIconBar from "./CategoriesIconBar";
import LiveStreams from "./LiveStreams";
import Loading from "./Loading";

const Main = () => {
  const [recStreams, setRecStreams] = useState([]);
  const [categories, setcategories] = useState([]);
  const [carouselStreams, setCarouselStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();

  const fetchData = async () => {
    try {
      setLoading(true);

      const [recStreamsData, categories, carouselStreamsData] =
        await Promise.all([
          selectRecMainStreams(),
          selectCategories(),
          selectCarouselStreams(),
        ]);
      setRecStreams(recStreamsData);
      setcategories(categories);
      setCarouselStreams(carouselStreamsData);
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
        <div className="pl-[20px]">
          {/* <SampleStream /> */}
          <Carousel streams={carouselStreams} />
          <LiveStreams streams={recStreams} />
          <CategoriesIconBar />
          <Categories categories={categories} />
        </div>
      )}
    </div>
  );
};

export default Main;
