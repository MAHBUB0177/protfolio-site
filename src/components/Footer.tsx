import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 section-pad border-t border-border py-8">
      <div className="container-max flex flex-col gap-3 justify-center items-center mx-auto">
        {/* <p className="font-display text-base text-accent">
          {profile.shortName}
        </p> */}
        <p className="text-sm text-muted">
          © 2026 · Software Engineer · {profile.location}
        </p>
      </div>
    </footer>
  );
}
