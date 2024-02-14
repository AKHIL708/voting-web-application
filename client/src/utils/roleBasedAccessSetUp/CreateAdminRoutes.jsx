import AddCandidate from "../../components/adminPages/addCandidate/AddCandidate";

const adminRoutesList = [
  {
    path: "addCandidate",
    requiredRole: "admin",
    componentRender: <AddCandidate />,
  },
];

export default adminRoutesList;
