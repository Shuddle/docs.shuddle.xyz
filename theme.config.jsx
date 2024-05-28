export default {
  logo: <span>Shuddle - Docs</span>,
  project: {
    link: "",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/logo.png" />
    </>
  ),
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://shuddle.xyz" target="_blank">
          Shuddle
        </a>
        .
      </span>
    ),
  },
};
