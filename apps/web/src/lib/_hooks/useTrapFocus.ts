import { useEffect } from "react";
import type { RefObject } from "react";

export function useTrapFocus(active: boolean, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!active || !ref.current) {
      return;
    }

    const node = ref.current;
    const previous = document.activeElement as HTMLElement | null;

    const selector = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      'input:not([type="hidden"]):not([disabled])',
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const focusable = Array.from(node.querySelectorAll<HTMLElement>(selector));

    if (focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previous) {
        previous.focus();
      }
    };
  }, [active, ref]);
}
