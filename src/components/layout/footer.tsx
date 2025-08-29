export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Vitae. All Rights Reserved.</p>
        <p className="mt-1">Designed for Dr. Sabir Shah</p>
      </div>
    </footer>
  );
}
