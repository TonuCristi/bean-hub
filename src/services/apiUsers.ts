import supabase from "./supabase";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export async function getUsers() {
  let { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  return users;
}

export async function getUserByEmail(email: string | undefined) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  const user: User = data?.[0] || null;

  return user;
}

export async function createUser(newUser: User) {
  const { error: createError } = await supabase
    .from("users")
    .insert([{ name: newUser.name, email: newUser.email }])
    .select();

  const { data: signUpUser, error: signUpError } = await supabase.auth.signUp({
    email: newUser.email,
    password: newUser.password,
    options: {
      data: {
        name: newUser.name,
      },
    },
  });

  if (createError) {
    console.log(createError);
    throw new Error("Something went wrong...");
  }

  if (signUpError) {
    console.log(signUpError);
    throw new Error("Something went wrong...");
  }

  return signUpUser;
}

export async function signInUser(newUser: User) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: newUser.email,
    password: newUser.password,
  });

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  return data;
}

export async function getLoggedUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  return data;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }
}
