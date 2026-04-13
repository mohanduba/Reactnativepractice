import Image from "next/image";

export default function ProfilePage() {
  const user = {
    name: "Ravi Kumar",
    role: "Senior Electrician",
    location: "Hyderabad, India",
    rating: 4.8,
    projects: 124,
    experience: "8+ Years",
    about:
      "Certified electrician with over 8 years of experience in residential and commercial electrical work. Specialized in wiring, panel installation, fault diagnosis, and safety compliance.",
    skills: ["Wiring", "Panel Setup", "AC Repair", "Maintenance", "Safety Checks"],
  };

  return (
    <div className="h-full bg-zinc-50 dark:bg-black py-5 px-1">
      <div className="mx-auto w-full">
        {/* CARD */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-lg p-8">
          
          {/* HEADER */}
          <div className="flex flex-col items-center text-center">
            <div className="relative h-28 w-28">
              <img
  src="https://i.pinimg.com/736x/ed/42/b8/ed42b8571dbe0a70cfd2326eb9676541.jpg"
  alt="Profile"
  className="h-28 w-28 rounded-full object-cover"
/>
            </div>

            <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">
              {user.name}
            </h1>

            <p className="text-zinc-600 dark:text-zinc-400">
              {user.role}
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              📍 {user.location}
            </p>
          </div>

          {/* STATS */}
          <div className="mt-8 grid xs:grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800 p-4">
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                {user.projects}
              </p>
              <p className="text-sm text-zinc-500">Projects</p>
            </div>

            <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800 p-4">
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                ⭐ {user.rating}
              </p>
              <p className="text-sm text-zinc-500">Rating</p>
            </div>

            <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800 p-4">
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                {user.experience}
              </p>
              <p className="text-sm text-zinc-500">Experience</p>
            </div>
          </div>

          {/* ABOUT */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              About
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {user.about}
            </p>
          </div>

          {/* SKILLS */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Skills
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 dark:bg-blue-900/30 px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition">
              Edit Profile
            </button>

            <button className="flex-1 rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
