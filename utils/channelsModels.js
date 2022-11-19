import supabase from "../api/supabaseClient";

export const selectRecChannels = async () => {
  const { data, error, status } = await supabase
    .from("mock_data")
    .select()
    .order("username")
    .limit(9);
  return data;
};

export const selectTopChannels = async () => {
  const { data, error, status } = await supabase
    .from("mock_data")
    .select()
    .order("ranking", { ascending: false })
    .limit(3);
  return data;
};

export const selectRecMainStreams = async () => {
  const { data, error, status } = await supabase.from("live_streams").select();
  return data;
};

export const selectCategories = async () => {
  const { data, error, status } = await supabase.from("categories").select();
  return data;
};
