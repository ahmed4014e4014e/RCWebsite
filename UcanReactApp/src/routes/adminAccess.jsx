import AuthAccessPage from "./AuthAccessPage";
import adminLoginImage from "../assets/auth-images/admin-login.svg";

export default function AdminAccess() {
  return (
    <AuthAccessPage
      audienceLabel="Admin Access"
      title="Log in to manage Ucan Oman as an administrator."
      description="This page is for platform administrators who need access to contact submissions, account oversight, and future admin tools."
      role="admin"
      allowSignup={false}
      accessImage={adminLoginImage}
      accessImageAlt="Ucan Oman admin login security illustration"
    />
  );
}
