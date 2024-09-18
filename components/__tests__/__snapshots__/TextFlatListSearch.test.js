import React from "react";
import {
    render,
    fireEvent
} from "@testing-library/react-native";
import FlatListWithSearch from "@/components/FlatListWithSearch";

const mockData = [{
        id: 1,
        name: "obi"
    },
    {
        id: 2,
        name: "luke"
    },
    {
        id: 3,
        name: "C-3"
    },
];
describe("FlatListWithSearch", () => {
    it("data filter - input", () => {
        const {
            getByText,
            getByPlaceholderText,
            queryByText
        } = render( <
            FlatListWithSearch data = {
                mockData
            }
            />
        );
        const searchInput = getByPlaceholderText("Search");
        fireEvent.changeText(searchInput, "luke");
        expect(getByText("luke")).toBeTruthy();
        expect(queryByText("C-3")).toBeNull();
        expect(queryByText("obi")).toBeNull();
    });

    it("input = empty -> show all ", () => {
        const {
            getByText,
            getByPlaceholderText
        } = render( <
            FlatListWithSearch data = {
                mockData
            }
            />
        );
        const searchInput = getByPlaceholderText("Search");
        fireEvent.changeText(searchInput, "luke");
        expect(getByText("luke")).toBeTruthy();
        fireEvent.changeText(searchInput, "");
        expect(getByText("obi")).toBeTruthy();
        expect(getByText("luke")).toBeTruthy();
        expect(getByText("C-3")).toBeTruthy();
    });
});