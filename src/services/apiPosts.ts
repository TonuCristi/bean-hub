import supabase from "./supabase";

interface PostInterface {
  content: string;
  userId: number | undefined;
}

export async function getPosts() {
  let { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  return posts;
}

export async function createPost(newPost: PostInterface) {
  const { data, error } = await supabase
    .from("posts")
    .insert([{ ...newPost }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  return data;
}
