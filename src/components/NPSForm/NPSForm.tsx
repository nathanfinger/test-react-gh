import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Question1 } from "./questions/Question1";
import { Question2 } from "./questions/Question2";
import { Question3 } from "./questions/Question3";
import { Question4 } from "./questions/Question4";
import { questions, questionsResponses } from "./interfaces";
import { useParams } from "react-router-dom";



export const NPSForm = () => {
  const [formStep, setFormStep] = useState(0);
  const methods = useForm({
    mode: "onChange",
    defaultValues: {} as questionsResponses,
  });

  const {
    trigger,
    formState: { isValid },
  } = methods;

  const { 
    orderId
   } = useParams();

  const onSubmit = (data: any) => {
    const formData : questions = {
      orderId: orderId,
      question_1_question: "Considering your purchase experience with us, how likely are you to recommend Schutz shoes to a friend or colleague?",
      question_2_question: "What's the main reason for your score?",
      question_3_question: "What's the additional reason for your score?",
      question_4_question: "Please Describe",
      ...data,
    }
    console.log("Form Submitted", formData);
  };

  const questions = [
    {'component': <Question1 methods={methods} />},
    {'component': <Question2 methods={methods} />},	
    {'component': <Question3 methods={methods} />},
    {'component': <Question4 methods={methods} />},
  ];

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setFormStep(formStep + 1);
    }
  };

  if (formStep === questions.length) {
    return <h1>Thank you for submitting your response</h1>;
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-6 rounded-lg bg-white p-6 shadow-md"
      >
        {questions[formStep].component}
        
        <div className="form-stepper flex">
          {formStep > 0 && (
            <button
              type="button"
              className="button-primary button-previous"
              onClick={() => setFormStep(formStep - 1)}
            >
              Back
            </button>
          )}

          {formStep < questions.length - 1 ? (
            <button
              type="button"
              className={`button-primary button-next ml-auto ${!isValid ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={!isValid}
              onClick={() => handleNext()}
            >
              Next
            </button>
          ): (
            <button
              type="submit"
              className={`button-primary button-submit ml-auto ${
                !isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isValid}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};


