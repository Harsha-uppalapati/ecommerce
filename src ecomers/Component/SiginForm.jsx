import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useInput from "../Hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../redux/Actions/actions";
import { useNavigate } from "react-router-dom";

const SiginForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [email, setEmail, ResetEmail] = useInput("");
  let [password, setPassword, ResetPassword] = useInput("");
  let data = useSelector(state => state.data.user);

  useEffect(() => {
    data === true ? navigate("/") : navigate("/sigin");
    return () => {
      console.log("ok");
    };
  }, [data]);

  let handleSubmit = e => {
    e.preventDefault();
    ResetEmail();
    ResetPassword();
    console.log(email);
    console.log(password);
    try {
      dispatch(loginInitiate(email, password));
    } catch (error) {}
  };

  return (
    <section>
      <article>
        <div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <div className="flex justify-center items-center mt-32 ">
                <div className="w-full max-w-xs">
                  <Form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        {...setEmail}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="shadow appearance border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...setPassword}
                      />
                      <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-8 ml-3 rounded focus:outline-none focus:shadow-outline mt-2"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </Form>
                  <p className="text-center text-gray-500 text-xs">
                    &copy;2020 First buy. All rights reserved.
                  </p>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </article>
    </section>
  );
};

export default SiginForm;
