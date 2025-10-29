import RestaurantMenu from "@/components/menu";
import { Menu, MenuItem } from "@/components/menu-section";
import { Metadata } from "next";

const MENU_URLS = {
  shashlyk:
    "https://docs.google.com/spreadsheets/d/1JKzbS2SxR1Oa4ciTxLXqACdQirNjDLqbMBjlzDqjtpY/gviz/tq?tqx=out:json",
  pelmen:
    "https://docs.google.com/spreadsheets/d/1JKzbS2SxR1Oa4ciTxLXqACdQirNjDLqbMBjlzDqjtpY/gviz/tq?tqx=out:json&gid=1561920020",
};

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

export default async function MenuPage({
  params,
}: {
  params: { menuType: "shashlyk" | "pelmen" };
}) {
  const { menuType } = await params;
  const menu = await getMenu(MENU_URLS[menuType]);
  if (!menu) return <p>Не удалось найти меню</p>;

  const groupedMenu = groupMenuItems(menu);

  return (
    <div className="min-h-full ">
      <RestaurantMenu menu={groupedMenu} />
    </div>
  );
}

async function getMenu(url: string) {
  const res = await fetch(url, { cache: "no-store" });

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
    item.price = convertPrice(String(item.price));
    const category = item.category?.toLowerCase() || "other";

    if (!groupedMenu[category]) {
      groupedMenu[category] = [];
    }

    groupedMenu[category].push(item);
  });

  return groupedMenu;
}

function convertPrice(val: string) {
  if (val.includes(".")) {
    const [a, b] = val.split(".");
    return `${a} / ${b}0`;
  }
  return val;
}
