"use client";
import ChangePasswordForm from "./ChangePasswordForm";
import DeleteCandidateAccount from "./DeleteCandidateAccount";
import ContactForm from "./ContactForm";
import PrivacySettings from "./PrivacySettings";

const CandidateAccountSettings = () => {
  return (
    <div className="container max-w-3xl">
      <div className="space-y-8">
        <ContactForm />

        {/* Privacy Settings */}
        <PrivacySettings />

        <ChangePasswordForm />

        <DeleteCandidateAccount />
      </div>
    </div>
  );
};

export default CandidateAccountSettings;
