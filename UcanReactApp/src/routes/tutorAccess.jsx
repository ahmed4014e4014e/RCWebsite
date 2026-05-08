import AuthAccessPage from "./AuthAccessPage";
import TutorApplicationSignupPanel from "../components/TutorApplicationSignupPanel";
import soharUniversityImage from "../assets/auth-images/sohar-university.jpg";

export default function TutorAccess() {
  return (
    <AuthAccessPage
      audienceLabel="Tutor Access"
      title="Log in or apply to join the Ucan Oman tutor team."
      description="This page is designed for tutors who already have approved tutor access, while new applicants should complete the separate tutor application form first."
      signupHeading="Tutor application"
      role="tutor"
      accessImage={soharUniversityImage}
      accessImageAlt="Sohar University campus in Oman"
      signupPanel={<TutorApplicationSignupPanel />}
    />
  );
}
