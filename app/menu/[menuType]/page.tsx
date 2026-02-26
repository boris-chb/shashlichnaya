import RestaurantMenu from "@/components/menu";
import { getMenu, groupMenuItems } from "@/lib/menu";
import { Metadata } from "next";

const MENU_URLS = {
  shashlyk:
    "https://docs.google.com/spreadsheets/d/1JKzbS2SxR1Oa4ciTxLXqACdQirNjDLqbMBjlzDqjtpY/gviz/tq?tqx=out:json",
  pelmen:
    "https://docs.google.com/spreadsheets/d/1JKzbS2SxR1Oa4ciTxLXqACdQirNjDLqbMBjlzDqjtpY/gviz/tq?tqx=out:json&gid=1561920020",
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

  return <RestaurantMenu menu={groupedMenu} />;
}
