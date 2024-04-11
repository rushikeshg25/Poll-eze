import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/clerk",
    "/poll/(.*)",
    "/api/poll/vote-poll/publicuser",
  ],

  ignoredRoutes: ["/", "/test", "/api/poll/vote-poll/publicuser"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
