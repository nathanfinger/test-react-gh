import { formStepProps } from "../interfaces";


export const Question4: React.FC<formStepProps> = ({ methods }) => {
  const {
    register,
  } = methods;

  return (
    <div className="form-control">
      <h2>Please Describe</h2>
      <textarea 
        className="textarea textarea-bordered"
        {...register('question_4_response', {
          required: 'This question is required'
        })}
      ></textarea>
    </div>
  )
}