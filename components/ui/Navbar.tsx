"use client";
import { NavbarPropsType } from "@/types/UiTypes";
import ThemeToggleButton from "../ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navbar = ({ isloggedIn }: NavbarPropsType) => {
  const router = useRouter();
  const LogoutHandler = () => {
    router.push("/login");
  };
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between py-2 px-9">
        <div className="flex items-center select-none sm:text-3xl">
          Poll-eze
        </div>
        <div className="flex items-center gap-2">
          {isloggedIn && (
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/newpoll");
              }}
            >
              Create New Poll
            </Button>
          )}
          {isloggedIn && (
            <Button variant="destructive" onClick={LogoutHandler}>
              Logout
            </Button>
          )}
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
