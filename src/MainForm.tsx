import * as React from "react";
import { Button, TextField } from "@material-ui/core";
import { Form, Formik, Field } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MainForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: ""
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="firstName"
              placeholder="First Name"
              component={MainForm}
            />
          </div>
          <div>
            <Field
              name="lastName"
              placeholder="Last Name"
              component={MainForm}
            />
          </div>
          <div>
            <Field name="email" placeholder="email" component={MainForm} />
          </div>

          <Button type="submit">Submit</Button>

          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
