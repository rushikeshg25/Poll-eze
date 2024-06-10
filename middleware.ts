import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    //Routes avaliable to public and private users
    "/",
    "/api/clerk",
    "/poll/(.*)",
    "/api/poll/vote-poll/publicuser",
    "/announcements",
  ],

  ignoredRoutes: ["/api/poll/vote-poll/publicuser"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
