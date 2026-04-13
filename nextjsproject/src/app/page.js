"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    image: null,
  });

  // ✅ GET API
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ✅ POST API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("dob", form.dob);
    formData.append("image", form.image);

    try {
      const res = await fetch(
        "http://localhost:8080/api/users/create",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        alert("User Created Successfully ✅");
        setForm({ name: "", email: "", dob: "", image: null });
        fetchUsers(); // refresh list
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto">

        {/* 🔹 FORM */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4">Create User</h2>

          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded col-span-2 hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* 🔹 USER LIST */}
        <div className="grid md:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
             <div className="overflow-hidden rounded-xl">
  <img
  src={`http://localhost:8080/uploads/${user.imagePath}`}
  alt="user"
  className="w-full h-auto object-contain rounded-lg"
/>
</div>

              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">{user.dob}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}