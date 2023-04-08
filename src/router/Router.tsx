import { ReactRouter, RootRoute, Route } from "@tanstack/react-router";
import BasePage from "../pages/BasePage";
import HomePage from "../pages/home/Home";

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

let rootRoute = new RootRoute();

const baseRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: BasePage,
});

const homeRoute = new Route({
  getParentRoute: () => baseRoute,
  path: "/home",
  component: HomePage,
});

// SESSION ROUTES

// export const authenticatedRoutes = new Route({
// 	getParentRoute: () => rootRoute,
// 	path: "/",
// 	component: Home,
// });

// const dashboardRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "dashboard",
// 	component: Dashboard,
// });

// const areasRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "areas",
// 	component: Areas,
// });

// const eventsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "events",
// 	component: Events,
// });

// const metersRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "meters",
// 	component: Meters,
// });

// const mapsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "maps",
// 	component: Dashboard,
// });

// const reportsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "reports",
// 	component: Dashboard,
// });

// const waterbalanceRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "waterbalance",
// 	component: Dashboard,
// });

// // ADMINISTRATION ROUTES

// const administrationRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "administration",
// 	component: Users,
// });

// const administrationOrganizationsRoute = new Route({
// 	getParentRoute: () => administrationRoute,
// 	path: "organization",
// 	component: Organizations,
// });

// const administrationProfilesRoute = new Route({
// 	getParentRoute: () => administrationRoute,
// 	path: "profiles",
// 	component: Profiles,
// });

// const administrationUsersRoute = new Route({
// 	getParentRoute: () => administrationRoute,
// 	path: "users",
// 	component: Users,
// });

// // SETTINGS ROUTES

// const settingsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings",
// 	component: Settings,
// });

// const settingsUnitsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/units",
// 	component: SettingsUnits,
// });

// const settingsAlertsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/alerts",
// 	component: SettingsAlerts,
// });

// const settingsAreasRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/areas",
// 	component: SettingsAreas,
// });

// const settingsBootstrapRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/bootstrap",
// 	component: SettingsBootstrap,
// });

// const settingsEventsSettingsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/events",
// 	component: SettingsEvents,
// });

// const settingsFilesRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/files",
// 	component: SettingsFiles,
// });

// const settingsGISRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/gis",
// 	component: SettingsGIS,
// });

// const settingsHolidaysRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/holidays",
// 	component: SettingsHolidays,
// });

// const settingsInterfacesRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/interfaces",
// 	component: SettingsInterfaces,
// });

// const settingsListsRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/lists",
// 	component: SettingsLists,
// });

// const settingsMetersRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/meters",
// 	component: MetersSettings,
// });

// const settingsZonesRoute = new Route({
// 	getParentRoute: () => authenticatedRoutes,
// 	path: "settings/zones",
// 	component: Zones,
// });

// ROUTE TREE
const routeTree = rootRoute.addChildren([
  // indexRoute,
  baseRoute.addChildren([homeRoute]),
  // authenticatedRoutes.addChildren([
  // areasRoute,
  // dashboardRoute,
  // eventsRoute,
  // metersRoute,
  // mapsRoute,
  // reportsRoute,
  // waterbalanceRoute,
  // administrationRoute.addChildren([
  // 	administrationOrganizationsRoute,
  // 	administrationProfilesRoute,
  // 	administrationUsersRoute,
  // ]),
  // settingsRoute.addChildren([
  // 	settingsAreasRoute,
  // 	settingsAlertsRoute,
  // 	settingsBootstrapRoute,
  // 	settingsEventsSettingsRoute,
  // 	settingsFilesRoute,
  // 	settingsGISRoute,
  // 	settingsHolidaysRoute,
  // 	settingsInterfacesRoute,
  // 	settingsListsRoute,
  // 	settingsMetersRoute,
  // 	settingsUnitsRoute,
  // 	settingsZonesRoute,
  // ]),
  // ]),
]);

// ROUTER
export const router = new ReactRouter({ routeTree });
