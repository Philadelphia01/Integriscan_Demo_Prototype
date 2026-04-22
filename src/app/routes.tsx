import { createBrowserRouter, Navigate } from "react-router";
import { LoginScreen } from "./components/LoginScreen";
import { HomeDashboard } from "./components/HomeDashboard";
import { LicenseScanner } from "./components/LicenseScanner";
import { DriverVerification } from "./components/DriverVerification";
import { BreathalyzerResult } from "./components/BreathalyzerResult";
import { EvidenceFinalize } from "./components/EvidenceFinalize";
import { TestPassedScreen } from "./components/TestPassedScreen";
import { ReportSubmittedScreen } from "./components/ReportSubmittedScreen";
import { HotspotsMapScreen } from "./components/HotspotsMapScreen";
import { MainShell } from "./components/MainShell";
import { SplashScreen } from "./components/SplashScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { SupervisorLoginScreen } from "./components/supervisor/SupervisorLoginScreen";
import { SupervisorRegisterScreen } from "./components/supervisor/SupervisorRegisterScreen";
import { SupervisorLayout } from "./components/supervisor/SupervisorLayout";
import { SupervisorDashboardScreen } from "./components/supervisor/SupervisorDashboardScreen";
import { SupervisorLogsScreen } from "./components/supervisor/SupervisorLogsScreen";
import { SupervisorEvidenceScreen } from "./components/supervisor/SupervisorEvidenceScreen";
import { SupervisorReportsScreen } from "./components/supervisor/SupervisorReportsScreen";
import { SupervisorOfficersScreen } from "./components/supervisor/SupervisorOfficersScreen";
import { SupervisorSettingsScreen } from "./components/supervisor/SupervisorSettingsScreen";
import { SupervisorOfficerDetailScreen } from "./components/supervisor/SupervisorOfficerDetailScreen";
import { SupervisorAddOfficerScreen } from "./components/supervisor/SupervisorAddOfficerScreen";
import { AppErrorScreen } from "./components/AppErrorScreen";
import { SupervisorAuditLogScreen } from "./components/supervisor/SupervisorAuditLogScreen";
import { SupervisorSystemConfigScreen } from "./components/supervisor/SupervisorSystemConfigScreen";
import { SupervisorAdminUsersScreen } from "./components/supervisor/SupervisorAdminUsersScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/login",
    Component: LoginScreen,
    errorElement: <AppErrorScreen />,
  },
  {
    Component: MainShell,
    errorElement: <AppErrorScreen />,
    children: [
      { path: "/dashboard", Component: HomeDashboard },
      { path: "/hotspots", Component: HotspotsMapScreen },
      { path: "/scanner", Component: LicenseScanner },
      { path: "/settings", Component: SettingsScreen },
    ],
  },
  {
    path: "/verification",
    Component: DriverVerification,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/result",
    Component: BreathalyzerResult,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/test-passed",
    Component: TestPassedScreen,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/finalize",
    Component: EvidenceFinalize,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/report-submitted",
    Component: ReportSubmittedScreen,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/supervisor",
    Component: SupervisorLoginScreen,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/supervisor/register",
    Component: SupervisorRegisterScreen,
    errorElement: <AppErrorScreen />,
  },
  {
    path: "/website",
    element: <Navigate to="/supervisor" replace />,
  },
  {
    path: "/web",
    element: <Navigate to="/supervisor" replace />,
  },
  {
    Component: SupervisorLayout,
    errorElement: <AppErrorScreen />,
    children: [
      { path: "/supervisor/dashboard", Component: SupervisorDashboardScreen },
      { path: "/supervisor/logs", Component: SupervisorLogsScreen },
      { path: "/supervisor/evidence/:caseId", Component: SupervisorEvidenceScreen },
      { path: "/supervisor/reports", Component: SupervisorReportsScreen },
      { path: "/supervisor/officers", Component: SupervisorOfficersScreen },
      { path: "/supervisor/officers/new", Component: SupervisorAddOfficerScreen },
      { path: "/supervisor/officers/:officerId", Component: SupervisorOfficerDetailScreen },
      { path: "/supervisor/settings", Component: SupervisorSettingsScreen },
      { path: "/supervisor/admin/users", Component: SupervisorAdminUsersScreen },
      { path: "/supervisor/admin/audit", Component: SupervisorAuditLogScreen },
      { path: "/supervisor/admin/config", Component: SupervisorSystemConfigScreen },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
