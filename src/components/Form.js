import { useForm } from "react-hook-form";
import "./Form.css";

function Form() {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { isDirty, errors, isSubmitted },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  console.log({ isDirty });
  console.log({ isSubmitted });
  console.log({ errors });

  return (
    <div className="container">
      <h1>Demo Form</h1>
      <form onSubmit={handleSubmit(() => reset())}>
        <input
          className="firstName"
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <p>
          {errors.firstName?.type === "required" && "First name is required!"}
        </p>
        <br />
        <input
          className="lastName"
          {...register("lastName", { required: true, minLength: 4 })}
          placeholder="Last Name"
        />
        <p>
          {errors.lastName?.type === "required" && "Last name is required!"}
          {errors.lastName?.type === "minLength" &&
            "Last name should contain at least 4 characters!"}
        </p>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
