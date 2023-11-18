import { Snackbar } from "~/components/Snackbar";
import { useAppSelector } from "~/redux/hooks";

import { PostList } from "./components/PostList";

import "./App.css";

function App() {
  const showSnackbarSelector = useAppSelector((state) => state.snackbar.show);

  return (
    <div>
      <PostList />
      {showSnackbarSelector && <Snackbar />}
    </div>
  );
}

export default App;
