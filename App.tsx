const url =
  "http://localhost:8080/api/v1/products?limit=10&&offset=0&&searchQuery=prod&&minPrice=1&maxPrice=20";
function App() {
  const [example, setExample] = useState({
    totalCount: 0,
  });
/**
 * @desc fetches data from products url
 */
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setExample(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(example, "example");
  return <div className="App">app</div>;
}

export default App;
