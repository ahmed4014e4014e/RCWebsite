export function getUserRole(profile, user) {
  return (
    profile?.role ||
    user?.user_metadata?.role ||
    user?.app_metadata?.role ||
    "student"
  );
}

export function getDashboardPath(role) {
  if (role === "tutor") {
    return "/tutor-dashboard/";
  }

  return "/student-dashboard/";
}
