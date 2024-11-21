import { formStepProps } from "../interfaces";

export const Question2: React.FC<formStepProps> = ({ methods }) => {
  const {
    register,
  } = methods;

  const options = [
    'Value for money',
    'Product quality',
    'Customer service',
    'Other'
  ]

  return (
    <div className="form-control">
      <h2>
      What's the main reason for your score?
      </h2>
      <select
        className="select select-bordered w-full max-w-xs"
        {...register('question_2_response', {
          required: 'This question is required'
        })}
      >
        <option disabled selected>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}

      </select>

    </div>
  );
}