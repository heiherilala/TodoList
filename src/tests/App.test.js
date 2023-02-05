import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

it("have to be same as the Snapshot", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });