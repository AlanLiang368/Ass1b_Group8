import {fireEvent, render, screen} from '@testing-library/react';

import SubmissionForm from "./components/SubmissionForm";

import {act} from "react-dom/test-utils";


test('Submit Article Form', async () => {

  const inputValues = {
    title: 'title',
    authors: 'authors',
    source: 'source',
    publishYear: 1000,
    doi: '23dwqdwq',
    sePractice: 'dwqdqdq'
  }

  function objectsIsSame(o1, o2) {
    for (let key in o1) {
     if (! key in o2) {
      return false;
     }
    }
    return true;
  }


  const handleSubmit = (values) => {
    expect(objectsIsSame(inputValues, values)).toBe(true);
  }

  await act(() => {
    render(<SubmissionForm submit={handleSubmit} />)
  });


  const title = screen.getByTestId('title');
  const authors = screen.getByTestId('authors');
  const source = screen.getByTestId('source');
  const publishYear = screen.getByTestId('publishYear');
  const doi = screen.getByTestId('doi');
  const sePractice = screen.getByTestId('sePractice');
  const submit = screen.getByTestId('submit');

  fireEvent.change(title, {target: {value: inputValues.title}});
  fireEvent.change(authors, {target: {value: inputValues.authors}});
  fireEvent.change(source, {target: {value: inputValues.source}});
  fireEvent.change(publishYear, {target: {value: inputValues.publishYear}});
  fireEvent.change(doi, {target: {value: inputValues.doi}});
  fireEvent.change(sePractice, {title: {value: inputValues.sePractice}});
  fireEvent.click(submit);

});
