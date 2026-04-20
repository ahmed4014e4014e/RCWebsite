export function getUserRole(profile, user, fallbackRole = "student") {
  return (
    profile?.role ||
    user?.user_metadata?.role ||
    user?.app_metadata?.role ||
    fallbackRole
  );
}

export function getDashboardPath(role) {
  if (role === "admin") {
    return "/admin-dashboard/";
  }

  if (role === "tutor") {
    return "/tutor-dashboard/";
  }

  return "/student-dashboard/";
}
