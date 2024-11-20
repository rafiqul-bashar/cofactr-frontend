import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import userStore from "../store/user.store";
import { useMutation } from "@tanstack/react-query";
import {
  Login_Credentials,
  loginToServer,
  Register_Credentials,
  registerToServer,
} from "../api/auth.requests";
import LoadingStatus from "../components/custom/LoadingStatus";
import { useState } from "react";

import { useToast } from "../components/ui/use-toast";

const dU = {
  products: {
    default: [],
  },
  orders: {
    default: [],
  },
  _id: "6684e5f9d71c9592f14d6c29",
  name: "Bashar Al Asad",
  email: "test@gmail.com",
  seller: false,
  password: "test1234",
};

const dC = { email: "test2@gmail.com", password: "test1234" };

export default function RegisterPage() {
  const { SAVE_USER } = userStore((state) => state);
  const [backendResponse, setBackendResponse] = useState({});
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: (credentials: Register_Credentials) =>
      registerToServer(credentials),
    onSuccess: (data) => {
      if (data?.message) {
        setBackendResponse(data);
      }
      if (data?.success) {
        toast({
          variant: "success",
          title: data.message,
        });
        SAVE_USER(data.data);
      }
    },
    onError: (data) => {
      console.error(data);
    },
  });

  const LIF = () => {
    mutation.mutate({ name: dU.name, email: dU.email, password: dU.password });
  };

  if (mutation.isPending) return <LoadingStatus />;
  return (
    <div className="py-8 md:py-20">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Create An Account</h1>
          <p className="text-balance text-muted-foreground">
            Enter your informations and get started.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          {backendResponse?.message && (
            <h5
              className={`text-base leading-5 font-medium  rounded-md opacity-100 font-regular p-2 ${
                backendResponse?.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-200 text-red-700 "
              }`}
            >
              {backendResponse?.message}
            </h5>
          )}
          <Button onClick={() => LIF()} type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="#" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
