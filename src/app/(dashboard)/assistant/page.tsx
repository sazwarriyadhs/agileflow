import { AssistantForm } from '@/components/assistant-form';

export default function AssistantPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Daily Notes Assistant</h2>
        <p className="text-muted-foreground">
          Let AI help you prepare for your daily stand-up meeting.
        </p>
      </div>

      <AssistantForm />
    </div>
  );
}
