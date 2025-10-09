import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-6">
      {/* Controlled Component Form */}
      <RegistrationForm />

      {/* Formik Form */}
      {/* <FormikForm />*/ }
    </div>
  );
}

export default App;
