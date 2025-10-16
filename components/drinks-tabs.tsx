import { MenuItem } from "@/components/menu-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DrinksTabsProps = {
  drinks: MenuItem[];
};

export function DrinksTabs({ drinks }: DrinksTabsProps) {
  const subcategories = Array.from(new Set(drinks.map((d) => d.subcategory)));

  return (
    <div className="flex w-full flex-col gap-4 py-2">
      <h1 className="mb-2 text-3xl px-2 md:text-3xl font-semibold">Напитки</h1>
      <Tabs defaultValue={subcategories[0]}>
        <div className="overflow-x-auto no-scrollbar">
          <TabsList className="flex  gap-2 min-w-max">
            {subcategories.map((sub) => (
              <TabsTrigger key={sub} value={sub!}>
                {sub}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {subcategories.map((sub) => {
          const items = drinks.filter((d) => d.subcategory === sub);
          return (
            <TabsContent key={sub} value={sub!}>
              <Card>
                <CardHeader>
                  <CardTitle>{sub}</CardTitle>
                </CardHeader>
                <CardContent className="px-2  grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <div
                      key={item.name + item.price}
                      className="flex hover:shadow-sm transition-all duration-300 justify-between items-center rounded-lg border p-2 text-sm"
                    >
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">{item.name}</p>
                        {item.description && (
                          <p className="text-muted-foreground text-xs">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <p className="font-bold whitespace-nowrap">
                        {item.price} р.
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
