import {Sidebar} from "./Sidebar";
import {componentRender} from "shared/lib/tests";
import {fireEvent} from "@testing-library/dom";

describe("Sidebar", () => {
    test("Renders", () => {
        const {getByTestId} = componentRender(
            <Sidebar/>
        );

        expect(getByTestId('sidebar')).toBeInTheDocument();
    });

    test("Sidebar collapsing", () => {
        const {getByTestId} = componentRender(<Sidebar/>);
        const collapseButton = getByTestId('sidebar-collapse');
        const sidebar = getByTestId('sidebar');

        fireEvent.click(collapseButton);
        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(collapseButton);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});