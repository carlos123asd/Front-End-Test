import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import CardProduct from "@/components/molecules/CardProduct";

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");

    return {
        ...actual,
        useNavigate: () => mockedNavigate,
    };
});

describe("CardProduct", () => {
    const product = {
        id: "1",
        brand: "Apple",
        model: "iPhone 15",
        price: "999",
        imgUrl: "test-image.jpg",
    };

    it("renders product information", () => {
        render(
            <MemoryRouter>
                <CardProduct product={product} />
            </MemoryRouter>
        );

        expect(screen.getByText("Apple")).toBeInTheDocument();

        expect(screen.getByText("iPhone 15")).toBeInTheDocument();

        expect(screen.getByText("$999")).toBeInTheDocument();

        expect(screen.getByAltText("iPhone 15")).toBeInTheDocument();
    });

    it("navigates to product details when button is clicked", () => {
        render(
            <MemoryRouter>
                <CardProduct product={product} />
            </MemoryRouter>
        );

        const button = screen.getByText("See more details");

        fireEvent.click(button);

        expect(mockedNavigate).toHaveBeenCalledWith("/products/1");
    });
});