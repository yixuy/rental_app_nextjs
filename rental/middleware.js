export { default } from "next-auth/middleware";
// protect the route if the user logout
export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
