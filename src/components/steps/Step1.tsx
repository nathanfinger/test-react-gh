import { UseFormReturn } from 'react-hook-form';

interface Step1Props {
  methods: UseFormReturn<any>;
}

export const Step1: React.FC<Step1Props> = ({ methods }) => {
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className='space-y-4'>
      <h2 className='step-title'>Step 1</h2>
      <label className='form-label'>
        Name:
        <input 
          className={`form-input ${errors.name? 'border-red-500': ''}`}
          placeholder='Enter your name'
          {...register('name', { required: 'Name is required' })} 
        />
        {errors.name && (
          <span className="text-sm text-red-500">{String(errors.name.message)}</span>
        )}
      </label>
    </div>
  );
};