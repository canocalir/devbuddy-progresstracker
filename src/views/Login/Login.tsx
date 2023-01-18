import { SubmitHandler, useForm } from "react-hook-form";
import Navbar from "../../components/Navbar/Navbar";
import { LoginPageContainer } from "./Login.styled";
import { LoginInputProps } from "../../types/loginTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>({
    resolver: yupResolver(schema),
  });

  
  const onSubmit: SubmitHandler<LoginInputProps> = (data) => console.log(data); //!TODO


  return (
    <div>
      <Navbar />
      <LoginPageContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              {...register("username", { required: true, maxLength: 20 })}
            />
            {errors.username && <p>{errors.username?.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true, maxLength: 20 })}
            />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
          <input type="submit" />
        </form>
      </LoginPageContainer>
    </div>
  );
};

export default Login;
