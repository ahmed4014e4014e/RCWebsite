import AuthAccessPage from "./AuthAccessPage";
import soharUniversityImage from "../assets/auth-images/sohar-university.jpg";

export default function TutorAccess() {
  return (
    <AuthAccessPage
      audienceLabel="Tutor Access"
      title="Log in or sign up to join the Ucan Oman tutor team."
      description="This page is designed for tutors who want to create an account, access the platform, and become part of the Ucan Oman support network."
      signupHeading="Create a tutor account"
      role="tutor"
      accessImage={soharUniversityImage}
      accessImageAlt="Sohar University campus in Oman"
    />
  );
}
