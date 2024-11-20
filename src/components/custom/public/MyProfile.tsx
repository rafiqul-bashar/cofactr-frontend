import React from "react";
import userStore from "../../../store/user.store";
import { Card, CardTitle } from "../../ui/card";

export default function MyProfile() {
  const { USER } = userStore((state) => state);

  return (
    <div className="mx-auto md:mr-auto max-w-screen-md w-full bg-red-300">
      <Card>
        <CardTitle>My Profile</CardTitle>
      </Card>
    </div>
  );
}
