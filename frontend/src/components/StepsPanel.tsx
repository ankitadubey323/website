import { Check, Loader2, Circle } from 'lucide-react';

interface Step {
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
}

interface StepsPanelProps {
  steps: Step[];
  prompt: string;
}

export function StepsPanel({ steps, prompt }: StepsPanelProps) {
  return (
    <div className="p-4">
      {prompt && (
        <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-blue-500/20">
          <h3 className="text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">Your Prompt</h3>
          <p className="text-sm text-white leading-relaxed">{prompt}</p>
        </div>
      )}

      <div className="space-y-1">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-start p-3 rounded-lg transition-all duration-300 ${
              step.status === 'in-progress'
                ? 'bg-blue-500/10 border border-blue-500/30'
                : step.status === 'completed'
                ? 'bg-emerald-500/5 border border-emerald-500/20'
                : 'bg-slate-800/30 border border-slate-700/30'
            }`}
          >
            <div className="mr-3 mt-0.5 flex-shrink-0">
              {step.status === 'completed' && (
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              {step.status === 'in-progress' && (
                <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
              )}
              {step.status === 'pending' && (
                <Circle className="w-5 h-5 text-slate-600" />
              )}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  step.status === 'completed'
                    ? 'text-emerald-300'
                    : step.status === 'in-progress'
                    ? 'text-blue-300'
                    : 'text-slate-500'
                }`}
              >
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {steps.length > 0 && steps.every(s => s.status === 'completed') && (
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg border border-emerald-500/30">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-3">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Generation Complete!</h4>
              <p className="text-emerald-300 text-xs mt-0.5">Your website is ready to customize</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
