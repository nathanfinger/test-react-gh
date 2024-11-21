import { formStepProps } from "../interfaces";

export const Question3: React.FC<formStepProps> = ({ methods }) => {
  
  const {
    register,
  } = methods;

  const options = [
    'Style',
    'Comfort',
    'Durability',
    'Price',
    'Other'
  ]

  return (
    <div className="form-control">
      <h2>
      What's the additional reason for your score?
      </h2>
      <select
        className="select select-bordered w-full max-w-xs"
        {...register('question_3_response', {
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
  )
}