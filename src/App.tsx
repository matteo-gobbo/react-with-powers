import { Posts } from "~/components/Posts";
import { Snackbar } from "~/components/Snackbar";
import { useAppSelector } from "~/redux/hooks";

import "./App.css";

function App() {
  const showSnackbarSelector = useAppSelector((state) => state.snackbar.show);

  return (
    <div>
      <Posts />
      {showSnackbarSelector && <Snackbar />}
    </div>
  );
}

export default App;
