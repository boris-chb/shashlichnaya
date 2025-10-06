import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DrinksTabs() {
  return (
    <div className="flex w-full flex-col gap-6 p-2">
      <h1 className="text-2xl font-bold">Напитки</h1>
      <Tabs defaultValue="tincture">
        <TabsList>
          <TabsTrigger value="tincture">Настойки</TabsTrigger>
          <TabsTrigger value="vodka">Водка</TabsTrigger>
          <TabsTrigger value="beer-draught">Пиво разливное</TabsTrigger>
          <TabsTrigger value="beer-bottle">Пиво бутылочное</TabsTrigger>
        </TabsList>
        <TabsContent value="beer-draught">
          <Card>
            <CardHeader>
              <CardTitle>Свежее пиво разливное</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-6">
              {/* <Image src="/beer.jpg" alt="beer" width={200} height={200} /> */}
              Пиво разливное 300руб
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="beer-bottle">
          <Card>
            <CardHeader>
              <CardTitle>Пиво бутылочное</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-6">
              {/* <Image src="/beer.jpg" alt="beer" width={200} height={200} /> */}
              <p>Пиво 1 300руб</p>
              <p>Пиво 2 300руб</p>
              <p>Пиво 3 300руб</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vodka">
          <Card>
            <CardHeader>
              <CardTitle>Пиво бутылочное</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-6">
              {/* <Image src="/beer.jpg" alt="beer" width={200} height={200} /> */}
              <p>Водка 1 500руб</p>
              <p>Водка 2 500руб</p>
              <p>Водка 3 500руб</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tincture">
          <Card>
            <CardHeader>
              <CardTitle>Настойки</CardTitle>
              <CardDescription>40 мл.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-6">
              {/* <Image src="/beer.jpg" alt="beer" width={200} height={200} /> */}
              <div>Таксистовка 290</div>
              <div>Цитрус 290 </div>
              <div>Яблоко-Щавель 290 </div>
              <div>Крыжовник 290</div>
              <div>Маракуйя 290 </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
