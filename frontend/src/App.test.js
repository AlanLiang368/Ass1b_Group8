import {fireEvent, render, screen} from '@testing-library/react';

import SubmissionForm from "./components/SubmissionForm";
import SEPractice from "./pages/SE-Practice";

import {act} from "react-dom/test-utils";

test('Search Articles', async () => {
  const articles = [
    {
      title: 'omg title',
      authors: 'authors',
      source: 'source',
      publishYear: 1000,
      doi: '23dwqdwq',
      sePractice: 'TDD'
    },
    {
      title: 'wow title',
      authors: 'authors1',
      source: 'source1',
      publishYear: 1200,
      doi: '23dwqdwq1',
      sePractice: 'Mob Programming'
    }
  ];
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve([articles[0]])
      })
    });
  await act(async () => {
    render(<SEPractice />)
  });
  await act(async () => {
    const sePractice = await screen.getByTestId('sePractice');
    const title = await screen.getByTestId('title');
    const submit = await screen.getByTestId('submit');
    await fireEvent.change(sePractice, {target: {value: 'TDD'}});
    await fireEvent.change(title, { target: { value: 'omg' } })
    await fireEvent.click(submit);
  })

  setTimeout(() => {
    const searchedArticleTitle = screen.getByText(articles[0].title);
    expect(searchedArticleTitle).toBeInTheDocument();
    done()
  }, 1000);
})

test('Article Table Default Render', async () => {
  const articles = [
    {
      title: 'title',
      authors: 'authors',
      source: 'source',
      publishYear: 1000,
      doi: '23dwqdwq',
      sePractice: 'dwqdqdq'
    },
    {
      title: 'title1',
      authors: 'authors1',
      source: 'source1',
      publishYear: 1200,
      doi: '23dwqdwq1',
      sePractice: 'dwqdqdq1'
    }
  ];
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(articles)
      })
    });
  await act(async () => {
    render(<SEPractice />)
  });
  const firstTitle = screen.getByText(articles[0].title);
  const secondTitle = screen.getByText(articles[1].title);
  expect(firstTitle).toBeInTheDocument();
  expect(secondTitle).toBeInTheDocument();
});

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
  fireEvent.change(sePractice, {target: {value: inputValues.sePractice}});
  fireEvent.click(submit);

});
