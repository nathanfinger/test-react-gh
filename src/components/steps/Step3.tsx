import { UseFormReturn } from "react-hook-form";

interface Step3Props {
  methods: UseFormReturn<any>;
}

export const Step3: React.FC<Step3Props> = ({ methods }) => {
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-4">
      <h2 className="step-title">Step 3</h2>
      <label className="form-label">
        Password:
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          className={`form-input ${errors.password ? "border-red-500" : ""}`}
          placeholder="Enter your password"
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {String(errors.password.message)}
          </span>
        )}
      </label>
    </div>
  );
};
