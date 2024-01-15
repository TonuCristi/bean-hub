import supabase from "./supabase";

export interface User {
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

export async function getUser(id: number) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }

  const user = data?.[0];

  return user;
}

export async function createUser(newUser: User) {
  const { data: user, error: createError } = await supabase
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

  // const { data: signInUser, error: signInError } =
  //   await supabase.auth.signInWithPassword({
  //     email: "example@email.com",
  //     password: "example-password",
  //   });

  if (createError) {
    console.log(createError);
    throw new Error("Something went wrong...");
  }

  if (signUpError) {
    console.log(signUpError);
    throw new Error("Something went wrong...");
  }

  // if (signInError) {
  //   console.log(signInError);
  //   throw new Error("Something went wrong...");
  // }

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
  // const { data, error } = await supabase.auth.getSession();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log(error);
    // throw new Error("Something went wrong...");
  }

  return user;
}
