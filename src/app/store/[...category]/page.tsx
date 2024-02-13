type Props = {
  params: { category: string };
};
export default function Category(props: Props) {
  const { category } = props.params;
  console.log("props", props);
  return (
    <div>
      <h2>{`Category ${category}`}</h2>
    </div>
  );
}
