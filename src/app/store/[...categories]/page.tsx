type Props = {
  params: { categories: string };
};
export default function Categories(props: Props) {
  const { categories } = props.params;
  console.log("props", props);
  return (
    <div>
      <h2>{`categories ${categories}`}</h2>
    </div>
  );
}
