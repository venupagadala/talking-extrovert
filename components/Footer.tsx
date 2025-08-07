export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 text-gray-600 py-6 text-center">
      <p>&copy; {new Date().getFullYear()} TutorAI. All rights reserved.</p>
    </footer>
  );
}