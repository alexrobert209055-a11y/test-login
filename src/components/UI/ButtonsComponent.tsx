import Button from "./Button";

const ButtonsComponent = ({ STEPS, handleSubmit, isSubmitting, handleNext, currentStep, handleBack }) => {
  return (
      <div className="flex justify-between mt-8">
        <Button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        >
          Back
        </Button>
        {currentStep === STEPS.length - 1 ? (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`bg-green-500 text-white hover:bg-green-600 transition-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={false}
            className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Next
          </Button>
        )}
      </div>
  );
};

export default ButtonsComponent;
