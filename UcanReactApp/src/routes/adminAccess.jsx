import AuthAccessPage from "./AuthAccessPage";

export default function AdminAccess() {
  return (
    <AuthAccessPage
      audienceLabel="Admin Access"
      title="Log in to manage Ucan Oman as an administrator."
      description="This page is for platform administrators who need access to contact submissions, account oversight, and future admin tools."
      signupHeading="Create an admin account"
      role="admin"
    />
  );
}
