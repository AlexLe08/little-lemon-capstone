import NavSection from "./Nav";

const HeaderSection = () => {
    return (
        <header className="header">
            <img src="/assets/logo.png" alt="Little Lemon Logo" className="logo" />
            <NavSection />
        </header>
    );
}

export default HeaderSection;