import supabase from "./supabase";

export async function getUsers() {
  let { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  return users;
}

export async function getUser(id: number) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  const user = data?.[0];

  return user;
}
