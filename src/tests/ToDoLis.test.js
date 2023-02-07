import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ToDoList from "../pages/ToDoList";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
const bodyTextMock = "Body text moxk."

test("Item has an input and it is empty at launch.", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    expect(inputText).toBeInTheDocument();
    expect(inputText.getAttribute('value')).toBe("");
});

test("Can write in input and be empty after pressing Enter.", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    userEvent.type(inputText,bodyTextMock)
    expect(inputText).toBeInTheDocument();
    expect(inputText.getAttribute('value')).toBe(bodyTextMock);
    userEvent.type(inputText,"{enter}");
    expect(inputText.getAttribute('value')).toBe("");
});

test("The page has the title 'To Do' and 'Done' at launch.", () => {
    render (<ToDoList />);
    const ToDoTitle = screen.getByText("To Do");
    expect(ToDoTitle).toBeInTheDocument();
    const donneText = screen.getByText("Done");
    expect(donneText).toBeInTheDocument();
});


test("Do not have list of checkbox in theTo Do and Done at launch.", () => {
    render (<ToDoList />);
    const todoList = screen.queryAllByRole("checkbox");
    expect(todoList.length).toBe(0);
});

test("Add to do Checked with correct value when clicking Enter with non-empty input.", () => {
    render (<ToDoList />);
    const inputText = screen.getByRole("textbox");
    userEvent.type(inputText,`${bodyTextMock}{enter}`)
    const toDOItem = screen.getByRole("checkbox");
    expect(toDOItem.value).toBe(bodyTextMock);
});

test("Remove a to-do item and add a done item with the correct value when checking a to-do.", () => {
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

test("Do not add to do checked when clicking Enter with empty input", () => {
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