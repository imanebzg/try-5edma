import { auth } from "../_lib/auth";
import Navigation from "./Navigation";

async function Header() {

  const session = await auth();
  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md z-30">
      <nav
        id="navbar"
        className="sticky top-0 w-full z-50 bg-white shadow-lg transition-all duration-300"
      >
        <div className="container mx-auto px-6 flex h-20 items-center justify-between">
          <Navigation session={session} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
