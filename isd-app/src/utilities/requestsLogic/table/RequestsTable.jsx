import "./RequestsTable.scss";
import RequestRow from "./RequestRow";

const info = [
  {
    requestName: "Reducing issues in manufacturing workflow",
    assignedTo: "John Doe",
    lastUpdated: "12 Apr, 2024",
    stage: "storyboard",
    status: "stakeholderReview",
  },
  {
    requestName: "Reducing issues in manufacturing workflow",
    assignedTo: "John Doe",
    lastUpdated: "12 Apr, 2024",
    stage: "needsAnalysis",
    status: "qaReview",
  },
  {
    requestName: "Reducing issues in manufacturing workflow",
    assignedTo: "John Doe",
    lastUpdated: "12 Apr, 2024",
    stage: "objectives",
    status: "status",
  },
  {
    requestName: "Reducing issues in manufacturing workflow",
    assignedTo: "John Doe",
    lastUpdated: "12 Apr, 2024",
    stage: "courseStructure",
    status: "inProgress",
  },
];


const RequestsTable = () => {
  return (
    <table className="requests-table">
      <thead className="requests-table-header">
        <tr>
          <th className="request-name-header">Request name</th>
          <th className="assigned-to-header">Assigned To</th>
          <th className="last-updated-header">Last Updated</th>
          <th className="stage-header">Stage</th>
          <th className="status-header">Status</th>
          <th className="actions-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {info.map((request, index) => (
          <RequestRow key={index} request={request} />
        ))}
      </tbody>
    </table>
  );
};

export default RequestsTable;
