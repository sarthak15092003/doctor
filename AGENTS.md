<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Render all clinic pages inside the shared ClinicLayout and use React content rather than captured HTML so navigation and controls are interactive.
- Keep clinic contact constants and enquiry-link generation in src/lib/clinic.ts so contact actions remain consistent across pages.
- Appointment enquiries are prepared client-side and sent explicitly through WhatsApp; never present a prepared enquiry as a confirmed or submitted booking.
- Use the semantic theme in src/styles.css for the clinic design; the captured public/clinic.css is not loaded by the redesigned pages.
