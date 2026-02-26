import type { Menu, MenuItem } from "@/components/menu-section";

export type TableRow = {
  c: Array<{ v: string | number; f?: string }>;
};

export type TableColumn = {
  id: string;
  label: string;
  type: string;
  pattern?: string;
};

export async function getMenu(url: string): Promise<MenuItem[] | null> {
  const res = await fetch(url);

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

    return normalJson as MenuItem[];
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

export function groupMenuItems(menuData: MenuItem[]): Menu {
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
