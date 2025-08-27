"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";


export default function Page() {

  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>app/web</p>
      <button onClick={()=> addUser() } > Add</button>
      <div className="max-w-sm w-full mx-auto">
      {JSON.stringify(users, null, 2)}
      </div>
    </div>
  )
}
