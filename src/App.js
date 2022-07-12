import useFetch from "./custom-hooks/useFetch";

const App = () => {
  const url = "https://randomuser.me/api/";
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <div>Wait for the data</div>;
  }

  if (error !== null) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data?.results[0]?.email}
    </div>
  );
};

export default App;
