"use client";

import { OrganizationSwitcher , UserButton } from "@clerk/nextjs";
import { useMutation  } from "convex/react";
import { api } from "@workspace/backend/_generated/api";


export default function Page() {

  const addUser = useMutation(api.users.add);

  return (
  
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>app/web</p>
      <UserButton/>

      <OrganizationSwitcher  hidePersonal />

      <button onClick={()=> addUser() } > Add</button>

    </div>

  )
}
