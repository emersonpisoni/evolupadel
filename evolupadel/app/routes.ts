import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/dashboard/dashboard.screen.tsx"),

  route("login", "./routes/login/login.screen.tsx"),
] satisfies RouteConfig;