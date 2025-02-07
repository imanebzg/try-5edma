import { Link } from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 text-center">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go back to the homepage</Link>
    </main>
  );
};

export default NotFound;
