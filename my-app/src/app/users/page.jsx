import ProfilePage from "./UserProfile";

export default function Users() {
  const users = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/100?img=1",
      status: "Active",
    },
    {
      name: "Sarah Smith",
      role: "UI/UX Designer",
      email: "sarah@example.com",
      avatar: "https://i.pravatar.cc/100?img=2",
      status: "Inactive",
    },
    {
      name: "Michael Lee",
      role: "Backend Engineer",
      email: "michael@example.com",
      avatar: "https://i.pravatar.cc/100?img=3",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <div className="mx-auto w-full">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Users
          </h2>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-black">
            + Add User
          </button>
        </div>

        <ProfilePage />

        {/* Users Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md transition"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-700"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {user.role}
                  </p>
                </div>

                {/* Status */}
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-zinc-100 dark:bg-zinc-800" />

              {/* Email */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {user.email}
              </p>

              {/* Actions */}
              <div className="mt-4 flex gap-3">
                <button className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  View
                </button>
                <button className="flex-1 rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
