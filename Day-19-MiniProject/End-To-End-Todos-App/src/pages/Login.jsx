import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";
import { signIn } from "../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      alert("Invalid email or password");
      return;
    }

    try {
      const res = await signIn({ email, password, returnSecureToken: true });
      login(email, res.data.localId);
      navigate("/todos");
    } catch (err) {
      alert(err.response?.data?.error?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="m-auto">Login</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;
