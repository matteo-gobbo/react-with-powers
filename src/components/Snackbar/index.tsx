import { Severity } from "~/models/Snackbar";

import { useAppSelector } from "../../redux/hooks";

export const Snackbar = () => {
  const severitySnackbarSelector = useAppSelector(
    (state) => state.snackbar.severity
  );
  const titleSnackbarSelector = useAppSelector((state) => state.snackbar.title);

  const bgSelector: Record<Severity, string> = {
    error: "red",
    info: "grey",
    success: "green",
    warning: "yellow",
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "400px",
        height: "60px",
        background: bgSelector[severitySnackbarSelector],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      {titleSnackbarSelector}
    </div>
  );
};
