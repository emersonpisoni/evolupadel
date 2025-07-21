import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/shared/sidebar.tsx", [
    index("./routes/dashboard/dashboard.screen.tsx"),
  ]),

  route("login", "./routes/login/login.screen.tsx"),
] satisfies RouteConfig;