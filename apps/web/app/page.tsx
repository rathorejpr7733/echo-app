"use client";

import { SignInButton , UserButton } from "@clerk/nextjs";
import { useMutation, useQuery , Authenticated , Unauthenticated  } from "convex/react";
import { api } from "@workspace/backend/_generated/api";


export default function Page() {

  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
    <Authenticated>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>app/web</p>
      <UserButton/>
      
      <button onClick={()=> addUser() } > Add</button>
      <div className="max-w-sm w-full mx-auto">
      {JSON.stringify(users, null, 2)}
      </div>
    </div>
    </Authenticated>

    <Unauthenticated>
      <p>Please sign in !</p>
      <SignInButton>Sign In ! </SignInButton>
      </Unauthenticated>

    </>
  )
}
