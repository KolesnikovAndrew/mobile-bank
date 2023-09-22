import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const routes = [
  { path: "/", component: lazy(() => import("./home")) },
  { path: "/payments", component: lazy(() => import("./payments")) },
  { path: "/city", component: lazy(() => import("./city")) },
  { path: "/chat", component: lazy(() => import("./chat")) },
  { path: "/more", component: lazy(() => import("./more")) },
];

export const Routing = () => {
  return (
    <Switch>
      {routes.map(({ path, component: Component }) => (
        <Route exact path={path} key={path} component={Component} />
      ))}

      <Redirect to="/" />
    </Switch>
  );
};
