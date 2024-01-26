import "./NeedsAnalysis.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ISDFlowPage from "../../../utilities/isdPagesLogic/isdFlowPage/ISDFlowPage";
import { MyInput, MyTextArea } from "../../../utilities/utils";

const errorSchema = yup.object({}).required();

const NeedsAnalysisForm = ({ currentStep }) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const submitNeedsAnalysisForm = async (data) => {
    console.log(data);
  };

  const handleCancelClick = () => {
    reset();
  };

  return (
    <form
      className="isd-flow-form"
      onSubmit={handleSubmit(submitNeedsAnalysisForm)}
    >
      <h3 className="form-title">{currentStep}</h3>
      <fieldset>
        <div className="field-title">Purpose</div>
        <div className="field-text">
          This document supports academic needs analysis (reduced) as well as
          organizational (expanded). You must understand the problem this course
          addresses. Organizational learning analysis are more involved{" "}
          <span>show more</span>.
        </div>
      </fieldset>
      <fieldset>
        <div className="field-title">Quality Criteria</div>
        <div className="field-text">
          1. The problem is clearly stated and fully understood by the design
          team.
          <br />
          2. We have credible data confirming the extent of the problem (applies
          primarily to organizational) <span>show more</span>.
        </div>
      </fieldset>
      <fieldset>
        <MyInput
          name="stakeholder"
          type="input"
          label="Stakeholder"
          value="Thomas Garrod"
          disabled
          {...register("stakeholder")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="problem_statement"
          type="input"
          label="Problem Statement"
          value="Inventory management workflow breaking issue"
          disabled
          {...register("problem_statement")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="problem_data"
          type="input"
          label="Problem Data"
          {...register("problem_data")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="success_statement"
          type="input"
          label="Success Statement"
          {...register("success_statement")}
        />
      </fieldset>
      <fieldset>
        <MyTextArea
          name="audience_definition"
          label="Audience Definition"
          rows="4"
          placeholder="Enter audience definition..."
          {...register("audience_definition")}
        />
      </fieldset>
      <fieldset>
        <MyTextArea
          name="audience_benefit"
          label="Audience Benefit"
          rows="4"
          placeholder="Enter audience benefit..."
          {...register("audience_benefit")}
        />
      </fieldset>
      <fieldset>
        <MyTextArea
          name="audience_needs"
          label="Audience Needs"
          rows="4"
          placeholder="Enter audience needs..."
          {...register("audience_needs")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="change_issues"
          type="input"
          label="Change Issues"
          {...register("change_issues")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="technology_issues"
          type="input"
          label="Technology Issuess"
          {...register("technology_issues")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="proof_of_consumption"
          type="input"
          label="Proof of Consumption"
          {...register("proof_of_consumption")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="potential_for_change"
          type="input"
          label="Potential for Change"
          {...register("potential_for_change")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="delivery_strategy"
          type="input"
          label="Delivery Strategy"
          {...register("delivery_strategy")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="project_risks"
          type="input"
          label="Project Risks"
          {...register("project_risks")}
        />
      </fieldset>
      <fieldset>
        <MyInput
          name="recommendation"
          type="input"
          label="Recommendation"
          placeholder="Inventory management workflow breaking issue"
          {...register("recommendation")}
        />
      </fieldset>
      <div className="button-container">
        <button className="button next">Next</button>
        <button
          className="button cancel"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const NeedsAnalysis = () => {
  const currentStep = "Needs Analysis";

  return (
    <ISDFlowPage currentStep={currentStep}>
      <NeedsAnalysisForm currentStep={currentStep} />
    </ISDFlowPage>
  );
};

export default NeedsAnalysis;
