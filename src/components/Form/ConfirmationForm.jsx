const ConfirmationForm = ({ formData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Please review your information:
      </h2>
      <div className="space-y-2">
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Password:</strong> {formData.password}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationForm;
