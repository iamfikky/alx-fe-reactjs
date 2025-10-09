import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        React Form Handling — Controlled vs Formik
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
