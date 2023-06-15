import "./App.css";
import FileUploadForm from "./components/uploadFile";
import DataDisplay from "./components/displayData";
import RegisterForm from "./components/registerData";
import LoginForm from "./components/login";

const App = () => {
  return (
    <div>
      <h1>This is App component</h1>

      {/* <FileUploadForm />
      <DataDisplay /> */}
      <RegisterForm />
    </div>
  );
};

export default App;
