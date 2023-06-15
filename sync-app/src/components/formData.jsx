import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

const schema = yup.object().shape({
  files: yup.mixed().test("required", "Please select a file", (value) => {
    return value && value.length;
  }),
});

const UploadFile = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [image, setImage] = useState("");
  const convert2Base64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };
  const onSubmit = async (data) => {
    if (data.files.length > 0) {
      convert2Base64(data.files[0]);
    }

    const formData = new FormData();
    formData.append("file", data.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:9000/upload",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      {image ? <img src={image} width="450" alt="" /> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        {!watch("files") || watch("files").length === 0 ? (
          <div>
            <label htmlFor="fileUpload">Select File ..</label>
            <input type="file" id="fileUpload" {...register("files")} />
          </div>
        ) : (
          <strong>{watch("files")[0].name}</strong>
        )}
        <button type="submit" className="btn">
          Submit
        </button>
        {errors.files && <div>{errors.files.message}</div>}
      </form>
    </div>
  );
};

export default UploadFile;
