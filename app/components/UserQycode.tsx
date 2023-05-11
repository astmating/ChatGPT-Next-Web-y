import React, { useState } from "react";
import { useSwitchTheme } from "./home.module";

export function UserQycode() {
  const [inviteCode, setInviteCode] = useState("");
  const [isCodeEntered, setIsCodeEntered] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inviteCode === "123") {
      setIsCodeEntered(true);
      useSwitchTheme();
    }
  };

  if (isCodeEntered) {
    return null; // Hide the UserQycode component
  }

  return (
    <div className="UserQycode">
      <div className="overlay"></div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            placeholder="Enter invite code"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
