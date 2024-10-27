import { getCategoryMenu } from "@/lib/gameQueries";
import SidebarNav from "./SidebarNav";

export default async function Sidebar() {
  const categoryMenu = await getCategoryMenu();
  return (
    <aside className="w-64 p-4 hidden lg:flex flex-col">
      {/* <pre>{JSON.stringify(categoryMenu,null,4)}</pre> */}
      <SidebarNav categoryMenu={categoryMenu} />
    </aside>
  );
}
