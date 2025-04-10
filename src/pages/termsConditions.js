import React from "react";
import "./pageStyles/termsConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions-container fade-in">
      <h1 className="terms-conditions-title">Terms and Conditions</h1>
      <div className="terms-conditions-content">
        <p className="terms-conditions-intro">
          Please read these Terms and Conditions carefully before using our
          website or services.
        </p>

        <h2 className="terms-conditions-subheading">1. Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to comply with and be
          bound by these Terms and Conditions and our Privacy Policy.
        </p>

        <h2 className="terms-conditions-subheading">2. Use of Our Services</h2>
        <p>
          You agree to use our services in accordance with all applicable laws
          and regulations. You will not use our services for any unlawful
          purpose or engage in any harmful activities.
        </p>

        <h2 className="terms-conditions-subheading">
          3. Account Responsibility
        </h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account information and for all activities that occur under your
          account.
        </p>

        <h2 className="terms-conditions-subheading">
          4. Prohibited Activities
        </h2>
        <p>The following activities are prohibited while using our services:</p>
        <ul className="terms-conditions-list">
          <li>Engaging in fraudulent activities</li>
          <li>Uploading or transmitting viruses or harmful software</li>
          <li>
            Attempting to gain unauthorized access to any part of our services
          </li>
          <li>Harassing, threatening, or discriminating against others</li>
        </ul>

        <h2 className="terms-conditions-subheading">
          5. Intellectual Property
        </h2>
        <p>
          All content on this website, including text, graphics, logos, images,
          and software, is the property of the website owner and is protected by
          copyright and other intellectual property laws.
        </p>

        <h2 className="terms-conditions-subheading">
          6. Limitation of Liability
        </h2>
        <p>
          We are not responsible for any damages, losses, or costs that may
          arise from your use of our services. You use our services at your own
          risk.
        </p>

        <h2 className="terms-conditions-subheading">7. Changes to Terms</h2>
        <p>
          We may update these Terms and Conditions at any time. Any changes will
          be posted on this page, and the date at the top of the page will be
          updated.
        </p>

        <h2 className="terms-conditions-subheading">8. Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
