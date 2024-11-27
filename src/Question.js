import Option from "./components/Option";

function Question({ question, answer, dispatch }) {
  return (
    <>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </>
  );
}
export default Question;
