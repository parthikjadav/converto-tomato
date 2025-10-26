import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
      <p className="text-destructive flex items-center gap-2">
        <AlertCircle className="h-5 w-5" />
        {message}
      </p>
    </div>
  );
}
