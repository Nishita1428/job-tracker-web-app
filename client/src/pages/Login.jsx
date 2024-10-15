import {
  Form,
  redirect,
  Link,
  useActionData,
  useNavigate,
} from "react-router-dom";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import Submitbtn from "../components/Submitbtn";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = "password too short";
    return errors;
  }


  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};
const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = { email: "test@test.com", password: "secret123" };

    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a Test Drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);

      return error;
    }
  };

  const errors = useActionData();
  return (
    <Wrapper>
      <div>
        <Logo />
        <Form method="post" className="form">
          <h4>Login</h4>
          {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>}

          <FormRow type="email" name="email" labelText="email" />

          <FormRow type="password" name="password" labelText="password" />
          <Submitbtn />
          <button
            onClick={loginDemoUser}
            type="button"
            className="btn btn-block"
          >
            Explore the App
          </button>
          <p>
            Not a member yet?
            <Link to="/register" className="member-btn">
              Register
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
