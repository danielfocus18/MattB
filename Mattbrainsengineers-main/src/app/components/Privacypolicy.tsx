import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export function PrivacyPolicy({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>Last updated: June 2026</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Gritstone Constructions Company Limited ("Gritstone," "we," "us," or
            "our") respects your privacy. This policy explains what information
            we collect through this website and how we use it.
          </p>

          <div>
            <h4 className="font-semibold text-foreground mb-1">
              Information We Collect
            </h4>
            <p>
              When you submit our contact form, we collect your name, email
              address, phone number, the service you're enquiring about, and
              your message. We do not collect any other personal information,
              and we do not use cookies or tracking analytics on this site.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-1">
              How We Use Your Information
            </h4>
            <p>
              We use the information you provide solely to respond to your
              enquiry, prepare quotations, and discuss potential projects. We do
              not sell, rent, or share your information with third parties for
              marketing purposes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-1">
              Third-Party Services
            </h4>
            <p>
              Our contact form uses EmailJS, a third-party service, to deliver
              your message directly to our email inbox. EmailJS processes the
              data only to send that email and does not use it for any other
              purpose. We recommend reviewing{" "}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                EmailJS's own privacy policy
              </a>{" "}
              for details on how they handle data in transit.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-1">
              Data Retention
            </h4>
            <p>
              We retain enquiry information only for as long as necessary to
              respond to you and manage any resulting project. If you would like
              us to delete your information, contact us using the details below.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-1">Your Rights</h4>
            <p>
              You may request access to, correction of, or deletion of any
              personal information you've submitted to us at any time by
              contacting us directly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-1">
              Changes to This Policy
            </h4>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-1">Contact Us</h4>
            <p>
              If you have any questions about this Privacy Policy, contact us
              at:
              <br />
              Email: gritstoneconstructioncompany@gmail.com
              <br />
              Phone: +233 24 683 6630
              <br />
              Address: WR-205-4261 Esaaman, Shama, Western Region, Ghana
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
