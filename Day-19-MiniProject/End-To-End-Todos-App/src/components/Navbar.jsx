import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ filter, setFilter }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
      {/* Application Title */}
      <h1 className="text-2xl font-bold">Todos Application</h1>

      {/* Filter Options */}
      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All Todos
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "outline"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </div>

      {/* Sign In / Sign Out */}
      <div>
        {user ? (
          <Button variant="destructive" onClick={logout}>
            Sign Out
          </Button>
        ) : (
          <Button onClick={() => (window.location.href = "/login")}>Sign In</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
