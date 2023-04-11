import { act, renderHook } from "@testing-library/react";
import { useDarkMode } from "../hooks/useDarkMode";

    // Tests that toggling dark mode on and off updates isdarkmode state correctly. 
    it("test_dark_mode_toggle", () => {
        const { result } = renderHook(() => useDarkMode());
        expect(result.current.isDarkMode).toBe(false);
        act(() => {
            result.current.toggleDarkMode();
        });
        expect(result.current.isDarkMode).toBe(true);
        act(() => {
            result.current.toggleDarkMode();
        });
        expect(result.current.isDarkMode).toBe(false);
    });

    // Tests that usestate hook initializes isdarkmode state to false. 
    it("test_initial_state", () => {
        const { result } = renderHook(() => useDarkMode());
        expect(result.current.isDarkMode).toBe(false);
    });

    // Tests that document.body classlist is updated correctly when isdarkmode state changes. 
    it("test_body_class_list", () => {
        const { result } = renderHook(() => useDarkMode());
        expect(document.body.classList.contains('dark')).toBe(false);
        act(() => {
            result.current.toggleDarkMode();
        });
        expect(document.body.classList.contains('dark')).toBe(true);
        act(() => {
            result.current.toggleDarkMode();
        });
        expect(document.body.classList.contains('dark')).toBe(false);
    });
