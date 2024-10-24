import ThemeApp from "./components/ThemeApp";

export const metadata = {
  title: "Interactive rating component",
  description: "Interactive rating component challenge on Frontend Mentor",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeApp>
          {children}
        </ThemeApp>
      </body>
    </html>
  );
}

export default RootLayout;