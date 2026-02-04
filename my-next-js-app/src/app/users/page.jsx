"use client";

import { useGetUsersQuery } from "@/redux/apiSlice";

export default function UsersPage() {
  const { data, isLoading, isError } = useGetUsersQuery();

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <div className="container">
      <h1>Users</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
