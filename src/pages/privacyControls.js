import React from "react";
import "./pageStyles/privacyControl.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container fade-in">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <div className="privacy-policy-content">
        <p className="privacy-policy-intro">
          Your privacy is important to us. This Privacy Policy explains the
          types of personal information we collect and how we use, protect, and
          disclose it.
        </p>

        <h2 className="privacy-policy-subheading">1. Information We Collect</h2>
        <p>
          We may collect the following types of personal information when you
          use our website or services:
        </p>
        <ul className="privacy-policy-list">
          <li>Personal details (e.g., name, email address, etc.)</li>
          <li>Usage data (e.g., IP address, browser type, pages visited)</li>
          <li>Payment details (if applicable, such as billing information)</li>
        </ul>

        <h2 className="privacy-policy-subheading">
          2. How We Use Your Information
        </h2>
        <p>
          The information we collect may be used for the following purposes:
        </p>
        <ul className="privacy-policy-list">
          <li>To provide and improve our services</li>
          <li>To process transactions and manage user accounts</li>
          <li>To send important updates and marketing communications</li>
          <li>To personalize your experience on our website</li>
        </ul>

        <h2 className="privacy-policy-subheading">
          3. How We Protect Your Information
        </h2>
        <p>
          We take your privacy seriously and implement various security measures
          to protect your personal information, including:
        </p>
        <ul className="privacy-policy-list">
          <li>Encryption of sensitive data</li>
          <li>Regular security audits</li>
          <li>Access controls and data protection procedures</li>
        </ul>

        <h2 className="privacy-policy-subheading">
          4. Sharing Your Information
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your data in the following circumstances:
        </p>
        <ul className="privacy-policy-list">
          <li>With trusted service providers who assist in our operations</li>
          <li>When required by law or to protect our rights and safety</li>
        </ul>

        <h2 className="privacy-policy-subheading">5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="privacy-policy-list">
          <li>Access, correct, or delete your personal information</li>
          <li>Withdraw consent for marketing communications</li>
          <li>
            Request restriction or objection to the processing of your data
          </li>
        </ul>

        <h2 className="privacy-policy-subheading">
          6. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the date at the top of the page will be
          updated.
        </p>

        <p className="privacy-policy-footer">
          If you have any questions about this Privacy Policy, please contact us
          at <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
