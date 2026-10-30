import ScenarioTester from "./components/ScenarioTester";
import MatrixUploader from "./components/MatrixUploader";
import AdminDashboard from "./components/AdminDashboard";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <AdminDashboard />
      <ScenarioTester />
      <MatrixUploader />
    </div>
  );
}
