import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form submitted:", values);
    alert("Formik Registration successful!");
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Formik Registration Form
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}             
      >
        <Form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
