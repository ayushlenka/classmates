export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Classmates. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Classmates is not affiliated with or endorsed by the University of
          California, Davis.
        </p>
      </div>
    </footer>
  );
}
