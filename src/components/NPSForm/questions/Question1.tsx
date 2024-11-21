import { formStepProps } from "../interfaces";

export const Question1: React.FC<formStepProps> = ({ methods }) => {
  const {
    register,
  } = methods;

  return (
    <div className="form-control">
      <h2>
        Considering your purchase experience with us, how likely are you to
        recommend Schutz shoes to a friend or colleague?
      </h2>

      <div className="radio-group">
        {Array.from({length: 10}).map((_, index)=>(
          <div className="radio-input" key={index+1}>
            <label htmlFor={`radio${index+1}`}>{index+1}</label>
            <input 
              type="radio"
              className="radio" 
              value={index+1}
              {...register('question_1_response', {
                required: 'This question is required',
              })}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};