import RestaurantMenu from "@/components/menu";
import { Menu, MenuItem } from "@/components/menu-section";
import { Metadata } from "next";

export type TableRow = {
  c: Array<{ v: string | number; f?: string }>;
};

export type TableColumn = {
  id: string;
  label: string;
  type: string;
  pattern?: string;
};

export const metadata: Metadata = {
  title: "Меню | Горбуфет «Шашлычная»",
  description: "Ассортимент блюд сети ресторанов «Шашлычная»",
};

export default async function MenuPage() {
  const menu = await getMenu();
  if (!menu) return <p>Не удалось найти меню</p>;

  const groupedMenu = groupMenuItems(menu);

  return (
    <div className="px-2 md:px-4 min-h-full ">
      <RestaurantMenu menu={groupedMenu} />
    </div>
  );
}

async function getMenu() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/1JKzbS2SxR1Oa4ciTxLXqACdQirNjDLqbMBjlzDqjtpY/gviz/tq?tqx=out:json",
    { cache: "no-store" }
  );

  const data = await res.text();

  // Extract the JSON part by removing the wrapper
  const jsonStart = data.indexOf("{");
  const jsonEnd = data.lastIndexOf("}") + 1;
  const jsonString = data.substring(jsonStart, jsonEnd);

  try {
    const parsedData = JSON.parse(jsonString);

    // Convert to normal JSON format
    const normalJson = parsedData.table.rows.map((row: TableRow) => {
      const item: Record<string, unknown> = {};
      parsedData.table.cols.forEach((col: TableColumn, index: number) => {
        if (row.c && row.c[index] && row.c[index].v !== null) {
          item[col.label || col.id] = row.c[index].v;
        }
      });
      return item;
    });

    return normalJson;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

function groupMenuItems(menuData: MenuItem[]): Menu {
  const groupedMenu: Menu = {};

  menuData.forEach((item: MenuItem) => {
    const category = item.category?.toLowerCase() || "other";

    if (!groupedMenu[category]) {
      groupedMenu[category] = [];
    }

    groupedMenu[category].push(item);
  });

  return groupedMenu;
}
