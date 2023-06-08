import "./App.css";
import TestForm from "./components/form";
import FolderInput from "./components/folderInput";
import FolderUploader from "./components/folderUpload";

const App = () => {
  return (
    <div>
      <h1>This is App component</h1>
      {/* <Fetch_API /> */}
      {/* <TestForm /> */}
      {/* <FolderInput /> */}
      <FolderUploader />
    </div>
  );
};

export default App;
