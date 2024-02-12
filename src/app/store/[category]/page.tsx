type Props = {
  params: { category: string };
};
export default function Category(props: Props) {
  const { category } = props.params;
  /*  console.log("props", props); */
  return (
    <div>
      <h1>{`Category ${category}`}</h1>
    </div>
  );
}
