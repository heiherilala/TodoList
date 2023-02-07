import CheckList from "../components/CheckList";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
const bodyTextMock = "Body text moxk."

    test('Item has a correct value', () => {
        render (<CheckList
            value={bodyTextMock}
            id={"todoID"}
            functionClick={()=>{}}
            checked={true}
        />)
        const item = screen.getByRole("checkbox");
        expect(item.value).toBe(bodyTextMock);
    });

    test('Item has checkbox and its checked = false on creation if checked in checklist is true.', () => {
        render (<CheckList
            value={bodyTextMock}
            id={"todoID"}
            functionClick={()=>{}}
            checked={true}
            name="todo"
        />)
        expect(screen.queryByRole("checkbox")).not.toBeNull();
        const item = screen.getByRole("checkbox");
        expect(item.checked).toBeFalsy();
    });

    test("Item does not have checkbox on creation when checked in Checklist is false.", () => {
        render(
            <CheckList
            value={bodyTextMock}
            id={"todoID"}
            functionClick={()=>{}}
            checked={false}
            name="done"
            />
        );
        expect(screen.queryByRole("checkbox")).toBeNull();
    });

    test("function work when clecked", () => {
        const functionMock = jest.fn();
        render(
            <CheckList
            value={bodyTextMock}
            id={"todoID"}
            functionClick={functionMock}
            checked={true}
            />
        );
        const ckeckboxItem = screen.getByRole("checkbox");
        fireEvent.click(ckeckboxItem);
        expect(functionMock.mock.calls.length).toBe(1);
    });

    it("have to be same as the Snapshot", () => {
        const component = renderer.create(
                <CheckList
                    value={bodyTextMock}
                    id={"todoID"}
                    functionClick={()=>{}}
                    checked={true}
                />
            );
      
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });