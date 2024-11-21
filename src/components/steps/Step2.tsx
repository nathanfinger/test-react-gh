import { UseFormReturn } from "react-hook-form";

interface Step2Props {
  methods: UseFormReturn<any>;
}

export const Step2: React.FC<Step2Props> = ({ methods }) => {
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-4">
      <h2 className="step-title">Step 2</h2>
      <label className="form-label">
        Email:
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className={`form-input ${errors.email ? "border-red-500" : ""}`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{String(errors.email.message)}</span>
        )}
      </label>
    </div>
  );
};
