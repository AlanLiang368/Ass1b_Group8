import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = ({submit}) => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    submit && submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input data-testid={'title'} required {...register("title")} placeholder="Title" />
      <p>
        <input data-testid={'authors'} required {...register("authors")} placeholder="Authors" />
      </p>
      <p>
        <input data-testid={'source'} required {...register("source")} placeholder="Source" />
      </p>
      <p>
        <input data-testid={'publishYear'} type={'number'} required {...register("publishYear")} placeholder="Publication Year" />
      </p>
      <p>
        <input data-testid={'doi'} required {...register("doi")} placeholder="DOI" />
      </p>
      
      <select data-testid={'sePractice'} required {...register("sePractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
      </select>

      <p>{result}</p>
      <input data-testid={'submit'} type="submit" />
    </form>
  );
};
export default SubmissionForm;