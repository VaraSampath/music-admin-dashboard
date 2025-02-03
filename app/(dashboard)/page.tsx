import Dashboard from "@/components/custom/dashboard/dashboard";
import NavSideBar from "@/components/custom/navigation/nav-sidebar";

export default function Home() {
  return (
    <div className="h-full flex">
      <NavSideBar />
      <Dashboard />
    </div>
  );
}
