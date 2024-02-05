import Card from "../Card/Card";

const Main = () => {
  return (
    <main>
      <Card
        title="Я карточка 1"
        description="Тайм код: 1:26:00"
        img="https://placehold.co/150"
      ></Card>
      <Card
        title="Я карточка 2"
        description="Вторая"
        img="https://placehold.co/150"
      ></Card>
      <Card
        title="Я карточка 3"
        description="Третья"
        img="https://placehold.co/150"
      ></Card>
    </main>
  );
};

export default Main;
