import FooterModalButton from "@/components/FooterModalButton";

export default function Footer() {
    return (
        <section className="flex items-center justify-center">
            <footer className="footer hidden md:flex">
                <FooterModalButton>
                    Press me for options
                </FooterModalButton>
            </footer>
            <footer className="flex md:hidden fixed bottom-0 z-10">
                <FooterModalButton image={true}>
                    Hey soul sister
                </FooterModalButton>
            </footer>
        </section>
    );
}