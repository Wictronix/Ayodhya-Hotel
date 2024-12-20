import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black/95 to-black border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterSection title="Address">
            <address className="text-amber-100/80 not-italic">
              idk will see
              <br />
              Ayodhya, Uttar Pradesh, India
            </address>
          </FooterSection>

          <FooterSection title="Phone">
            <div className="space-y-2">
              <a
                href="tel:+91998899"
                className="text-amber-100/80 hover:text-amber-200 block"
              >
                +91998899
              </a>
            </div>
          </FooterSection>

          <FooterSection title="Email">
            <a href="mail" className="text-amber-100/80 hover:text-amber-200">
              mail.mail@mail
            </a>
          </FooterSection>

          <FooterSection title="Social">
            <SocialLinks />
          </FooterSection>
        </div>

        <div className="mt-2 pt-2 border-t border-amber-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-100/60 text-sm">©Hotel | India</p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-amber-100/60 hover:text-amber-200 text-sm"
              >
                PRIVACY
              </a>
              <a
                href="#"
                className="text-amber-100/60 hover:text-amber-200 text-sm"
              >
                TERMS OF USE
              </a>
              <a
                href="#"
                className="text-amber-100/60 hover:text-amber-200 text-sm"
              >
                POLICY
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
