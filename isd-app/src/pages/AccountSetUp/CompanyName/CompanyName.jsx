import "./CompanyName.scss";
import { useForm } from "react-hook-form";
import { MyInput } from "../../../utilities/utils";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const errorSchema = yup
  .object({
    company_name: yup.string().required("Enter your company name."),
  })
  .required();

const CompanyName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(errorSchema) });

  const submitCompanyName = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container account-setup">
      <form className="form" onSubmit={handleSubmit(submitCompanyName)}>
        <h3 className="form-title">Welcome to Keelworks</h3>
        <h4 className="form-subtitle">Let’s set up your ISD workspace</h4>
        <fieldset>
          <MyInput
            name="company_name"
            type="input"
            label="Company Name"
            placeholder="Company Name"
            {...register("company_name")}
          />
          <p>{errors.company_name?.message}</p>
        </fieldset>
        <div className="button-container">
          <button className="button signup">Next</button>
        </div>
      </form>
    </div>
  );
};

export default CompanyName;
