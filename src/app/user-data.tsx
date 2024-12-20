"use client";

import { useSession } from "@/core/auth/client";

const UserData = () => {
  const { data: session, isPending, error } = useSession();
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {session && (
        <div>
          <div>{session.user.email}</div>
          <div>{session.user.name}</div>
        </div>
      )}
    </div>
  );
};

export default UserData;
