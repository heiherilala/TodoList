import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ToDoList from "../pages/ToDoList";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
const bodyTextMock = "Body text moxk."

test("Item have a input and it is empty in starting", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    expect(inputText).toBeInTheDocument();
    expect(inputText.getAttribute('value')).toBe("");
});

test("can write in input, and be empty afther enter", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    userEvent.type(inputText,bodyTextMock)
    expect(inputText).toBeInTheDocument();
    expect(inputText.getAttribute('value')).toBe(bodyTextMock);
    userEvent.type(inputText,"{enter}");
    expect(inputText.getAttribute('value')).toBe("");
});

test("Item have title 'To Do' and 'Done' in starting", () => {
    render (<ToDoList />);
    const ToDoTitle = screen.getByText("To Do");
    expect(ToDoTitle).toBeInTheDocument();
    const donneText = screen.getByText("Done");
    expect(donneText).toBeInTheDocument();
});


test("not have list of checkbox of To Do on Done in starting", () => {
    render (<ToDoList />);
    const todoList = screen.queryAllByRole("checkbox");
    expect(todoList.length).toBe(0);
});

test("add to do checked with rigth value whene click enter with not empty input", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    userEvent.type(inputText,`${bodyTextMock}{enter}`)
    const toDOItem = screen.getByRole("checkbox");
    expect(toDOItem.value).toBe(bodyTextMock);
});

test("remov todo item end add done item with rigth value whene check a to do", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    userEvent.type(inputText,`${bodyTextMock}{enter}`)
    let toDOList = screen.queryAllByRole("checkbox");
    let doneList = screen.queryAllByText(bodyTextMock);
    expect(toDOList.length).toBe(1);
    expect(toDOList[0].value).toBe(bodyTextMock);
    fireEvent.click(screen.getByRole("checkbox"));
    toDOList = screen.queryAllByRole("checkbox");
    expect(toDOList.length).toBe(0);
    expect(doneList.length).toBe(1);
    doneList = screen.queryAllByText(bodyTextMock);
    expect(doneList.length).toBe(1);
    expect(doneList[0].textContent).toContain(bodyTextMock);
});

test("not add to do checked whene click enter with empty input", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    userEvent.type(inputText,`${""}{enter}`)
    const todoList = screen.queryAllByRole("checkbox");
    expect(todoList.length).toBe(0);
});

it("have to be same as the Snapshot", () => {
    const component = renderer.create(<ToDoList />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });