import { useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";

// Renders a captured page of the HealthEasy/MediCare clinic site exactly as it was.
export function ClinicPage({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href");
      if (a && href && href.startsWith("/") && !href.startsWith("//") && !a.target) {
        e.preventDefault();
        const path = /^\/blog\/\d+/.test(href) ? "/blog" : href;
        navigate({ to: path });
        window.scrollTo(0, 0);
      }
    };
    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      form.reset();
      alert("Thank you! We will contact you shortly.");
    };
    el.addEventListener("click", onClick);
    el.addEventListener("submit", onSubmit);
    return () => {
      el.removeEventListener("click", onClick);
      el.removeEventListener("submit", onSubmit);
    };
  }, [navigate]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
