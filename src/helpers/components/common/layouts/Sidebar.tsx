/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import { getUniqueKey } from "../../../../utils/methods/stringMethods";

export const Sidebar = () => {
  // Hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const inventorySidebar = (id: number) => [
    {
      label: "Dashboard",
      link: `/dashboard`,
    },
    {
      label: "View Inventory",
      link: `/item/${id}`,
    },
    {
      label: "Auto Reordering",
      link: `/reorder/${id}`,
    },
    {
      label: "Track Product",
      link: `/track/${id}`,
    },
    {
      label: "Supplier Information",
      link: `/supplier/${id}`,
    },
  ];

  // Check if navlink equals pathname(window.location.href)

  const defaultCss = "font-medium text-sm";
  const getActiveCss = (link: string) =>
    pathname === link ? `${defaultCss} text-blue-500` : defaultCss;
  //   Active css

  return (
    <aside className="min-w-[14rem] px-5 py-3 hidden md:flex md:flex-col gap-3 justify-start border-r-[1px] border-primary-100 bg-gray-300 cursor-pointer">
      {inventorySidebar(1)?.map(({ label, link }: any, idx: number) => (
        <p
          key={getUniqueKey(idx, label)}
          onClick={() => navigate(link)}
          className={getActiveCss(link)}
        >
          {label}
        </p>
      ))}
    </aside>
  );
};
