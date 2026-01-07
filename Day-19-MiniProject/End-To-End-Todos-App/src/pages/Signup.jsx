import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";
import { signUp } from "../services/auth.service";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      alert("Invalid email or password (min 6 chars)");
      return;
    }

    try {
      const res = await signUp({ email, password, returnSecureToken: true });
      signup(email, res.data.localId); // store in context
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSignup} className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="m-auto">Sign Up</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Signup;
