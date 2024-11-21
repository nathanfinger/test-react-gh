import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";

export const MultiStepForm = () => {
  const [formStep, setFormStep] = useState(0);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const {
    trigger,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    console.log('Form Submitted', data);
  }

  const steps = [
    { name: 'Step 1', component: <Step1 methods={methods} /> },
    { name: 'Step 2', component: <Step2 methods={methods} /> },
    { name: 'Step 3', component: <Step3 methods={methods} /> },
  ]

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setFormStep(formStep + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 rounded-lg bg-white p-6 shadow-md">
        {steps[formStep].component}

        <div className="flex justify-between">
          {formStep > 0 && (
            <button 
              type="button"
              className="button-primary button-previous"
              onClick={() => setFormStep(formStep - 1)}
            >Back</button>
          )}
          {formStep < steps.length ? (
            <button 
              type="button"
              className={`button-primary button-next ${formStep <= 0? 'ml-auto': ''} ${
                !isValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isValid}
              onClick={() => handleNext()}
            >Next</button>
          ): (
            <button
              type="submit"
              className={`button-primary button-submit ${
                !isValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isValid}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  )
}